import * as THREE from "three";
import type { ModelKind, SceneNode } from "./layout";

export const palette = {
  shell: 0x729ba6,
  light: 0xc6e5e6,
  dark: 0x173a49,
  deep: 0x0c2331,
  accent: 0x2dd4a8,
  cyan: 0x00d9ef,
};
export function material(color: number, glow = false) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.35,
    roughness: 0.48,
    emissive: glow ? color : 0,
    emissiveIntensity: glow ? 0.65 : 0,
  });
}
export function box(
  parent: THREE.Object3D,
  size: number[],
  pos: number[],
  color: number,
  glow = false,
) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(...(size as [number, number, number])),
    material(color, glow),
  );
  mesh.position.set(...(pos as [number, number, number]));
  parent.add(mesh);
  return mesh;
}
function rod(
  parent: THREE.Object3D,
  a: number[],
  b: number[],
  radius = 0.045,
  color = palette.light,
) {
  const start = new THREE.Vector3(...(a as [number, number, number]));
  const end = new THREE.Vector3(...(b as [number, number, number]));
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, start.distanceTo(end), 7),
    material(color),
  );
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    end.sub(start).normalize(),
  );
  parent.add(mesh);
  return mesh;
}
function cabinet(g: THREE.Group, x: number, z: number, height = 1.4) {
  box(g, [0.9, height, 0.9], [x, height / 2 + 0.14, z], palette.shell);
  box(
    g,
    [0.78, height - 0.1, 0.04],
    [x, height / 2 + 0.14, z + 0.47],
    palette.dark,
  );
  for (let i = 0; i < 7; i++)
    box(g, [0.58, 0.035, 0.025], [x, 0.35 + i * 0.11, z + 0.5], palette.shell);
  box(
    g,
    [0.43, 0.16, 0.035],
    [x, height - 0.07, z + 0.5],
    palette.accent,
    true,
  );
  box(g, [0.035, 0.25, 0.045], [x + 0.29, 0.83, z + 0.51], palette.light);
}
export function createModel(
  kind: ModelKind,
  options?: Pick<SceneNode, "batteryForm" | "rating">,
): {
  group: THREE.Group;
  animate?: (time: number) => void;
} {
  const g = new THREE.Group();
  let animate: ((time: number) => void) | undefined;
  box(g, [2.65, 0.14, 2.1], [0, 0.04, 0], palette.dark);
  if (kind === "busbar") {
    for (const x of [-0.8, 0, 0.8]) cabinet(g, x, 0, 1.15);
    for (const z of [-0.23, 0.05, 0.33])
      box(g, [2.45, 0.065, 0.065], [0, 1.47, z], palette.accent);
  } else if (kind === "solar") {
    for (let row = 0; row < 2; row++) {
      const panel = new THREE.Group();
      panel.position.set(0, 0.6, (row - 0.5) * 1.03);
      panel.rotation.x = 0.45;
      g.add(panel);
      box(panel, [2.5, 0.09, 0.92], [0, 0, 0], palette.light);
      for (let c = 0; c < 6; c++)
        for (let r = 0; r < 3; r++)
          box(
            panel,
            [0.37, 0.025, 0.265],
            [(c - 2.5) * 0.4, 0.065, (r - 1) * 0.29],
            0x15527a,
          );
      rod(
        g,
        [-0.9, 0.12, (row - 0.5) * 1.03],
        [-0.9, 0.65, (row - 0.5) * 1.03],
      );
      rod(g, [0.9, 0.12, (row - 0.5) * 1.03], [0.9, 0.65, (row - 0.5) * 1.03]);
    }
  } else if (kind === "wind") {
    const rotors: THREE.Group[] = [];
    for (const x of [-0.65, 0.65]) {
      rod(g, [x, 0.12, 0], [x, 2.05, 0], 0.065);
      box(g, [0.22, 0.21, 0.48], [x, 2.05, 0], palette.light);
      const rotor = new THREE.Group();
      rotor.position.set(x, 2.05, 0.29);
      g.add(rotor);
      rotors.push(rotor);
      for (let b = 0; b < 3; b++) {
        const blade = new THREE.Group();
        blade.rotation.z = (b * Math.PI * 2) / 3;
        box(blade, [0.105, 0.79, 0.055], [0, 0.45, 0], palette.light);
        rotor.add(blade);
      }
    }
    animate = (time) =>
      rotors.forEach((r, i) => (r.rotation.z = -time * 0.7 + i));
  } else if (kind === "grid") {
    for (const x of [-1, 1])
      for (const z of [-1, 1])
        rod(g, [x * 0.62, 0.12, z * 0.45], [x * 0.17, 2.6, z * 0.13], 0.04);
    for (let i = 0; i < 4; i++) {
      const y = 0.3 + i * 0.55;
      const w = 0.59 - i * 0.095;
      rod(
        g,
        [-w, y, 0.4 - i * 0.065],
        [w - 0.09, y + 0.5, 0.34 - i * 0.065],
        0.025,
      );
      rod(
        g,
        [w, y, 0.4 - i * 0.065],
        [-w + 0.09, y + 0.5, 0.34 - i * 0.065],
        0.025,
      );
    }
    for (const y of [1.7, 2.35]) {
      box(g, [2.1, 0.08, 0.18], [0, y, 0], palette.light);
      for (const x of [-0.9, 0.9])
        rod(g, [x, y, 0], [x, y - 0.27, 0], 0.065, palette.accent);
    }
  } else if (kind === "battery" && options?.batteryForm) {
    // Schematic cabinet silhouettes, not dimensioned product CAD.
    const wide = options.batteryForm === "wide-cabinet";
    if (wide) {
      cabinet(g, -0.48, 0, 2.05);
      cabinet(g, 0.48, 0, 2.05);
    } else cabinet(g, 0, 0, 1.85);
    box(
      g,
      [wide ? 2 : 1.05, 0.09, 1.04],
      [0, wide ? 2.24 : 2.04, 0],
      palette.light,
    );
  } else if (kind === "battery") {
    box(g, [2.35, 1.35, 1.45], [0, 0.82, 0], palette.shell);
    for (let i = 0; i < 13; i++) {
      box(g, [0.035, 1.2, 0.03], [-1.08 + i * 0.18, 0.82, 0.745], palette.dark);
      box(g, [0.035, 0.025, 1.4], [-1.08 + i * 0.18, 1.51, 0], palette.light);
    }
    box(g, [0.62, 0.9, 0.04], [0.68, 0.77, 0.78], palette.deep);
    for (let i = 0; i < 4; i++)
      box(
        g,
        [0.4, 0.09, 0.05],
        [0.68, 0.48 + i * 0.19, 0.82],
        palette.accent,
        true,
      );
    box(g, [2.1, 0.055, 0.04], [0, 1.38, 0.79], palette.accent, true);
    for (const x of [-0.6, 0.1]) {
      const fan = new THREE.Mesh(
        new THREE.CylinderGeometry(0.23, 0.23, 0.04, 20),
        material(palette.dark),
      );
      fan.rotation.x = Math.PI / 2;
      fan.position.set(x, 0.8, 0.79);
      g.add(fan);
    }
  } else if (kind === "transformer") {
    cabinet(g, -0.67, 0, 1.35);
    cabinet(g, 0.53, -0.08, 1.05);
    for (const x of [-0.95, -0.64, -0.33]) {
      rod(g, [x, 1.52, 0], [x, 1.85, 0], 0.06, palette.light);
      for (let i = 0; i < 3; i++)
        box(g, [0.15, 0.045, 0.15], [x, 1.58 + i * 0.09, 0], palette.dark);
    }
    box(g, [2.35, 0.08, 1.5], [0, 0.15, 0], palette.light);
  } else if (kind === "control") {
    for (const x of [-0.8, 0, 0.8]) {
      cabinet(g, x, -0.28, 1.65);
      for (let i = 0; i < 3; i++)
        box(
          g,
          [0.52, 0.1, 0.03],
          [x, 0.75 + i * 0.24, 0.24],
          palette.cyan,
          true,
        );
    }
    box(g, [1.9, 0.12, 0.65], [0, 0.85, 0.77], palette.shell);
    box(g, [1.55, 0.55, 0.09], [0, 1.2, 0.72], palette.deep);
    box(g, [1.35, 0.35, 0.03], [0, 1.2, 0.78], palette.cyan, true);
  } else if (kind === "charger") {
    for (const x of [-0.65, 0.65]) {
      box(g, [0.54, 1.45, 0.46], [x, 0.88, 0], palette.light);
      box(g, [0.42, 0.45, 0.025], [x, 1.18, 0.25], palette.deep);
      box(g, [0.3, 0.23, 0.03], [x, 1.23, 0.27], palette.accent, true);
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x + 0.3, 1.35, 0),
        new THREE.Vector3(x + 0.54, 0.75, 0.2),
        new THREE.Vector3(x + 0.35, 0.4, 0.38),
        new THREE.Vector3(x + 0.23, 0.95, 0.35),
      ]);
      g.add(
        new THREE.Mesh(
          new THREE.TubeGeometry(curve, 16, 0.032, 6, false),
          material(palette.deep),
        ),
      );
    }
    box(g, [2.5, 0.11, 1.7], [0, 1.88, 0], palette.dark);
    box(g, [2.4, 0.04, 0.06], [0, 1.85, 0.86], palette.accent, true);
  } else if (["car", "bus", "truck"].includes(kind)) {
    const length = kind === "car" ? 1.8 : 2.6;
    box(g, [length, 0.48, 1.02], [0, 0.65, 0], palette.light);
    if (kind === "truck") {
      box(g, [1.65, 0.95, 1.07], [-0.4, 1.24, 0], palette.shell);
      box(g, [0.64, 0.63, 0.94], [0.93, 1.1, 0], palette.accent);
      box(g, [0.025, 0.36, 0.8], [1.265, 1.17, 0], palette.deep);
    } else {
      box(
        g,
        [length * 0.72, kind === "bus" ? 0.85 : 0.4, 0.91],
        [-0.08, kind === "bus" ? 1.18 : 1.02, 0],
        palette.dark,
      );
      for (let i = 0; i < (kind === "bus" ? 5 : 2); i++)
        box(
          g,
          [0.24, 0.28, 0.025],
          [-length * 0.32 + i * 0.39, kind === "bus" ? 1.35 : 1.04, 0.47],
          palette.cyan,
        );
    }
    for (const x of [-length * 0.32, length * 0.32])
      for (const z of [-0.53, 0.53]) {
        const wheel = new THREE.Mesh(
          new THREE.CylinderGeometry(0.23, 0.23, 0.14, 16),
          material(palette.deep),
        );
        wheel.rotation.x = Math.PI / 2;
        wheel.position.set(x, 0.37, z);
        g.add(wheel);
      }
    for (const z of [-0.32, 0.32])
      box(
        g,
        [0.035, 0.12, 0.2],
        [length / 2 + 0.02, 0.68, z],
        palette.accent,
        true,
      );
  } else {
    box(g, [2.1, 1.2, 1.55], [0, 0.74, 0], palette.shell);
    for (let i = 0; i < 3; i++) {
      const roof = box(
        g,
        [0.72, 0.12, 1.7],
        [-0.7 + i * 0.7, 1.4, 0],
        palette.dark,
      );
      roof.rotation.z = 0.18;
    }
    for (let i = 0; i < 5; i++)
      box(g, [0.23, 0.26, 0.03], [-0.8 + i * 0.39, 1, 0.79], palette.cyan);
    box(g, [0.48, 0.65, 0.04], [0.5, 0.47, 0.81], palette.deep);
    rod(g, [-0.7, 1.35, -0.5], [-0.7, 2.15, -0.5], 0.14, palette.light);
  }
  if (options?.rating) {
    const canvas = document.createElement("canvas");
    canvas.width = 768;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#102a36";
    ctx.fillRect(0, 0, 768, 128);
    ctx.strokeStyle = "#6ee0b0";
    ctx.lineWidth = 5;
    ctx.strokeRect(3, 3, 762, 122);
    ctx.fillStyle = "#dcfff0";
    ctx.font = "bold 54px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(options.rating, 384, 66);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const label = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: texture, depthTest: false }),
    );
    label.position.set(0, options.batteryForm ? 2.65 : 1.95, 0);
    label.scale.set(3.1, 0.52, 1);
    label.renderOrder = 10;
    g.add(label);
  }
  return { group: g, animate };
}
