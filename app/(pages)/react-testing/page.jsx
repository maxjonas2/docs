"use client";

import { useCallback, useEffect, useState } from "react";

function timer(cb, period = 1000) {
  const interval = setInterval(() => {
    cb();
  }, 100);
  return { clear: () => clearInterval(interval) };
}

const ReactTesting = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter((c) => c + 1));

  useEffect(() => {
    const interval = timer(increment, 100);

    return () => {
      interval.clear();
    };
  }, []);

  return (
    <div className="flow">
      <h2>Timer</h2>
      <p>Current count is {counter}</p>
    </div>
  );
};

const Box = ({ offset }) => {
  return (
    <div
      className="w-20 h-20 bg-red-800"
      style={{ transform: `translateX(${offset * 0.5}px)` }}
    ></div>
  );
};

export default ReactTesting;
