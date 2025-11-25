"use client";
import { useState } from "react";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function Select({ options, value, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg text-left"
        onClick={() => setOpen(!open)}
      >
        {value || "Select..."}
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg max-h-40 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
