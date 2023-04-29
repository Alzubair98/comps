import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-48 relative">
      <div
        className=" p-2 border rounded cursor-pointer flex justify-between items-center shadow"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value?.lable || "Select..."}
        <GoChevronDown
          className={isOpen ? "text-2xl text-blue-500" : "text-2xl"}
        />
      </div>

      {isOpen && (
        <div className="shadow rounded cursor-pointer pl-3 bg-gray-50 border-l border-r border-b cursor-pointer">
          <div
            className="hover:bg-sky-100 "
            onClick={() => {
              setIsOpen(!isOpen);
              onChange(null);
            }}
          >
            Select..
          </div>
          {options.map((option, index) => {
            return (
              <div
                className="hover:bg-sky-100"
                key={index}
                onClick={() => {
                  setIsOpen(!isOpen);
                  onChange(option);
                }}
              >
                {option.lable}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
