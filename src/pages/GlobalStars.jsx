import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarLayer({ count, color, size, speed }) {
  const ref = useRef();
  const sphere = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread stars wide to cover long scrolling pages
      p[i * 3] = (Math.random() - 0.5) * 150;
      p[i * 3 + 1] = (Math.random() - 0.5) * 150;
      p[i * 3 + 2] = (Math.random() - 0.5) * 150;
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / speed;
    ref.current.rotation.y -= delta / (speed * 1.5);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function GlobalStars() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarLayer count={2000} color="#ffffff" size={0.003} speed={15} />
        <StarLayer count={800} color="#9754DE" size={0.005} speed={10} />
      </Canvas>
    </div>
  );
}