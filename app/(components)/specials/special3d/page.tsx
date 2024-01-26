"use client"
import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { Special } from "./Specials";

export default function Special3d() {
    return (
      <Canvas shadows={"soft"}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[1000, 1000, 1000]} intensity={1} />
        <Suspense fallback={null}>
          <Special />
        </Suspense>
      </Canvas>
    );
  }