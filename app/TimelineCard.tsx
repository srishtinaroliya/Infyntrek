"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  highlight: string;
}

export default function TimelineCard({
  year,
  title,
  description,
  highlight,
}: TimelineCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(60, 119, 255, 0.15)", // light transparent blue
        //boxShadow: "0 0 15px rgba(0, 140, 255, 0.4)", // glowing blue shadow
      }}
      transition={{ type: "tween", duration: 0.15 }} // faster, snappy animation
      className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-md text-white min-h-[220px] flex flex-col justify-between transform transition-transform duration-300"
    >
      <div>
        <h3 className="text-blue-400 font-bold text-lg">{year}</h3>
        <h4 className="font-semibold text-xl mt-1">{title}</h4>
        <p className="text-white/70 mt-2 text-sm">{description}</p>
      </div>
      <span className="text-blue-300 mt-4 font-medium text-sm">{highlight}</span>
    </motion.div>
  );
}
