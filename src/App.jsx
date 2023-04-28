import Dropdown from "./component/Dropdown.jsx";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("Select item");

  const handleClick = (item) => {
    setValue(item);
  };

  const options = [
    { lable: "red", value: "red" },
    { lable: "blue", value: "blue" },
    { lable: "green", value: "green" },
  ];
  return (
    <div className="App">
      <Dropdown options={options} value={value} handleClick={handleClick} />
    </div>
  );
}

export default App;
