import { put, list, get } from "@vercel/blob";
import { mkdir, writeFile, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { Visit } from "./data";
const local = () => process.env.ANALYTICS_LOCAL_DIR;
export function configured() {
  return !!(
    local() ||
    process.env.BLOB_READ_WRITE_TOKEN ||
    process.env.BLOB_STORE_ID
  );
}
export async function save(v: Visit) {
  const name = `analytics/${v.day}/${v.id}/${String(v.sequence).padStart(4, "0")}.json`;
  if (local() && !process.env.VERCEL) {
    const file = path.join(local()!, name);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, JSON.stringify(v));
    return;
  }
  await put(name, JSON.stringify(v), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
  });
}
export async function load(days: number) {
  const dates = Array.from({ length: days }, (_, i) =>
    new Date(Date.now() - i * 86400_000).toLocaleDateString("en-CA", {
      timeZone: "Asia/Tokyo",
    }),
  );
  const records: Visit[] = [];
  let truncated = false;
  if (local() && !process.env.VERCEL) {
    for (const day of dates) {
      const dir = path.join(local()!, "analytics", day);
      for (const id of await readdir(dir).catch(() => [])) {
        const files = await readdir(path.join(dir, id));
        const last = files.sort().at(-1);
        if (last)
          records.push(
            JSON.parse(await readFile(path.join(dir, id, last), "utf8")),
          );
      }
    }
    return { records, truncated };
  }
  const latest = new Map<string, { pathname: string; url: string }>();
  let scanned = 0;
  for (const day of dates) {
    let cursor: string | undefined;
    do {
      const result = await list({
        prefix: `analytics/${day}/`,
        limit: 1000,
        cursor,
      });
      for (const blob of result.blobs) {
        const id = blob.pathname.split("/")[2];
        const prev = latest.get(id);
        if (!prev || blob.pathname > prev.pathname) latest.set(id, blob);
      }
      scanned += result.blobs.length;
      cursor = result.hasMore ? result.cursor : undefined;
      if (scanned >= 20000) {
        truncated = true;
        break;
      }
    } while (cursor);
    if (truncated) break;
  }
  const blobs = [...latest.values()];
  if (blobs.length > 3000) {
    blobs.length = 3000;
    truncated = true;
  }
  for (let i = 0; i < blobs.length; i += 15)
    await Promise.all(
      blobs.slice(i, i + 15).map(async (b) => {
        const result = await get(b.url, { access: "private" });
        if (result && result.statusCode === 200)
          records.push(await new Response(result.stream).json());
        else throw new Error("Statistics record could not be read");
      }),
    );
  return { records, truncated };
}
