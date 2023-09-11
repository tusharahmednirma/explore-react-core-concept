import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  const result = () => {
    const newCount = count + 1;
    setcount(newCount);
  };
  return (
    <div>
      <h3>counter :{count} </h3>
      <button onClick={result}>Add</button>
    </div>
  );
}
