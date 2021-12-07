import { useState } from "react";
import "./css/Counter.css";

function Counter() {
  let [Counter, setCounter] = useState(1);
  let [userValue, setuserValue] = useState(1);
  const [maxValue, setMaxValue] = useState(1000);

  // Add value to Counter

  const plusCounter = () => {
    if (Counter < maxValue) {
      setCounter(Counter + 1);
    } else {
    }
  };

  //   Subtract value from Counter

  const minusCounter = () => {
    if (Counter > 1) {
      setCounter(Counter - 1);
    }
  };

  // Max value to Counter

  const newmaxValue = () => {
    if (Counter > maxValue) {
      setCounter(maxValue);
    }
    setMaxValue(maxValue);
  };

  //Initialize Value to Counter

  const countervalue = () => {
    if (Counter > maxValue) {
      setCounter(maxValue);
      console.log(`called`);
    } else {
      setCounter(Number(userValue));
      //   console.log(typeof Number(userValue));
    }
  };

  return (
    <div className="Counter">
      <div className="Count">
        <button className="Minus" onClick={minusCounter}>
          -
        </button>
        <p className="number"> {Counter}</p>
        <button className="plus" onClick={plusCounter}>
          +
        </button>
      </div>
      <div className="Values">
        <input
          type="number"
          value={userValue}
          className="initialize-input"
          onChange={(e) => {
            setuserValue(e.target.value);
          }}
        />
        <button className="buttons" onClick={countervalue}>
          Initialize Value
        </button>
        <br />
        <input
          type="number"
          value={maxValue}
          className="initialize-input"
          onChange={(e) => {
            setMaxValue(e.target.value);
          }}
        />
        <button className="buttons" onClick={newmaxValue}>
          Initialize Max Value
        </button>
      </div>
      <h2>Default Max Value is : 1000</h2>
      <h3>current Max Value is : {maxValue}</h3>
    </div>
  );
}

export default Counter;
