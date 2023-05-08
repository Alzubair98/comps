import Link from "./component/Link.jsx";
import Route from "./component/Route.jsx";
import AccordionPage from "./pages/AccordionPage.jsx";
import DropdownPage from "./pages/DropdownPage.jsx";
function App() {
  return (
    <div className="App ">
      <Link to="/dashborad">dashborad</Link>
      <br />
      <Link to="/accordion">accordion</Link> <br />
      <Link to="/dropdown">dropdown</Link>
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
