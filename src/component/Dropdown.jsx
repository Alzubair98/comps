import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-48 relative ">
      <Panel
        className=" cursor-pointer flex justify-between items-center "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value?.lable || "Select..."}
        <GoChevronDown
          className={isOpen ? "text-2xl text-blue-500" : "text-2xl"}
        />
      </Panel>

      {isOpen && (
        <Panel className="shadow rounded cursor-pointer bg-gray-50 border cursor-pointer absolute w-full">
          <div
            className="hover:bg-sky-100 "
            onClick={() => {
              setIsOpen(!isOpen);
              onChange(null);
            }}
          >
            Select...
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
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
