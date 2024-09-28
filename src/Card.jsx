import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButton from "./CountButton";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButton setCount={setCount} />
    </div>
  );
}
