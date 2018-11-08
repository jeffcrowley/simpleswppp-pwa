import React, { Component } from "react";
import ReportCard from "./ReportCard";
import { Container } from "semantic-ui-react";

class WeatherReport extends Component {
  render() {
    return (
      <div style={{ marginTop: "3rem" }}>
        <Container>
          <h1>I'm a weather report!</h1>
          <p>ZIP: {this.props.zipCode}</p>
          <p>City: {this.props.apiData.city.name}</p>
          <button onClick={this.props.resetState}>Back</button>
          <p>Weather: </p>
        </Container>
        {this.props.apiData.list.map((item, i) => {
          return (
            <ReportCard
              key={i}
              index={i}
              dt={item.dt}
              dtTxt={item.dt_txt}
              rain={item.rain && item.rain["3h"]}
              snow={item.snow && item.snow["3h"]}
            />
          );
        })}
      </div>
    );
  }
}

export default WeatherReport;
