import React, { Component } from "react";
import Main from "./Components/Main";

class App extends Component {
  state = {
    apiData: {},
    zipCode: null
  };

  addDataToState = data => {
    this.setState({ apiData: data });
  };
  render() {
    return (
      <div>
        <Main addDataToState={this.addDataToState} />
      </div>
    );
  }
}

export default App;
