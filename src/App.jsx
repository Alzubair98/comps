import Dropdown from "./component/Dropdown.jsx";
import { useState } from "react";

function App() {
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
    <div className="App">
      <Dropdown options={options} value={value} onChange={handleClick} />
    </div>
  );
}

export default App;
