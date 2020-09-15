import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return <h1>Hello React</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
