import Route from "./component/Route.jsx";
import AccordionPage from "./pages/AccordionPage.jsx";
import DropdownPage from "./pages/DropdownPage.jsx";
import Sidebar from "./component/Sidebar.jsx";
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
      </div>
    </div>
  );
}

export default App;
