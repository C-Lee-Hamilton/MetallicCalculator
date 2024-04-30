import React, { useState } from "react";
import { GradientSpans, MetallicBackgroundDiv } from "./styledComponents";
function App() {
  const [display, setDisplay] = useState(undefined);
  const [operator, setOperator] = useState("");
  const [initialExpression, setInitialExpression] = useState(0);
  const [solved, setSolved] = useState(false);
  const operatorArray = ["x", "÷", "+", "-"];

  const clear = () => {
    setOperator("");
    setInitialExpression(0);
    setDisplay(0);
    setSolved(false);
  };
  const digitInput = (digit) => {
    setDisplay(display ? display + "" + digit : digit);
  };
  const operatorInput = (id) => {
    setOperator(id);
    if (initialExpression === 0 || solved) {
      setInitialExpression(parseFloat(display));

      setSolved(false);
    } else {
      if (operator === "+") {
        setInitialExpression(parseFloat(display) + initialExpression);
      } else if (operator === "-") {
        setInitialExpression(initialExpression - parseFloat(display));
      } else if (operator === "x") {
        setInitialExpression(initialExpression * parseFloat(display));
      } else if (operator === "÷") {
        setInitialExpression(initialExpression / parseFloat(display));
      }
    }
    setDisplay(0);
  };
  const calculate = () => {
    if (!solved) {
      if (operator === "+") {
        setDisplay(parseFloat(display) + initialExpression);
        setInitialExpression(parseFloat(display) + initialExpression);
      } else if (operator === "-") {
        setDisplay(initialExpression - parseFloat(display));
        setInitialExpression(initialExpression - parseFloat(display));
      } else if (operator === "x") {
        setDisplay(initialExpression * parseFloat(display));
        setInitialExpression(initialExpression * parseFloat(display));
      } else if (operator === "÷") {
        setDisplay(initialExpression / parseFloat(display));
        setInitialExpression(initialExpression / parseFloat(display));
      }
      setSolved(true);
    } else {
      setDisplay(display);
    }
  };

  return (
    <div>
      <MetallicBackgroundDiv>
        <input
          className={`w-11/12  mx-auto text-right p-1 text-2xl border-cyan-700 rounded-md border-8 ${
            display !== undefined ? "bg-blue-300" : "bg-gray-500"
          } `}
          style={{
            borderStyle: "inset",
          }}
          type="text"
          value={display}
          placeholder="calculator"
        />
        <h1 className="w-11/12 mb-1 text-gray-600 text-right">CI-42</h1>

        <div className="flex flex-row w-11/12 mx-auto justify-between">
          {operatorArray.map((sym, _) => (
            <button
              key={sym}
              onClick={() => operatorInput(sym)}
              className="btn-secondary"
            >
              {sym}
              <GradientSpans />
            </button>
          ))}
        </div>

        <div className="flex grid grid-cols-3 gap-0 w-11/12 mx-auto">
          {Array.from({ length: 9 }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => digitInput(index + 1)}
              className="btn-primary"
            >
              <GradientSpans />
              {index + 1}
            </button>
          ))}

          <button onClick={() => digitInput(".")} className="btn-primary ">
            <GradientSpans /> •
          </button>
          <button onClick={() => digitInput(0)} className="btn-primary">
            <GradientSpans /> 0
          </button>
          <button
            onClick={clear}
            className="btn-primary text-black pb-0 text-2xl"
            style={{
              background: "linear-gradient( darkgrey , lightgrey )",
            }}
          >
            <GradientSpans /> C
          </button>
        </div>

        <button
          onClick={calculate}
          className="btn-secondary w-10/12  mx-auto  "
        >
          <GradientSpans /> =
        </button>
      </MetallicBackgroundDiv>
    </div>
  );
}

export default App;
