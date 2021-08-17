import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Hi there!"
}
const App = () => {
  const buttonText = "Click me!"
  const buttonText2 = 12345
  return (
    <div>
      <p>Hi There!</p>
      <label htmlFor="name" className="label">
        enter e-mail
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>{buttonText}</button>
      <button style={{ backgroundColor: "blue", color: "white" }}>{getButtonText()}</button>
      <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText2}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
