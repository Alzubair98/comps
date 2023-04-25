import Button from "./component/Button.jsx";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log("yes");
  };
  return (
    <div className="App">
      <div>
        <Button rounded success onClick={handleClick}>
          Click me <GoBell />
        </Button>
      </div>
      <div>
        <Button primary>
          second click me <GoCloudDownload />
        </Button>
      </div>
      <div>
        <Button warning>
          second click me <GoDatabase />
        </Button>
      </div>
      <div>
        <Button danger>second click me</Button>
      </div>
      <div>
        <Button outred rounded>
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
