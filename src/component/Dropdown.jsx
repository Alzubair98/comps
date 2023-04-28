import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ options, value, handleClick }) => {
  const [down, setDown] = useState(false);
  //   const [value, setValue] = useState("Select..");

  return (
    <>
      <div
        className="mt-5 ml-5 mr-5 p-2 border rounded cursor-pointer flex justify-between items-center"
        onClick={() => {
          setDown(!down);
        }}
      >
        {value}
        <GoChevronDown
          className={down ? "text-2xl text-blue-500" : "text-2xl"}
        />
      </div>

      {down && (
        <div className="pl-3 ml-5 mr-5 bg-gray-50 border-l border-r border-b cursor-pointer">
          <span
            onClick={() => {
              setDown(!down);
              handleClick("Select..");
            }}
          >
            Select..
          </span>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setDown(!down);
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
