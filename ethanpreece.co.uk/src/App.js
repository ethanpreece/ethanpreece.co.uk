import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-container" id="f1_container">
          <canvas
            width="900rem"
            height="450rem"
            id="f1_card"
            className="item-a canvasStyle slide-in shadow front face"
          />
          <canvas
            width="900rem"
            height="450rem"
            id=""
            className="item-a canvasStyle slide-in back face"
          />
        </div>
      </div>
    );
  }
}

export default App;
