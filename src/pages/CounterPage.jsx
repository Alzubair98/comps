import React, { useState, useEffect } from "react";
import Button from "../component/Button";

const useNumber = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return { count, handleClick };
};

const CounterPage = ({ initialCount }) => {
  const { count, handleClick } = useNumber(initialCount);
  return (
    <div>
      <h1> Count is {count}</h1>
      <Button onClick={handleClick} primary>
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
