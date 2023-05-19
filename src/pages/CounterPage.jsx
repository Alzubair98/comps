import Button from "../component/Button";
import { useReducer } from "react";
import Panel from "../component/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_VALUE = "change-value";
const ADD_ALOT = "add-alot";
const REMOVE_ALOT = "remove-alot";

const reducer = (state, action) => {
  if (action.type === INCREMENT_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === DECREMENT_COUNT) {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === CHANGE_VALUE) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  if (action.type === ADD_ALOT) {
    return {
      ...state,
      count: state.count + action.payload,
      valueToAdd: 0,
    };
  }
  if (action.type === REMOVE_ALOT) {
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
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleAdd = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_ALOT,
      payload: state.valueToAdd,
    });
  };

  const handleRemove = (event) => {
    event.preventDefault();

    dispatch({
      type: REMOVE_ALOT,
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
