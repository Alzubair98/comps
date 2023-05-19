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
  if (action.type === "update-count") {
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
    dispatch({
      type: "change-value",
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //setCount(count + valueToAdd);
    //setValueToAdd(0);

    dispatch({
      type: "update-count",
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
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <div className="flex flex-row gap-1">
          <Button type="submit" onClick={handleSubmit} outblue>
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
