import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { TextureLoader } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";

import orangeTexturePath from "./assets/darkshadybg.jpg";
import blueTexturePath from "./assets/startexture.jpg";
import pinkTexturePath from "./assets/pinkshadetexture.jpg";

const Floor_Height = 2.3;

export default function Infinitydouter({ position, totalPages, ...props }) {
  const { nodes } = useGLTF("./models/infinitydouter.gltf");

  // Load multiple textures
  const orangeTexture = useLoader(TextureLoader, orangeTexturePath);
  const blueTexture = useLoader(TextureLoader, blueTexturePath);
  const pinkTexture = useLoader(TextureLoader, pinkTexturePath);

  const ref = useRef();
  const rotationTimeline = useRef();
  const scroll = useScroll();

  const [currentTexture, setCurrentTexture] = useState(orangeTexture);

  useLayoutEffect(() => {
    rotationTimeline.current = gsap.timeline({ paused: true });

    const sectionDuration = 1 / totalPages;

    for (let i = 1; i <= totalPages; i++) {
      const rotationAngle = (i * 2 * Math.PI) / totalPages;
      rotationTimeline.current.to(
        ref.current.rotation,
        {
          duration: sectionDuration * 2,
          y: rotationAngle,
          x:Math.PI,
          ease: "power1.out",
        },
        (i - 1) * sectionDuration
      );
    }
  }, [totalPages]);

  useFrame(() => {
    const progress = scroll.offset;
    const sectionIndex = Math.floor(progress * totalPages); // Determine the current section

    // Update texture when changing sections
    if (sectionIndex === 0 && currentTexture !== orangeTexture) {
      setCurrentTexture(orangeTexture);
    } else if (sectionIndex === 1 && currentTexture !== blueTexture) {
      setCurrentTexture(blueTexture);
    } else if (sectionIndex === 2 && currentTexture !== pinkTexture) {
      setCurrentTexture(pinkTexture);
    }
    // pinkTexture;

    // Ensure material updates
    if (ref.current) {
      ref.current.children[0].material.map = currentTexture;
      ref.current.children[0].material.needsUpdate = true;
    }

    rotationTimeline.current.seek(
      progress * rotationTimeline.current.duration()
    );
  });

  return (
    <group {...props} dispose={null} ref={ref} position={position}>
      <mesh geometry={nodes.Node1.geometry}>
        <meshStandardMaterial map={currentTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/infinitydouter.gltf");
