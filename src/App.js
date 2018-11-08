import React, { Component } from "react";
import Main from "./Components/Main";
import WeatherReport from "./Components/WeatherReport";

class App extends Component {
  state = {
    apiData: [],
    zipCode: null
  };

  addDataToState = (data, zip) => {
    this.setState({ apiData: data, zipCode: zip });
  };

  resetState = () => {
    this.setState({ apiData: [], zipCode: null });
  };

  render() {
    return (
      <div>
        {this.state.apiData.cod === "200" && this.state.zipCode ? (
          <WeatherReport
            apiData={this.state.apiData}
            zipCode={this.state.zipCode}
            resetState={this.resetState}
          />
        ) : (
          <Main addDataToState={this.addDataToState} />
        )}
      </div>
    );
  }
}

export default App;
