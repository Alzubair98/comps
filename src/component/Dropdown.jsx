import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ options, value, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="mt-5 ml-5 mr-5 p-2 border rounded cursor-pointer flex justify-between items-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value || "Select..."}
        <GoChevronDown
          className={isOpen ? "text-2xl text-blue-500" : "text-2xl"}
        />
      </div>

      {isOpen && (
        <div className="pl-3 ml-5 mr-5 bg-gray-50 border-l border-r border-b cursor-pointer">
          <span
            onClick={() => {
              setIsOpen(!isOpen);
              handleClick(null);
            }}
          >
            Select..
          </span>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setIsOpen(!isOpen);
                  handleClick(option.value);
                }}
              >
                {option.lable}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Dropdown;
