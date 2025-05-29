import React, { useState, useEffect } from "react";
function UseState() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <div className="text-center mt-20">
      <p className="mb-5 font-extrabold text-fuchsia-600">
        You clicked {count} times
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white font-bold px-4 py-2 rounded cursor-pointer hover:bg-blue-800 hover:text-red-400"
      >
        Click me
      </button>
    </div>
  );
}
export default UseState;
