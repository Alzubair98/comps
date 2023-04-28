import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [down, setDown] = useState(0);
  const [value, setValue] = useState("select...");
  const TrueDown = down === 1;

  return (
    <>
      <div
        onClick={() => {
          down === 1 ? setDown(0) : setDown(1);
        }}
      >
        {value}
      </div>

      {TrueDown && (
        <div>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setDown(0);
                  setValue(option.lable);
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
