"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function AnalyticsTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (
      !/^\/(en|ja|zh)(\/|$)/.test(pathname) ||
      navigator.doNotTrack === "1" ||
      (navigator as Navigator & { globalPrivacyControl?: boolean })
        .globalPrivacyControl
    )
      return;
    let visitor = "",
      session = "";
    try {
      if (localStorage.getItem("mega-analytics-optout") === "1") return;
      const now = Date.now();
      const saved = JSON.parse(
        localStorage.getItem("mega-anonymous-visitor") || "null",
      );
      visitor = saved && saved.expires > now ? saved.id : crypto.randomUUID();
      localStorage.setItem(
        "mega-anonymous-visitor",
        JSON.stringify({
          id: visitor,
          expires: saved?.expires > now ? saved.expires : now + 30 * 86400_000,
        }),
      );
      const existing = JSON.parse(
        sessionStorage.getItem("mega-analytics-session") || "null",
      );
      session =
        existing && now - existing.at < 1800000
          ? existing.id
          : crypto.randomUUID();
      sessionStorage.setItem(
        "mega-analytics-session",
        JSON.stringify({ id: session, at: now }),
      );
    } catch {
      return;
    }
    const id = crypto.randomUUID();
    let sequence = 0,
      seconds = 0,
      last = performance.now(),
      active = last,
      lastSent = -1;
    const sections: Record<string, number> = Object.create(null);
    let referrer = "";
    try {
      const ref = new URL(document.referrer);
      if (ref.hostname !== location.hostname) referrer = ref.hostname;
    } catch {}
    const device = /iPad|Tablet/i.test(navigator.userAgent)
      ? "平板"
      : /Mobile|Android/i.test(navigator.userAgent)
        ? "手机"
        : "电脑";
    function section() {
      const els = [...document.querySelectorAll<HTMLElement>("main section")];
      let best: HTMLElement | null = null,
        bestArea = 0;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        const area = Math.max(
          0,
          Math.min(r.bottom, innerHeight) - Math.max(r.top, 80),
        );
        if (
          area > bestArea ||
          ((best as HTMLElement | null)?.contains(el) && area >= 120)
        ) {
          bestArea = area;
          best = el;
        }
      }
      if (!best || bestArea < 60) return "";
      const panel = best.closest('[role="tabpanel"]');
      const title = (
        best.dataset.analyticsSection ||
        best.id ||
        best.querySelector("h2,h3,h1")?.textContent ||
        `区域 ${els.indexOf(best) + 1}`
      )
        .trim()
        .slice(0, 80);
      return `${panel?.id ? panel.id + " / " : ""}${title}`.slice(0, 120);
    }
    function tick() {
      const now = performance.now(),
        delta = Math.min((now - last) / 1000, 2);
      last = now;
      if (
        document.visibilityState !== "visible" ||
        !document.hasFocus() ||
        now - active > 60000
      )
        return;
      seconds += delta;
      const key = section();
      if (key) sections[key] = (sections[key] || 0) + delta;
    }
    function send() {
      tick();
      if (lastSent === Math.floor(seconds)) return;
      lastSent = Math.floor(seconds);
      const data = JSON.stringify({
        id,
        visitor,
        session,
        path: pathname,
        referrer,
        device,
        sequence: sequence++,
        seconds: Math.floor(seconds),
        sections: Object.fromEntries(
          Object.entries(sections).map(([k, v]) => [k, Math.floor(v)]),
        ),
      });
      navigator.sendBeacon(
        "/api/analytics/collect",
        new Blob([data], { type: "application/json" }),
      );
    }
    function activity() {
      active = performance.now();
      try {
        sessionStorage.setItem(
          "mega-analytics-session",
          JSON.stringify({ id: session, at: Date.now() }),
        );
      } catch {}
    }
    function visibility() {
      if (document.hidden) send();
      else {
        last = performance.now();
        activity();
      }
    }
    const timer = setInterval(tick, 1000),
      heartbeat = setInterval(send, 60000);
    const events = [
      "pointerdown",
      "pointermove",
      "keydown",
      "scroll",
      "touchstart",
    ] as const;
    events.forEach((e) =>
      window.addEventListener(e, activity, { passive: true }),
    );
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("pagehide", send);
    send();
    return () => {
      send();
      clearInterval(timer);
      clearInterval(heartbeat);
      events.forEach((e) => window.removeEventListener(e, activity));
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("pagehide", send);
    };
  }, [pathname]);
  return null;
}
