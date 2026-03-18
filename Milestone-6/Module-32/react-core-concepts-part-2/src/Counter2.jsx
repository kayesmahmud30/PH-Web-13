import { useState } from "react";

export default function Counter2() {
  const [counter, setCounter] = useState(0);

  const buttonStyle = {
    padding: "7px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    background: "#503090",
  };

  return (
    <div className="card">
      <h1>2 Way Counter</h1>

      <div
        style={{
          border: "2px Solid red",
          background: "#000030",
          maxWidth: "50%",
          margin: "10px auto",
          borderRadius: "20px",
        }}
      >
        <p>Counter Display</p>
        <h2>{counter}</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          style={buttonStyle}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increase
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            counter > 0 && setCounter(counter - 1);
          }}
        >
          Decrease
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
