"use client";
import { useEffect, useState } from "react";
export function AnalyticsPrivacy({ locale }: { locale: string }) {
  const [off, setOff] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      setOff(localStorage.getItem("mega-analytics-optout") === "1");
    } catch {}
  }, []);
  const copy =
    locale === "ja"
      ? [
          "アクセス統計",
          "閲覧ページ、表示中の滞在時間、推定地域を匿名で集計し、サイト改善に使用します。IP アドレスやフォーム入力内容は保存しません。",
          "このブラウザーの集計を停止",
          "集計を許可",
        ]
      : locale === "zh"
        ? [
            "访问统计设置",
            "我们匿名统计浏览页面、有效停留时间与估算地区，用于改进网站。不保存 IP 地址或表单内容。",
            "停止统计此浏览器",
            "允许匿名统计",
          ]
        : [
            "Analytics settings",
            "We measure pages viewed, active viewing time and approximate region using anonymous browser identifiers to improve this site. We do not store IP addresses or form contents.",
            "Exclude this browser",
            "Allow anonymous analytics",
          ];
  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "12px 24px 24px",
        fontSize: 12,
        color: "#8fa8bd",
      }}
    >
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        {copy[0]}
      </button>
      {open && (
        <div style={{ maxWidth: 680, paddingTop: 12 }}>
          <p>{copy[1]}</p>
          <button
            style={{ marginTop: 12, textDecoration: "underline" }}
            onClick={() => {
              try {
                localStorage.setItem("mega-analytics-optout", off ? "0" : "1");
                location.reload();
              } catch {}
            }}
          >
            {off ? copy[3] : copy[2]}
          </button>
        </div>
      )}
    </div>
  );
}
