
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const CustomSelect = ({ value, onChange, options: propOptions, label: propLabel }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null); // 🔹 reference to wrapper div

  // Use propOptions if provided, otherwise fallback to translation
  const options = propOptions || t("customSelect.options", { returnObjects: true });
  const label = propLabel || t("customSelect.label");

  // 🔹 Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative w-full text-white font-lato">
      {/* Label + Arrow */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-bold text-[14px]">{label}</label>
        <svg
          width="13"
          height="5"
          viewBox="0 0 13 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`cursor-pointer transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <path d="M6.50451 5L0.00969358 -1.13565e-06L13.0001 0L6.50451 5Z" fill="#D9D9D9" />
        </svg>
      </div>

      {/* Selected value area */}
      <div
        className="w-full bg-transparent border-b border-[#FFFFFF4D] outline-none px-2 py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {value || t("customSelect.placeholder")}
      </div>

      {/* Dropdown menu */}
      {open && (
        <ul
          className="absolute left-0 mt-1 w-full rounded-md shadow-lg bg-black/90 backdrop-blur-xl z-10 border border-[#FFFFFF1A]"
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-white/30 text-white font-lato font-bold transition-colors"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
