import React, { Component } from "react";
import ReportCard from "./ReportCard";
import { Container, Grid, Button, Icon } from "semantic-ui-react";

class WeatherReport extends Component {
  getTotalRainVolume = data => {
    let total = 0.0;
    data.list.map(item => {
      if (item.rain && item.rain["3h"] && item.rain["3h"] >= 0.254) {
        total += item.rain["3h"];
      }
      return null;
    });
    return (total / 25.4).toFixed(2);
  };

  getTotalSnowVolume = data => {
    let total = 0.0;
    data.list.map(item => {
      if (item.snow && item.snow["3h"] && item.snow["3h"] >= 0.254) {
        total += item.snow["3h"];
      }
      return null;
    });
    return (total / 25.4).toFixed(2);
  };

  // can easily expand this
  getWeatherBrief = (totalRain, totalSnow) => {
    if (totalRain < 0.01 && totalSnow < 0.01) {
      return "Looks like you have no precipitation on the forecast for the near future!";
    } else if (totalRain >= 0.01 && totalSnow < 0.01) {
      return `Looks like you'll have around ${totalRain} inches of rain over the next few days.`;
    } else if (totalRain < 0.01 && totalSnow >= 0.01) {
      return `Looks like you'll have around ${totalSnow} inches of snow over the next few days. Brrr!`;
    } else if (totalRain >= 0.01 && totalSnow >= 0.01) {
      return `Looks like you'll have around ${totalRain} inches of rain and around ${totalSnow} inches of snow over the next few days. Brrr!`;
    } else {
      return "Hmm, something went wrong.";
    }
  };

  render() {
    const { apiData } = this.props;
    const totalRain = this.getTotalRainVolume(apiData);
    const totalSnow = this.getTotalSnowVolume(apiData);
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, LightCyan, LightYellow",
          paddingTop: "3rem",
          paddingBottom: "3rem"
        }}
      >
        <Container text>
          <div style={{ paddingBottom: "3rem" }}>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <h1>Ah yes, {apiData.city.name}</h1>
                  <p>{this.getWeatherBrief(totalRain, totalSnow)}</p>
                </Grid.Column>
                <Grid.Column>
                  <Button
                    animated
                    size="massive"
                    onClick={this.props.resetState}
                    floated="right"
                    color="blue"
                  >
                    <Button.Content visible>Back</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow left" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
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
