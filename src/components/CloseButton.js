import React from "react";

export default function CloseButton({ handleSkip }) {
  return (
    <div
      className="p-2 rounded-full absolute hover:bg-indigo-800 cursor-pointer"
      onClick={handleSkip}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
