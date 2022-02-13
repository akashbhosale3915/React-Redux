import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="data__wrapper">
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span>Counter {counter}</span>
        <button
          onClick={() => {
            dispatch(increment(5));
          }}
        >
          +
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
