import React, { useState } from "react";
import ReactDOM from "react-dom";

import headerData from "./headerData.json";

import "./styles.css";

function App() {
  const [menuIndex, setMenuIndex] = useState(-1);
  return (
    <div id="navbarHolder">
      {headerData.navbar.map((item, index) => {
        return (
          <div
            key={index}
            onMouseOver={
              item.hasOwnProperty("submenu")
                ? () => setMenuIndex(index)
                : () => setMenuIndex(-1)
            }
          >
            {item.text}
          </div>
        );
      })}
      {menuIndex > -1 && (
        <div>
          {headerData.navbar[menuIndex].submenu.map((item) => {
            return <li>{item.submenuText}</li>;
          })}
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
