import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar";

const App = () => {
    return <Calendar className="calendar"></Calendar>;
};
// ReactDOM.
ReactDOM.render(<App />, document.querySelector("#root"));
