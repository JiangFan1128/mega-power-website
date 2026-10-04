import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { box, createModel, material, palette } from "./models";
import type { SceneLayout } from "./layout";
import styles from "./architecture.module.css";
import { equipmentGroups, equipmentColors } from "./equipment";

export function mountArchitecture(
  host: HTMLElement,
  layout: SceneLayout,
  onSelect: (index: number) => void,
  onError: () => void,
) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x081120, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-hidden", "true");
  renderer.domElement.style.touchAction = "pan-y";
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 150);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = false;
  controls.minPolarAngle = 0.12;
  controls.maxPolarAngle = 1.48;
  // Horizontal orbit is unrestricted so equipment can be inspected from behind.
  // A single touch keeps scrolling the page; two fingers rotate the model.
  controls.touches.ONE = -1 as THREE.TOUCH;
  controls.touches.TWO = THREE.TOUCH.ROTATE;
  scene.add(new THREE.HemisphereLight(0xdbfaff, 0x163346, 2.8));
  const sun = new THREE.DirectionalLight(0xffffff, 3.2);
  sun.position.set(-8, 16, 10);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(palette.accent, 2);
  rim.position.set(8, 6, -9);
  scene.add(rim);
  const xs = layout.nodes.map((n) => n.x),
    zs = layout.nodes.map((n) => n.z);
  const width = Math.max(...xs) - Math.min(...xs) + 4.6,
    depth = Math.max(...zs) - Math.min(...zs) + 4.5;
  const centerZ = (Math.max(...zs) + Math.min(...zs)) / 2;
  const floor = box(scene, [width, 0.22, depth], [0, -0.24, centerZ], 0x112c3c);
  const edge = new THREE.LineSegments(
    new THREE.EdgesGeometry(floor.geometry),
    new THREE.LineBasicMaterial({ color: 0x376476 }),
  );
  edge.position.copy(floor.position);
  scene.add(edge);
  for (let x = -Math.floor(width / 2); x <= width / 2; x++) {
    const points = [
      new THREE.Vector3(x, -0.12, centerZ - depth / 2),
      new THREE.Vector3(x, -0.12, centerZ + depth / 2),
    ];
    scene.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({
          color: 0x204050,
          transparent: true,
          opacity: 0.5,
        }),
      ),
    );
  }
  for (let z = Math.ceil(centerZ - depth / 2); z < centerZ + depth / 2; z++)
    scene.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-width / 2, -0.12, z),
          new THREE.Vector3(width / 2, -0.12, z),
        ]),
        new THREE.LineBasicMaterial({
          color: 0x204050,
          transparent: true,
          opacity: 0.5,
        }),
      ),
    );
  const groups = equipmentGroups(layout.nodes);
  const groupNumbers = layout.nodes.map(
    (_, index) =>
      groups.findIndex((group) => group.indices.includes(index)) + 1,
  );
  const modelLabel = document.createElement("div");
  modelLabel.className = styles.modelLabel;
  modelLabel.setAttribute("aria-hidden", "true");
  host.appendChild(modelLabel);
  let selectedIndex = 0;
  const numberSprites: THREE.Sprite[] = [];
  const labelHeights: number[] = [];
  const models: THREE.Group[] = [];
  const animations: ((time: number) => void)[] = [];
  const rings: THREE.Mesh[] = [];
  layout.nodes.forEach((node, index) => {
    const model = createModel(node.model);
    model.group.position.set(node.x, 0, node.z);
    model.group.scale.setScalar(node.scale ?? 1);
    model.group.userData.index = index;
    scene.add(model.group);
    models.push(model.group);
    labelHeights.push(new THREE.Box3().setFromObject(model.group).max.y + 0.45);
    if (model.animate) animations.push(model.animate);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.62, 1.66, 64),
      new THREE.MeshBasicMaterial({
        color: equipmentColors[node.model],
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide,
      }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(node.x, -0.09, node.z);
    scene.add(ring);
    rings.push(ring);
    const label = document.createElement("canvas");
    label.width = 128;
    label.height = 128;
    const ctx = label.getContext("2d")!;
    ctx.fillStyle = "#102c3d";
    ctx.beginPath();
    ctx.arc(64, 64, 48, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = equipmentColors[node.model];
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = equipmentColors[node.model];
    ctx.font = "600 54px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(groupNumbers[index]).padStart(2, "0"), 64, 66);
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: new THREE.CanvasTexture(label),
        depthTest: false,
      }),
    );
    sprite.position.set(node.x, 0.5, node.z + 1.4);
    sprite.userData.index = index;
    numberSprites.push(sprite);
    sprite.scale.set(1.1, 1.1, 1);
    scene.add(sprite);
  });
  const particles: {
    mesh: THREE.Mesh;
    curve: THREE.Curve<THREE.Vector3>;
    offset: number;
    bidirectional: boolean;
    kind: "power" | "data" | "transport";
  }[] = [];
  layout.links.forEach((link, index) => {
    const from = layout.nodes.find((n) => n.id === link.from)!,
      to = layout.nodes.find((n) => n.id === link.to)!;
    const data = link.kind === "data";
    const a = new THREE.Vector3(from.x, data ? 1.8 : 0.18, from.z),
      b = new THREE.Vector3(to.x, data ? 1.8 : 0.18, to.z);
    const curve = new THREE.CatmullRomCurve3([
      a,
      ...(link.via
        ? link.via.map((point) => new THREE.Vector3(...point))
        : [
            new THREE.Vector3(
              a.x + (b.x - a.x) * 0.25,
              data ? 3.3 : 0.25,
              a.z + (b.z - a.z) * 0.15,
            ),
            new THREE.Vector3(
              a.x + (b.x - a.x) * 0.75,
              data ? 3.3 : 0.25,
              a.z + (b.z - a.z) * 0.85,
            ),
          ]),
      b,
    ]);
    const color = data
      ? 0xd879ff
      : link.kind === "transport"
        ? 0xf5a623
        : palette.accent;
    if (link.kind === "power") {
      scene.add(
        new THREE.Mesh(
          new THREE.TubeGeometry(curve, 28, 0.025, 5, false),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0.55,
          }),
        ),
      );
    } else {
      const route = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(90)),
        new THREE.LineDashedMaterial({
          color,
          dashSize: link.kind === "transport" ? 0.35 : 0.12,
          gapSize: 0.16,
          transparent: true,
          opacity: 0.65,
        }),
      );
      route.computeLineDistances();
      scene.add(route);
    }
    for (let n = 0; n < 3; n++) {
      const mesh = new THREE.Mesh(
        new THREE.ConeGeometry(
          link.kind === "transport" ? 0.13 : 0.09,
          0.25,
          6,
        ),
        material(color, true),
      );
      mesh.position.copy(curve.getPointAt((n / 3 + index * 0.13) % 1));
      scene.add(mesh);
      particles.push({
        mesh,
        curve,
        offset: n / 3 + index * 0.13,
        bidirectional: !!link.bidirectional,
        kind: link.kind,
      });
    }
  });
  let disposed = false,
    inView = true,
    playing = !matchMedia("(prefers-reduced-motion: reduce)").matches,
    frame = 0,
    last = 0,
    time = 0,
    zoom = 1;
  const target = new THREE.Vector3(0, 0.2, centerZ);
  controls.target.copy(target);
  const projected = new THREE.Vector3();
  function fit(reset = false) {
    const w = host.clientWidth,
      h = host.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    const halfFov = Math.tan(THREE.MathUtils.degToRad(19));
    const distance =
      (Math.max(
        (width + depth * 0.18) / (2 * halfFov * camera.aspect),
        (depth * 0.72 + 3.3) / (2 * halfFov),
      ) *
        1.18) /
      zoom;
    const direction = reset
      ? new THREE.Vector3(0, 1.05, 1).normalize()
      : camera.position.clone().sub(target).normalize();
    if (direction.lengthSq() === 0) direction.set(0, 1.05, 1).normalize();
    camera.position.copy(target).addScaledVector(direction, distance);
    controls.update();
    draw();
  }
  function draw() {
    if (disposed) return;
    camera.updateMatrixWorld();
    numberSprites.forEach((sprite) => {
      const depth = -projected
        .copy(sprite.position)
        .applyMatrix4(camera.matrixWorldInverse).z;
      const size =
        ((host.clientWidth < 640 ? 34 : 42) *
          2 *
          depth *
          Math.tan(THREE.MathUtils.degToRad(19))) /
        Math.max(host.clientHeight, 1);
      sprite.scale.set(size, size, 1);
    });
    const node = layout.nodes[selectedIndex];
    projected.set(node.x, labelHeights[selectedIndex], node.z).project(camera);
    const x = (projected.x * 0.5 + 0.5) * host.clientWidth;
    const y = (-projected.y * 0.5 + 0.5) * host.clientHeight;
    modelLabel.textContent = `${String(groupNumbers[selectedIndex]).padStart(2, "0")} · ${node.title}`;
    modelLabel.style.setProperty(
      "--equipment-color",
      equipmentColors[node.model],
    );
    modelLabel.style.left = `${Math.max(115, Math.min(host.clientWidth - 115, x))}px`;
    modelLabel.style.top = `${Math.max(90, Math.min(host.clientHeight - 55, y))}px`;
    renderer.render(scene, camera);
  }
  function moveParticles() {
    particles.forEach((p) => {
      // Power reverses as a whole operating phase, never simultaneous counterflow.
      const reverse =
        p.bidirectional &&
        (p.kind === "data"
          ? p.offset % 1 > 0.45
          : Math.floor(time / 6) % 2 === 1);
      const t = (time * (p.kind === "transport" ? 0.09 : 0.16) + p.offset) % 1;
      const position = reverse ? 1 - t : t;
      p.mesh.position.copy(p.curve.getPointAt(position));
      const tangent = p.curve
        .getTangentAt(position)
        .multiplyScalar(reverse ? -1 : 1);
      p.mesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        tangent.normalize(),
      );
    });
  }
  function tick(now: number) {
    frame = 0;
    if (disposed || !playing || !inView || document.hidden) return;
    time += Math.max(0, Math.min((now - last) / 1000, 0.05));
    last = now;
    animations.forEach((fn) => fn(time));
    moveParticles();
    draw();
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame);
    frame = 0;
    last = performance.now();
    if (playing && inView && !document.hidden)
      frame = requestAnimationFrame(tick);
    else draw();
  }
  const resize = new ResizeObserver(() => fit());
  resize.observe(host);
  const observer = new IntersectionObserver((entries) => {
    inView = entries[0].isIntersecting;
    sync();
  });
  observer.observe(host);
  document.addEventListener("visibilitychange", sync);
  controls.addEventListener("change", draw);
  const raycaster = new THREE.Raycaster();
  let downX = 0,
    downY = 0;
  function down(event: PointerEvent) {
    downX = event.clientX;
    downY = event.clientY;
  }
  function pick(event: PointerEvent) {
    if (Math.hypot(event.clientX - downX, event.clientY - downY) > 6) return;
    const r = renderer.domElement.getBoundingClientRect();
    raycaster.setFromCamera(
      new THREE.Vector2(
        ((event.clientX - r.left) / r.width) * 2 - 1,
        (-(event.clientY - r.top) / r.height) * 2 + 1,
      ),
      camera,
    );
    const hit = raycaster.intersectObjects(
      [...models, ...numberSprites],
      true,
    )[0];
    if (hit) {
      let obj: THREE.Object3D | null = hit.object;
      while (obj && obj.userData.index === undefined) obj = obj.parent;
      if (obj) onSelect(obj.userData.index);
    }
  }
  function lost(event: Event) {
    event.preventDefault();
    onError();
  }
  renderer.domElement.addEventListener("pointerdown", down);
  renderer.domElement.addEventListener("pointerup", pick);
  renderer.domElement.addEventListener("webglcontextlost", lost);
  moveParticles();
  fit(true);
  sync();
  return {
    select(index: number) {
      selectedIndex = index;
      rings.forEach((r, i) => {
        (r.material as THREE.MeshBasicMaterial).opacity =
          groupNumbers[i] === groupNumbers[index] ? 0.95 : 0.12;
      });
      draw();
    },
    play(value: boolean) {
      playing = value;
      sync();
    },
    zoom(delta: number) {
      zoom = THREE.MathUtils.clamp(zoom + delta, 0.8, 1.7);
      fit();
    },
    reset() {
      zoom = 1;
      fit(true);
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      controls.dispose();
      renderer.domElement.removeEventListener("pointerdown", down);
      renderer.domElement.removeEventListener("pointerup", pick);
      renderer.domElement.removeEventListener("webglcontextlost", lost);
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material)
          for (const mat of Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material]) {
            const map = (mat as THREE.MeshBasicMaterial).map;
            if (map) map.dispose();
            mat.dispose();
          }
      });
      renderer.dispose();
      renderer.domElement.remove();
      modelLabel.remove();
    },
  };
}
