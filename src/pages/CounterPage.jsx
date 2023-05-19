import Button from "../component/Button";
import { useReducer } from "react";
import Panel from "../component/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_VALUE = "change-value";
const ADD_ALOT = "add-alot";
const REMOVE_ALOT = "remove-alot";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_ALOT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    case REMOVE_ALOT:
      return {
        ...state,
        count: state.count - state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
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
    });
  };

  const handleRemove = (event) => {
    event.preventDefault();

    dispatch({
      type: REMOVE_ALOT,
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
