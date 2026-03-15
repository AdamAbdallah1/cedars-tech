import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, MeshDistortMaterial, Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const TechVault = () => {
  const groupRef = useRef();
  const coreRef = useRef();

  // Floating "Encryption" particles
  const particles = useMemo(() => {
    const p = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 40;
      p[i * 3 + 1] = (Math.random() - 0.5) * 40;
      p[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return p;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Aggressive Mouse Parallax
    const x = (state.mouse.x * state.viewport.width) / 8;
    const y = (state.mouse.y * state.viewport.height) / 8;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y, 0.05);

    // Core Rotation
    coreRef.current.rotation.z = t * 0.2;
    coreRef.current.rotation.y = t * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* The Heavy Core: Distorted Black Chrome */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[10, 1]} />
        <MeshDistortMaterial
          color="#050505"
          roughness={0.1}
          metalness={1}
          distort={0.4}
          speed={4}
          emissive="#2a1b3d"
          emissiveIntensity={1}
        />
      </mesh>

      {/* The Outer Security Shield (Wireframe) */}
      <mesh scale={[1.4, 1.4, 1.4]}>
        <icosahedronGeometry args={[10, 1]} />
        <meshStandardMaterial 
          color="#9754DE" 
          wireframe 
          transparent 
          opacity={0.15} 
          emissive="#9754DE"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Data Particles Field */}
      <Points positions={particles}>
        <PointMaterial 
          transparent 
          color="#06b6d4" 
          size={0.12} 
          sizeAttenuation 
          depthWrite={false} 
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

export default function ContactScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
      <Canvas dpr={[1, 2]} alpha>
        <PerspectiveCamera makeDefault position={[0, 0, 55]} fov={45} />
        
        {/* Intense Cinematic Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight position={[20, 20, 25]} angle={0.15} penumbra={1} intensity={2500} color="#9754DE" />
        <pointLight position={[-20, -10, 10]} intensity={1200} color="#06b6d4" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <TechVault />
        </Float>
      </Canvas>
    </div>
  );
}