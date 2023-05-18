import React, { useState } from "react";

const Counter = () => {
  let [num, setNum] = useState(0);
  return (
    <>
      <div className="counter-block">
        <h1>{num}</h1>
        <div className="btns">
          <button onClick={() => setNum(num + 1)}>Plus</button>
          <button onClick={() => setNum(num - 1)}>Minus</button>
          <button onClick={() => setNum((num = 0))}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
