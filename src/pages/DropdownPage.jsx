import React, { useState } from "react";
import Dropdown from "../component/Dropdown";

const DropdownPage = () => {
  const [value, setValue] = useState(null);
  console.log(value);

  const handleClick = (item) => {
    setValue(item);
  };

  const options = [
    { lable: "redddd", value: "red" },
    { lable: "blueee", value: "blue" },
    { lable: "greennn", value: "green" },
  ];
  return (
    <div>
      <Dropdown options={options} value={value} onChange={handleClick} />
    </div>
  );
};

export default DropdownPage;
