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
        <Button primary>second click me</Button>
      </div>
      <div>
        <Button warning>second click me</Button>
      </div>
      <div>
        <Button danger>second click me</Button>
      </div>
      <div>
        <Button secondary>second click me</Button>
      </div>
    </div>
  );
}

export default App;
