import Button from "./component/Button.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Button rounded success>
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
        <Button outline primary>
          second click me
        </Button>
      </div>
      <div>
        <Button rounded outline>
          second click me
        </Button>
      </div>
    </div>
  );
}

export default App;
