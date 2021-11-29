import React from "react";

export default function Button({ onClick, label, color }) {
  return (
    <button
      onClick={onClick}
      className="hover:opacity-80 border-none p-4 rounded-md text-lg h-12 px-8 flex items-center"
      style={{
        backgroundColor: color,
      }}
    >
      {label}
    </button>
  );
}
