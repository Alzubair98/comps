import Route from "./component/Route.jsx";
import AccordionPage from "./pages/AccordionPage.jsx";
import DropdownPage from "./pages/DropdownPage.jsx";
import Sidebar from "./component/Sidebar.jsx";
import ModalPage from "./pages/ModalPage.jsx";
import ButtonPage from "./pages/ButtonPage.jsx";
import TablePage from "./pages/TablePage.jsx";
import CounterPage from "./pages/CounterPage.jsx";

function App() {
  return (
    <div className="App container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={1} />
        </Route>
      </div>
    </div>
  );
}

export default App;
