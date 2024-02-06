"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Icecream } from "./Icecream";

export default function Ice3d() {
  return (
    <div className="relative h-[500px] sm:h-[700px] w-[100%] flex justify-center items-center">
      {/* <div className="absolute w-full bg-green-400 h-[500px] flex justify-center items-center">
        <h1 className="text-9xl text-center flex justify-center items-center tracking-[7rem]">
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>C</span>
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>M</span>
        </h1>
      </div> */}
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