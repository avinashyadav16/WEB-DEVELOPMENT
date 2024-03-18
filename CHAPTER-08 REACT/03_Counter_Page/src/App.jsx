import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setNewCounter] = useState(0);

  const increaseValue = () => {
    setNewCounter(counter + 1);

    /*
    setNewCounter(prevCounter => prevCounter + 4);
    */
  };

  const decreaseValue = () => {
    if (counter === 0) {
      setNewCounter(0);
    } else {
      setNewCounter(counter - 1);
    }
  };

  const resetValue = () => {
    setNewCounter(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter Value: {counter}</h3>
      <br />
      <br />
      <button onClick={increaseValue}> Increase Value </button>
      <button onClick={decreaseValue}> Decrease Value </button>

      <br />
      <button onClick={resetValue}> Reset Counter </button>
    </>
  );
}

export default App;
