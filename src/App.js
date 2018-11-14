import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "Charles";
    const showHello = true;
    const showMath = true;

    let math;
    if (showMath) {
      math = <h4>1 + 1 = {1 + 1}</h4>;
    } else {
      math = null;
    }

    return (
      <div className="App">
        <h1>The App Component</h1>
        {showHello ? <h4>Hello {name}</h4> : null}
        {math}
      </div>
    );
  }
}

export default App;
