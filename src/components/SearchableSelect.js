"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const SearchableSelect = ({ value, onChange, options }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const wrapperRef = useRef(null);

  // Filter options based on search input
  useEffect(() => {
    setFilteredOptions(
      options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full text-white font-lato" ref={wrapperRef}>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-bold text-[14px]">
          {t("multiStepForm.country")}
        </label>
        <svg
          width="13"
          height="5"
          viewBox="0 0 13 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <path d="M6.50451 5L0.00969358 -1.13565e-06L13.0001 0L6.50451 5Z" fill="#D9D9D9" />
        </svg>
      </div>
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => setOpen(true)}
          placeholder={value || ""}
          className="w-full bg-transparent border-b-1 border-[#FFFFFF4D] outline-none px-2 py-2 text-white placeholder-gray-300"
        />
      </div>
      {open && (
        <ul
          className="absolute left-0 mt-1 w-full max-h-60 overflow-y-auto rounded-md shadow-lg bg-black/90 backdrop-blur-xl z-10"
          style={{
            borderColor: "#FFFFFF1A",
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setSearch("");
                  setOpen(false);
                }}
                className="px-4.5 py-2 cursor-pointer hover:bg-white/30 text-white font-lato font-bold"
              >
                {opt.label}
              </li>
            ))
          ) : (
            <li className="px-4.5 py-2 text-white font-lato font-bold">
              {t("multiStepForm.noResults")}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableSelect;