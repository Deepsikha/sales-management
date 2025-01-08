"use client";
import React, { useState } from "react";

export interface SelectionChips {
  chipsList: string[];
}

const SelectionChips: React.FC<SelectionChips> = ({ chipsList }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="flex justify-center overflow-auto md:overflow-hidden ">
      {chipsList.map((item, index) => {
        return (
          <button
            key={`${item}-${index}`}
            className={`py-2 px-2 md:px-4 ${
              index === 0 && "rounded-tl-[10px] rounded-bl-[10px]"
            } ${
              index === chipsList.length - 1 &&
              "rounded-tr-[10px] rounded-br-[10px] "
            } border ${
              isActive === index && "bg-[#76777A] border-[#2A2B32]"
            } border-[#76777A] text-sm md:text-base text-white font-medium md:font-bold`}
            onClick={() => setIsActive(index)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default SelectionChips;
