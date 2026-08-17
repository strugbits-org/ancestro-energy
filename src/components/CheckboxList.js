
// "use client";
// import React, { useState } from "react";
// import CustomCheckbox from "./CustomCheckbox";
// import { useTranslation } from "react-i18next";

// const CheckboxList = () => {
//   const { t } = useTranslation();
//   const [checkedOptions, setCheckedOptions] = useState([]);

//   const handleCheckboxChange = (option) => (event) => {
//     if (event.target.checked) {
//       setCheckedOptions((prev) => [...prev, option]);
//     } else {
//       setCheckedOptions((prev) => prev.filter((item) => item !== option));
//     }
//   };

//   return (
//     <div className="flex flex-wrap justify-start gap-6 text-white">
//       {t("checkboxList.options", { returnObjects: true }).map((option) => (
//         <label
//           key={option}
//           className="flex items-center gap-2 cursor-pointer font-lato font-bold text-[15px]"
//         >
//           <CustomCheckbox
//             checked={checkedOptions.includes(option)}
//             onChange={handleCheckboxChange(option)}
//           />
//           <span>{option}</span>
//         </label>
//       ))}
//     </div>
//   );
// };

// export default CheckboxList;
"use client";
import React from "react";
import CustomCheckbox from "./CustomCheckbox";
import { useTranslation } from "react-i18next";

const CheckboxList = ({ selectedOption, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap justify-start gap-6 text-white">
      {t("checkboxList.options", { returnObjects: true }).map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 cursor-pointer font-lato font-bold text-[15px]"
        >
          <CustomCheckbox
            checked={selectedOption === option}
            onChange={() => onChange(option)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;