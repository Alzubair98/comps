import React, { useState } from "react";
import Dropdown from "../component/Dropdown";

const DropdownPage = () => {
  const [value, setValue] = useState(null);

  const handleClick = (item) => {
    setValue(item);
  };

  const options = [
    { lable: "redddd", value: "red" },
    { lable: "blueee", value: "blue" },
    { lable: "greennn", value: "green" },
  ];
  return <Dropdown options={options} value={value} onChange={handleClick} />;
};

export default DropdownPage;
