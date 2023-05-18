import useNumber from "../hooks/use-number";
import Button from "../component/Button";

const CounterPage = ({ initialCount }) => {
  const { count, increment } = useNumber(initialCount);
  return (
    <div>
      <h1> Count is {count}</h1>
      <Button onClick={increment} primary>
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
