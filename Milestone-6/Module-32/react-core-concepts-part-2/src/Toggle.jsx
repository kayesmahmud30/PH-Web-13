import { useState } from "react";

const buttonStyle = {
  padding: "7px",
  borderRadius: "5px",
  border: "none",
  outline: "none",
  background: "#503090",
};

export default function Toggle() {
  const [btnState, setBtnState] = useState("Hide");
  const [title, setTitle] = useState("Hello, React Learner");

  const btnTask = () => {
    setBtnState(btnState == "Hide" ? "Show" : "Hide");
    setTitle(title !== "Hidden" ? "Hidden" : "Hello, React Learner");
  };

  return (
    <div className="card">
      <h3 style={{ color: title === "Hidden" ? "red" : "green" }}>{title}</h3>
      <button onClick={btnTask} style={buttonStyle}>
        {btnState}
      </button>
    </div>
  );
}
