import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">Raman Rahinia</div>
      <div className="info">
        <p>I like to play video games like</p>{" "}
        <a href={process.env.CS_LINK}>CS2</a> or{" "}
        <a href={process.env.VALORANT_LINK}> VALORANT</a>
      </div>
    </div>
  );
}

export default App;
