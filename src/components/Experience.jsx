import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Infinitydouter from "../Infinitydouter";
import HeroSection from "./HeroSection";

const Experience = () => {
  const totalPages = 3; // Define the total number of scroll pages

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls damping={1.25} pages={totalPages}>
        <Scroll>
          {/* <HeroSection/> */}
          <Infinitydouter position={[5, 0, -10]} totalPages={totalPages} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Experience;
