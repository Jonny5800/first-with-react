//window.alert("testing");
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}

import React, { Component } from "react";
import Greet from "./Greet";
import Welcome from "./Welcome";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    );
  }
}

export default App;

/*

Both of these work...
document.write("is this working");
alert("testing");
*/
