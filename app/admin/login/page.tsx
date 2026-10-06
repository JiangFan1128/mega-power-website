import { redirect } from "next/navigation";
import { authorized } from "@/lib/analytics/auth";
import s from "../analytics/admin.module.css";
export const metadata = {
  title: "MEGA · 后台登录",
  robots: { index: false, follow: false },
};
export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await authorized()) redirect("/admin/analytics");
  const { error } = await searchParams;
  return (
    <main className={s.shell}>
      <div className={`${s.panel} ${s.login}`}>
        <p className={s.brand}>MEGA / PRIVATE</p>
        <h1>流量后台</h1>
        <p className={s.muted}>仅管理员可查看网站访问统计。</p>
        <form action="/api/admin/login" method="post">
          <label htmlFor="password">后台密码</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            maxLength={200}
          />
          {error && <p role="alert">密码不正确，请重试。</p>}
          <button>登录</button>
        </form>
      </div>
    </main>
  );
}
