"use client";

import Lottie from "lottie-react";
import animationData from "./JoinUs.json";


export default function CartoonPointer() {
  return (
    <div className="w-48 pointer-events-none select-none">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
