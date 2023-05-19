import Button from "../component/Button";
import { useState, useReducer } from "react";
import Panel from "../component/Panel";

const reducer = (state, action) => {
  if (action.type === "increment-count") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "decrement-count") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
};

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  // instead of multipale useState we can use useReducer
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    //setCount(count + 1);
    dispatch({
      type: "increment-count",
    });
  };

  const decrement = () => {
    //setCount(count - 1);
    dispatch({
      type: "decrement-count",
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    //setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //setCount(count + valueToAdd);
    //setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg"> Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment} primary>
          Increment
        </Button>
        <Button onClick={decrement} primary>
          decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button outblue>Add it</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
