import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

export default function Earth() {
  return (
    <Canvas camera={{ position: [1, 1, 3] }}>
      
      
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 2]} />

      
      <Sphere args={[1.2, 64, 64]}>
        <meshStandardMaterial color="#4f46e5" wireframe />
      </Sphere>

      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}