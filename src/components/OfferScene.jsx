import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Text } from "@react-three/drei";
import * as THREE from "three";

const CircuitBlade = ({ pos, scale, color }) => {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Individual subtle wobble
    meshRef.current.position.y += Math.sin(t + pos[0]) * 0.005;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <group position={pos}>
      <mesh ref={meshRef} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={1.5} 
          transparent 
          opacity={0.2} 
        />
      </mesh>
      {/* Wireframe shell for that "Technical/Hacker" look */}
      <mesh ref={wireRef} scale={[scale[0] * 1.05, scale[1] * 1.05, scale[2] * 1.05]}>
        <boxGeometry />
        <meshStandardMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.1} 
        />
      </mesh>
    </group>
  );
};

const DataField = () => {
  const mainGroup = useRef();
  
  const blades = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      pos: [
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40
      ],
      scale: [Math.random() * 4 + 1, 0.05, Math.random() * 2 + 0.5],
      color: i % 3 === 0 ? "#9754DE" : i % 3 === 1 ? "#06b6d4" : "#ffffff",
    }));
  }, []);

  useFrame((state) => {
    // Advanced Mouse Tracking
    const x = (state.mouse.x * state.viewport.width) / 4;
    const y = (state.mouse.y * state.viewport.height) / 4;
    mainGroup.current.position.x = THREE.MathUtils.lerp(mainGroup.current.position.x, x, 0.03);
    mainGroup.current.position.y = THREE.MathUtils.lerp(mainGroup.current.position.y, y, 0.03);
    
    // Slow drift
    mainGroup.current.rotation.y = THREE.MathUtils.lerp(mainGroup.current.rotation.y, state.mouse.x * 0.2, 0.02);
  });

  return (
    <group ref={mainGroup}>
      {blades.map((b, i) => (
        <CircuitBlade key={i} {...b} />
      ))}
    </group>
  );
};

export default function OfferScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 60]} fov={50} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[50, 50, 50]} intensity={2000} color="#9754DE" />
        <pointLight position={[-50, -50, 20]} intensity={1500} color="#06b6d4" />

        <DataField />
        
        <fog attach="fog" args={["#020617", 40, 100]} />
      </Canvas>
    </div>
  );
}