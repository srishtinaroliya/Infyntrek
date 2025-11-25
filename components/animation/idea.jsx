"use client";

import Lottie from "lottie-react";
import ideaanimationData from "./idea.json";


export default function CartoonPointer() {
  return (
    <div className="w-48 pointer-events-none select-none">
      <Lottie animationData={ideaanimationData} loop={true} />
    </div>
  );
}
