import { redirect } from "next/navigation";
import { authorized } from "@/lib/analytics/auth";
import { configured, load } from "@/lib/analytics/store";
import { summarize } from "@/lib/analytics/data";
import s from "./admin.module.css";
export const metadata = {
  title: "MEGA · 流量监控",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";
export const maxDuration = 60;
const duration = (n: number) =>
  n < 60
    ? `${Math.round(n)} 秒`
    : `${Math.floor(n / 60)} 分 ${Math.round(n % 60)} 秒`;
function regionName(name: string) {
  const [country, ...rest] = name.split(" / ");
  if (!/^[A-Z]{2}$/.test(country)) return name;
  return [
    new Intl.DisplayNames(["zh"], { type: "region" }).of(country),
    ...rest,
  ].join(" / ");
}
function sectionName(name: string) {
  return name
    .replace("scenario-panel-grid / ", "新能源并网 / ")
    .replace("scenario-panel-frequency / ", "调频储能 / ")
    .replace("scenario-panel-ev / ", "电动汽车充电 / ")
    .replace("scenario-panel-mobile / ", "移动应急供电 / ")
    .replace("scenario-panel-commercial / ", "工商业储能 / ")
    .replace("system-architecture", "三维系统架构");
}
function Table({
  rows,
  section = false,
}: {
  rows: { name: string; views: number; seconds: number }[];
  section?: boolean;
}) {
  return (
    <div className={s.table}>
      <table>
        <thead>
          <tr>
            <th>{section ? "页面 / 内容区域" : "名称"}</th>
            <th>{section ? "有停留的浏览次数" : "浏览次数"}</th>
            <th>累计有效停留</th>
            <th>平均停留</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>{section ? sectionName(r.name) : r.name}</td>
              <td>{r.views}</td>
              <td>{duration(r.seconds)}</td>
              <td>{duration(r.seconds / r.views)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!rows.length && <p className={s.muted}>暂无统计数据。</p>}
    </div>
  );
}
export default async function Analytics({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  if (!(await authorized())) redirect("/admin/login");
  const q = await searchParams;
  const days = [1, 7, 30].includes(Number(q.days)) ? Number(q.days) : 7;
  let error = "",
    truncated = false;
  let records: Parameters<typeof summarize>[0] = [];
  try {
    if (!configured()) throw new Error();
    const result = await load(days);
    records = result.records;
    truncated = result.truncated;
  } catch {
    error = "统计存储暂时不可用，请稍后重试。此处不代表访问量为零。";
  }
  const d = summarize(records);
  return (
    <main className={s.shell}>
      <header className={s.header}>
        <div>
          <p className={s.brand}>MEGA / ANALYTICS</p>
          <h1>网站流量监控</h1>
          <p className={s.muted}>
            了解访客来自哪里，以及哪些内容获得更多关注。
          </p>
        </div>
        <form action="/api/admin/logout" method="post">
          <button>退出登录</button>
        </form>
      </header>
      <form className={s.toolbar}>
        <label htmlFor="days">统计范围</label>
        <select name="days" id="days" defaultValue={days}>
          <option value="1">今天</option>
          <option value="7">近 7 天</option>
          <option value="30">近 30 天</option>
        </select>
        <button>查询 / 刷新</button>
        <span className={s.muted}>日本时间 · 数据通常约 1 分钟更新</span>
      </form>
      {error ? (
        <p className={s.notice} role="alert">
          {error}
        </p>
      ) : (
        <>
          <div className={s.stats}>
            {[
              ["匿名访客", d.visitors],
              ["浏览次数", d.views],
              ["访问会话", d.sessions],
              ["平均页面有效停留", duration(d.views ? d.seconds / d.views : 0)],
            ].map(([label, value]) => (
              <div className={s.card} key={label}>
                <span className={s.muted}>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          {!d.views && (
            <p className={s.notice}>
              统计已准备就绪，等待真实访问。历史访问无法追溯；已登录管理员、预览环境和常见机器人不计入。
            </p>
          )}
          {truncated && (
            <p className={s.notice}>
              当前结果达到读取上限，仅显示部分数据。请缩短统计范围；这些数值不是完整总量。
            </p>
          )}
          <div className={s.grid}>
            <section className={`${s.panel} ${s.wide}`}>
              <h2>每日浏览趋势</h2>
              {d.days.map((r) => (
                <div className={s.bar} key={r.name}>
                  <span>{r.name}</span>
                  <i
                    style={{
                      width: `${Math.max(1, (r.views / Math.max(...d.days.map((x) => x.views))) * 70)}%`,
                    }}
                  />
                  <b>{r.views}</b>
                </div>
              ))}
              {!d.days.length && <p className={s.muted}>有访问后显示趋势。</p>}
            </section>
            <section className={s.panel}>
              <h2>访客国家 / 地区</h2>
              <Table
                rows={d.countries.map((r) => ({
                  ...r,
                  name: regionName(r.name),
                }))}
              />
            </section>
            <section className={s.panel}>
              <h2>访问来源</h2>
              <Table rows={d.referrers} />
            </section>
            <section className={`${s.panel} ${s.wide}`}>
              <h2>浏览页面</h2>
              <Table rows={d.pages} />
            </section>
            <section className={`${s.panel} ${s.wide}`}>
              <h2>内容区域与场景停留</h2>
              <p className={s.muted}>
                按主要可见区域分配时间，同一秒不重复累计。各场景单独记录停留。
              </p>
              <Table rows={d.sections} section />
            </section>
            <section className={`${s.panel} ${s.wide}`}>
              <h2>访问设备</h2>
              <Table rows={d.devices} />
            </section>
          </div>
        </>
      )}
      <p className={s.muted} style={{ marginTop: 24 }}>
        统计从功能上线后开始。匿名访客是浏览器估算，跨设备不合并；会话闲置 30
        分钟后重计。有效停留只计前台可见且最近 60
        秒有操作的时间，不等同于实际阅读。网络位置为估算，VPN
        可能影响结果。尊重浏览器 DNT / GPC；不保存原始
        IP、表单内容或完整来源网址。
      </p>
    </main>
  );
}
