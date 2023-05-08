import Route from "./component/Route.jsx";
import AccordionPage from "./pages/AccordionPage.jsx";
import DropdownPage from "./pages/DropdownPage.jsx";
import Sidebar from "./component/Sidebar.jsx";

import ButtonPage from "./pages/ButtonPage.jsx";
function App() {
  return (
    <div className="App ">
      <Sidebar />
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
