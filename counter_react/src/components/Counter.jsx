import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  const increment = () => {
    if (counter >= 0 && counter < 20) {
      setCounter(counter + 1);
      // setCounter((precounter) => precounter + 1);
      // setCounter((precounter) => precounter + 1);
      // setCounter((precounter) => precounter + 1);
      // setCounter((precounter) => precounter + 1);
      // setCounter((precounter) => precounter + 1);
    } else {
      alert("Counter value should be between 0 to 20");
    }
  };

  const decrement = () => {
    if (counter > 0 && counter <= 20) {
      setCounter(counter - 1);
    } else {
      alert("Counter value should be between 0 to 20");
    }
  };

  return (
    <div>
      <h1 className="m-5 text-center text-5xl">counter</h1>
      <br />
      <h2 className="text-5xl">counter value: {counter}</h2>
      <br />
      <br />
      <button
        className="text-5xl px-4 py-2 bg-black text-white rounded"
        onClick={increment}
      >
        Increment
      </button>
      <br />
      <br />
      <button
        className="text-5xl px-4 py-2 bg-black text-white rounded"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
