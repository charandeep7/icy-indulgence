"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Icecream } from "./Icecream";

export default function Ice3d() {
  return (
    <div className="h-[500px] sm:h-[700px] w-[100%] flex justify-center items-center">
      <Canvas shadows={'soft'}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Icecream />
        </Suspense>
      </Canvas>
    </div>
  );
}
