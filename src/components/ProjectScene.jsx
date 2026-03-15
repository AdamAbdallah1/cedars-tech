import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// 1. HIGH-GLOW STAR COMPONENT
const GlowingStars = ({ count, color, size, speed, pulse, spread = 150 }) => {
  const pointsRef = useRef();
  
  const starTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.2, color);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, [color]);

  const particles = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * spread;
      p[i * 3 + 1] = (Math.random() - 0.5) * spread;
      p[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return p;
  }, [count, spread]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * (speed * 0.05);
    if (pulse) pointsRef.current.material.opacity = 0.4 + Math.sin(t * 1.5) * 0.4;
    
    // Smooth Mouse Parallax
    const targetX = state.mouse.x * 2;
    const targetY = state.mouse.y * 2;
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, targetX, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetY, 0.05);
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3}>
      <PointMaterial transparent map={starTexture} size={size} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </Points>
  );
};

// 2. FLOATING TECH PRIMITIVES
const TechElements = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.05;
  });

  return (
    <group ref={groupRef}>
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={2} rotationIntensity={2} floatIntensity={1}>
          <mesh position={[(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 40]}>
            <octahedronGeometry args={[Math.random() * 0.4 + 0.1, 0]} />
            <meshStandardMaterial color="#9754DE" wireframe transparent opacity={0.15} emissive="#9754DE" emissiveIntensity={2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// 3. DATA TRAILS
const DataTrails = ({ count = 40 }) => {
  const lines = useMemo(() => {
    return [...Array(count)].map(() => ({
      pos: [
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 100
      ],
      len: Math.random() * 15 + 5,
      speed: Math.random() * 0.5 + 0.1
    }));
  }, [count]);

  return (
    <group>
      {lines.map((l, i) => (
        <Float key={i} speed={l.speed * 8}>
          <mesh position={l.pos}>
            <boxGeometry args={[0.03, 0.03, l.len]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default function ProjectScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} alpha gl={{ antialias: true, powerPreference: "high-performance" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={60} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[20, 20, 20]} intensity={800} color="#9754DE" />
        <pointLight position={[-20, -20, -20]} intensity={400} color="#06b6d4" />

        {/* Dense Star Layers */}
        <GlowingStars count={5000} color="#ffffff" size={0.05} speed={0.02} pulse={false} spread={220} />
        <GlowingStars count={300} color="#9754DE" size={0.6} speed={0.1} pulse={true} spread={120} />
        <GlowingStars count={150} color="#06b6d4" size={0.4} speed={0.15} pulse={true} spread={100} />

        <TechElements />
        <DataTrails />

      </Canvas>
    </div>
  );
}