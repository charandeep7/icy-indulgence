/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ice-cream.gltf 
Author: LordDiego (https://sketchfab.com/LordDiego)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ice-cream-3december2020-day9-045d9ad885b749b1bb826e2e801b57dd
Title: Ice Cream - #3December2020 Day9
*/
"use client";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// @ts-ignore
export function Icecream(props) {
  const ref = useRef<THREE.Group>(null!);
  // const [hover, setHover] = useState(false);
  // useFrame((state, delta) => {
  //   if(hover){
  //     ref.current.rotation.y += 0.05
  //     ref.current.rotation.x = Math.sin(state.clock.elapsedTime/4)
  //   }
  // });

  const { camera } = useThree();
  // Set the initial camera position for zoom
  camera.position.set(20, 5, 40);


  const { nodes, materials } = useGLTF("/model/ice-cream.glb");
  return (
    <group {...props} dispose={null} ref={ref} position={[2, -19, 0]}>
      <group
        position={[0, 33.457, 0]}
        rotation={[-1.669, -0.102, 0.026]}
        scale={100}
      >
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Cherry_DefaultPlasticShine_0.geometry}
          material={materials.DefaultPlasticShine}
          />
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Cherry_DefaultRubberShine_0.geometry}
          material={materials.DefaultRubberShine}
          />
      </group>
      <group
        position={[6.768, 32.185, -1.72]}
        rotation={[-1.772, 0.558, 0.078]}
        scale={100}
        >
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Bar000_IceCream_Bars_0.geometry}
          material={materials.IceCream_Bars}
          />
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Bar000_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          />
      </group>
      <group
        position={[0, 6.012, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
        >
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Glass_Glass_0.geometry}
          material={materials.Glass}
          />
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Glass_IceCream_0.geometry}
          material={materials.IceCream}
          />
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Glass_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          />
      </group>
      <group
        position={[6.805, 28.938, -3.479]}
        rotation={[-2.022, 0.904, 0.735]}
        scale={100}
        >
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Bar001_IceCream_Bars_0.geometry}
          material={materials.IceCream_Bars}
          />
        <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Bar001_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          />
      </group>
      <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Top_Cream_IceCream_Top_0.geometry}
          material={materials.IceCream_Top}
          position={[0, 30.802, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          />
      <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Main_IceCream_0.geometry}
          material={materials.IceCream}
          position={[0, 24.077, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          />
      <mesh
          /* @ts-ignore */
          geometry={nodes.IceCream_Chocolate_Top_DefaultPlasticShine_0.geometry}
          material={materials.DefaultPlasticShine}
          position={[0, 23.528, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          />
      <mesh
          /* @ts-ignore */
        geometry={nodes.IceCream_Nuts_DefaultMaterial_0.geometry}
        material={materials.DefaultMaterial}
        position={[-0.211, 32.491, 2.048]}
        rotation={[-0.271, 0.987, 1.597]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/model/ice-cream.glb");
