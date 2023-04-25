import ButtonPage from "./pages/ButtonPage.jsx";
import Accordion from "./component/Accordion.jsx";

function App() {
  const items = [
    {
      label: "can i use angular",
      content:
        "no you cant,no you cant,no you cant,no you cant,no you cant,no you cant,no you cant,no you cant",
    },
    {
      label: "can i use React",
      content: "yes you can",
    },
    {
      label: "can i use vue",
      content: "no you cant",
    },
  ];
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
