import React, { useState } from "react";

export const TestComponent = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
};
