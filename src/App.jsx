import Button from "./component/Button.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Button success rounded outline>
          Click me
        </Button>
      </div>
      <div>
        <Button>second click me</Button>
      </div>
    </div>
  );
}

export default App;
