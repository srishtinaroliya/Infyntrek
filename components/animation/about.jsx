"use client";

import Lottie from "lottie-react";
import animationAbout from "./about.json";


export default function CartoonPointer() {
  return (
    <div className="w-48 pointer-events-none select-none">
      <Lottie animationData={animationAbout} loop={true} />
    </div>
  );
}
