import Dropdown from "./component/Dropdown.jsx";

function App() {
  const options = [
    { lable: "red", value: "red" },
    { lable: "blue", value: "blue" },
    { lable: "green", value: "green" },
  ];
  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
