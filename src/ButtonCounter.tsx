import { useState } from "react";
import { Button } from "../lib/Button/Button";

function ButtonCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <Button $variation="primary" $size="large" onClick={handleClick}>
        Click here!
      </Button>
      <span data-testId="button-counter">You clicked: {count} times</span>
    </>
  );
}

export default ButtonCounter;
