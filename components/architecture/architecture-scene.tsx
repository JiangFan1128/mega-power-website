"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { equipmentGroups, equipmentColors } from "./equipment";
import type { ScenarioDecisionArchitecture } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { architectureLayout } from "./layout";
import { topologyCopy } from "./topology-copy";
import type { mountArchitecture } from "./renderer";
import styles from "./architecture.module.css";

const copy = {
  en: {
    tag: "ENERGY IN MOTION",
    hint: "Drag to explore · Select equipment below",
    touch: "Drag to rotate · Pinch to zoom · Scroll outside",
    pause: "Pause animation",
    play: "Play animation",
    reset: "Reset view",
    in: "Zoom in",
    out: "Zoom out",
    loading: "Preparing the 3D system…",
    fallback:
      "3D is unavailable on this device. Explore the system components below.",
    note: "Illustrative system architecture · Models are schematic",
    power: "Energy flow",
    data: "Commands / telemetry",
    transport: "Battery transport / return",
    directions: "Arrows show direction · Bidirectional power alternates",
    equipment: "System components",
    details: "Equipment details",
  },
  ja: {
    tag: "エネルギーの流れ",
    hint: "ドラッグして回転 · 下の設備を選択",
    touch: "1 本指で回転 · ピンチで拡大縮小 · 画面外でスクロール",
    pause: "アニメーションを停止",
    play: "アニメーションを再生",
    reset: "視点を戻す",
    in: "拡大",
    out: "縮小",
    loading: "3D システムを準備中…",
    fallback: "この端末では 3D を表示できません。下の設備情報をご覧ください。",
    note: "システム構成の概念図 · モデルは模式表現です",
    power: "エネルギーの流れ",
    data: "制御指令・状態情報",
    transport: "電池の輸送・返送",
    directions: "矢印は流れの向き · 双方向電力は交互に表示",
    equipment: "システム構成機器",
    details: "設備情報",
  },
  zh: {
    tag: "看见能量的流动",
    hint: "拖动查看角度 · 点击下方设备查看详情",
    touch: "单指旋转 · 双指缩放 · 画面外滚动",
    pause: "暂停动画",
    play: "播放动画",
    reset: "重置视角",
    in: "放大",
    out: "缩小",
    loading: "正在准备三维系统…",
    fallback: "此设备暂时无法显示三维场景，可在下方查看系统组成。",
    note: "系统架构示意 · 模型为概念化展示",
    power: "能量流动",
    data: "控制指令 / 状态回传",
    transport: "电池运输 / 返程",
    directions: "箭头表示流向 · 双向电能交替演示",
    equipment: "系统组成",
    details: "设备详情",
  },
};

export function ArchitectureScene({
  architecture,
  scenario,
  locale,
}: {
  architecture: ScenarioDecisionArchitecture;
  scenario: string;
  locale: Locale;
}) {
  const text = copy[locale];
  const layout = useMemo(
    () => architectureLayout(architecture, scenario, locale),
    [architecture, scenario, locale],
  );
  const host = useRef<HTMLDivElement>(null);
  const api = useRef<ReturnType<typeof mountArchitecture> | null>(null);
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const element = host.current!;
    const observer = new IntersectionObserver(
      async (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        try {
          const { mountArchitecture } = await import("./renderer");
          if (cancelled) return;
          api.current = mountArchitecture(element, layout, setSelected, () => {
            setStatus("error");
            api.current?.dispose();
            api.current = null;
          });
          api.current.select(0);
          setPlaying(!matchMedia("(prefers-reduced-motion: reduce)").matches);
          setStatus("ready");
        } catch {
          if (!cancelled) setStatus("error");
        }
      },
      { rootMargin: "250px" },
    );
    observer.observe(element);
    return () => {
      cancelled = true;
      observer.disconnect();
      api.current?.dispose();
      api.current = null;
    };
  }, [layout]);
  useEffect(() => {
    api.current?.select(selected);
  }, [selected]);
  const groups = useMemo(() => equipmentGroups(layout.nodes), [layout]);
  return (
    <div className={styles.root}>
      <div className={styles.topline}>
        <span className={styles.tag}>
          <i />
          {text.tag}
        </span>
        <span className={styles.legend}>
          <i />
          {text.power}
          {layout.links.some((link) => link.kind === "data") && (
            <>
              <i className={styles.dataDot} />
              {text.data}
            </>
          )}
          {layout.links.some((link) => link.kind === "transport") && (
            <>
              <i className={styles.transportDot} />
              {text.transport}
            </>
          )}
        </span>
      </div>
      <p className={styles.directionNote}>{text.directions}</p>
      <div className={styles.viewport}>
        <div className={styles.canvas} ref={host} />
        {status !== "ready" && (
          <div className={styles.message} role="status">
            {status === "error" ? text.fallback : text.loading}
          </div>
        )}
        {status === "ready" && (
          <>
            <div className={styles.hint}>
              <span>{text.hint}</span>
              <span>{text.touch}</span>
            </div>
            <div className={styles.controls}>
              <button
                type="button"
                aria-label={playing ? text.pause : text.play}
                title={playing ? text.pause : text.play}
                onClick={() => {
                  api.current?.play(!playing);
                  setPlaying(!playing);
                }}
              >
                {playing ? "Ⅱ" : "▶"}
              </button>
              <button
                type="button"
                aria-label={text.out}
                title={text.out}
                onClick={() => api.current?.zoom(-0.15)}
              >
                −
              </button>
              <button
                type="button"
                aria-label={text.in}
                title={text.in}
                onClick={() => api.current?.zoom(0.15)}
              >
                +
              </button>
              <button
                type="button"
                aria-label={text.reset}
                title={text.reset}
                onClick={() => api.current?.reset()}
              >
                ↺
              </button>
            </div>
          </>
        )}
        <div className={styles.caption}>{text.note}</div>
      </div>
      <p className={styles.topologyNote}>
        {topologyCopy[locale].notes[scenario]}
      </p>
      <div className={styles.inventory} aria-label={text.equipment}>
        {groups.map((group, index) => {
          const active = group.indices.includes(selected);
          return (
            <button
              key={`${group.model}-${group.title}`}
              type="button"
              aria-pressed={active}
              aria-expanded={expanded === index}
              style={
                {
                  "--equipment-color": equipmentColors[group.model],
                } as CSSProperties
              }
              className={active ? styles.active : ""}
              onClick={() => {
                setSelected(active ? selected : group.indices[0]);
                setExpanded(expanded === index ? null : index);
              }}
            >
              <span className={styles.equipmentNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.equipmentContent}>
                <strong>{group.title}</strong>
                <span className={styles.expandIcon} aria-hidden="true">
                  {expanded === index ? "−" : "+"}
                </span>
                {expanded === index && (
                  <span className={styles.inlineDetails}>
                    {group.details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
