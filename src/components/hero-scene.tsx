"use client";

import { Float, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, type ThreeEvent, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending, Color, MathUtils, type Mesh, type ShaderMaterial, Vector3 } from "three";

const vertexShader = `
  varying vec3 vPosition;

  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uPointer;
  uniform vec3 uBaseColor;
  uniform vec3 uActiveColor;
  uniform float uRadius;
  uniform float uIntensity;
  varying vec3 vPosition;

  void main() {
    float distanceToPointer = distance(normalize(vPosition), normalize(uPointer));
    float proximity = 1.0 - smoothstep(0.0, uRadius, distanceToPointer);
    float influence = proximity * uIntensity;
    vec3 color = mix(uBaseColor, uActiveColor, influence);
    gl_FragColor = vec4(color, 0.55 + influence * 0.45);
  }
`;

function Signal() {
  const mesh = useRef<Mesh>(null);
  const material = useRef<ShaderMaterial>(null);
  const targetPointer = useRef(new Vector3(0, 0, 1));
  const targetIntensity = useRef(0);
  const uniforms = useMemo(() => ({
    uPointer: { value: new Vector3(0, 0, 1) },
    uBaseColor: { value: new Color("#22c55e") },
    uActiveColor: { value: new Color("#38bdf8") },
    uRadius: { value: 0.7 },
    uIntensity: { value: 0 },
  }), []);

  useFrame((_, delta) => {
    if (!material.current) return;
    material.current.uniforms.uPointer.value.lerp(targetPointer.current, 1 - Math.exp(-delta * 10));
    material.current.uniforms.uIntensity.value = MathUtils.damp(material.current.uniforms.uIntensity.value, targetIntensity.current, 8, delta);
  });

  const updatePointer = (event: ThreeEvent<PointerEvent>) => {
    if (!mesh.current) return;
    targetPointer.current.copy(mesh.current.worldToLocal(event.point.clone()).normalize());
    targetIntensity.current = 1;
  };

  return <Float speed={2} rotationIntensity={1.4} floatIntensity={1.8}><mesh ref={mesh} rotation={[0.5, 0.3, 0]} onPointerMove={updatePointer} onPointerOut={() => { targetIntensity.current = 0; }}><sphereGeometry args={[1.15, 40, 28]} /><shaderMaterial ref={material} vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} wireframe transparent depthWrite={false} blending={AdditiveBlending} /></mesh></Float>;
}

export function HeroScene() {
  return <Canvas camera={{ position: [0, 0, 4.5], fov: 55 }} dpr={[1, 1.5]}><ambientLight intensity={1} /><Stars radius={7} depth={18} count={900} factor={2} saturation={0} fade speed={0.4} /><Signal /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} /></Canvas>;
}
