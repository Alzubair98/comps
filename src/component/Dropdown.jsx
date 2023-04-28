import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ options }) => {
  const [down, setDown] = useState(0);
  const [value, setValue] = useState("Select..");
  const TrueDown = down === 1;
  console.log(value);

  return (
    <>
      <div
        className="mt-5 ml-5 mr-5 p-2 border rounded cursor-pointer flex justify-between items-center"
        onClick={() => {
          down === 1 ? setDown(0) : setDown(1);
        }}
      >
        {value}
        <GoChevronDown
          className={down === 1 ? "text-2xl text-blue-500" : "text-2xl"}
        />
      </div>

      {TrueDown && (
        <div className="pl-3 ml-5 mr-5 bg-gray-50 border-l border-r border-b cursor-pointer">
          <span
            onClick={() => {
              setDown(0);
              setValue("Select..");
            }}
          >
            Select..
          </span>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setDown(0);
                  setValue(option.value);
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
