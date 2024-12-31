import React from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import orangeTexturePath from "./assets/photo-1530982011887-3cc11cc85693.jpg";

export default function Infinitydinner(props) {
  const { nodes, materials } = useGLTF("/models/infinitydinner.gltf");

  // Log nodes and materials to the console
  console.log("Nodes:", nodes);
  console.log("Materials:", materials);
  const orangeTexture = useLoader(TextureLoader, orangeTexturePath);

  return (
    <group {...props} dispose={null}>
      {/* <mesh geometry={nodes.Node1.geometry} material={materials.x1} /> */}
      <mesh geometry={nodes.Node1.geometry}>
        <meshStandardMaterial map={orangeTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/infinitydinner.gltf");
