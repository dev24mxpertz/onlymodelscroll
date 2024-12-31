import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export const Floor_Height = 2.3;
export const NB_Floors = 5;

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/INFINITY-D.glb"); // Correct path
  const ref = useRef(); // Reference to the model group
  const tl = useRef(); // Reference to GSAP timeline
  const scroll = useScroll(); // React Three Fiber's scroll hook

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration()); // Synchronize scroll with animation
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -Floor_Height * (NB_Floors - 1), // Adjust the y-axis position based on floors
        ease: "power1.inOut",
      },
      0
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        position={[0, 0, 0]}
        geometry={nodes.Node1.geometry}
        material={materials.x1}
      />
    </group>
  );
}

useGLTF.preload("/models/INFINITY-D.glb"); // Preload the model
