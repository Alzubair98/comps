import Button from "../component/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const ButtonPage = () => {
  return (
    <div className="App">
      <div>
        <Button rounded success>
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
};

export default ButtonPage;
