import Button from "../component/Button";
import { useReducer } from "react";
import Panel from "../component/Panel";

const reducer = (state, action) => {
  if (action.type === "increment-count") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "decrement-count") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === "change-value") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  if (action.type === "add-alot") {
    return {
      ...state,
      count: state.count + action.payload,
      valueToAdd: 0,
    };
  }
  if (action.type === "remove-alot") {
    return {
      ...state,
      count: state.count - action.payload,
      valueToAdd: 0,
    };
  }

  return state;
};

const CounterPage = ({ initialCount }) => {
  // instead of multipale useState we can use useReducer
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: "increment-count",
    });
  };

  const decrement = () => {
    dispatch({
      type: "decrement-count",
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: "change-value",
      payload: value,
    });
  };

  const handleAdd = (event) => {
    event.preventDefault();

    dispatch({
      type: "add-alot",
      payload: state.valueToAdd,
    });
  };

  const handleRemove = (event) => {
    event.preventDefault();

    dispatch({
      type: "remove-alot",
      payload: state.valueToAdd,
    });
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
      <form>
        <label>Number to add or remove!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <div className="flex flex-row gap-1">
          <Button type="submit" onClick={handleAdd} outblue>
            Add it
          </Button>
          <Button type="submit" onClick={handleRemove} outblue>
            Remove it
          </Button>
        </div>
      </form>
    </Panel>
  );
};

export default CounterPage;
