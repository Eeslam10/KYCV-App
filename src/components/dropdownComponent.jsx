import React, { useState } from "react";

const Dropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-full">
     
      <button
        className="flex items-center justify-between p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand shadow "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || placeholder || "Gender"}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="p-4 rounded w-full text-brand border-none bg-slate-100 placeholder:text-brand">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
