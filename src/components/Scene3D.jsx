import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, PerspectiveCamera, Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const Particles = ({ count = 1500 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 120;
      p[i * 3 + 1] = (Math.random() - 0.5) * 120;
      p[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    return p;
  }, [count]);

  const ref = useRef();

  useFrame((state) => {
    const x = (state.mouse.x * state.viewport.width) / 20;
    const y = (state.mouse.y * state.viewport.height) / 20;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y, 0.05);
    ref.current.rotation.y += 0.001;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#9754DE"
        size={0.12}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const CyberShape = () => {
  const meshRef = useRef();
  const wireRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    const targetX = state.mouse.y * 0.5;
    const targetY = state.mouse.x * 0.5;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.1);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.1);

    meshRef.current.rotation.z = t * 0.1;

    const s = 1 + Math.sin(t * 2) * 0.05;
    groupRef.current.scale.set(s, s, s);

    wireRef.current.material.opacity = 0.2 + Math.abs(Math.sin(t)) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[12, 1]} />
        <MeshDistortMaterial
          color="#050505"
          roughness={0}
          metalness={1}
          distort={0.3}
          speed={4}
          emissive="#2a1b3d"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh ref={wireRef}>
        <icosahedronGeometry args={[12.5, 1]} />
        <meshStandardMaterial
          color="#9754DE"
          wireframe
          transparent
          opacity={0.3}
          emissive="#9754DE"
          emissiveIntensity={3}
        />
      </mesh>

      <mesh scale={[1.1, 1.1, 1.1]}>
        <icosahedronGeometry args={[12, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.03}
          wireframe
        />
      </mesh>
    </group>
  );
};

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <Canvas dpr={[1, 2]} style={{ pointerEvents: "auto" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={50} />

        <ambientLight intensity={0.2} />
        <spotLight position={[20, 20, 25]} angle={0.15} penumbra={1} intensity={3000} color="#9754DE" />
        <pointLight position={[-20, -10, 10]} intensity={1000} color="#06b6d4" />
        <pointLight position={[0, 0, 5]} intensity={500} color="#ffffff" />

        <Particles count={2000} />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <CyberShape />
        </Float>
      </Canvas>
    </div>
  );
}