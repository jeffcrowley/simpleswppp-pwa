import React, { Component } from "react";
import { Segment, Container, Grid } from "semantic-ui-react";

class ReportCard extends Component {
  render() {
    const { dt, rain, snow } = this.props;
    const date = new Date(dt * 1000);
    const formattedDate = date.toLocaleString("en-US", {
      hour12: true,
      weekday: "short",
      month: "2-digit",
      year: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric"
    });
    const cardColor = () => {
      // 0.254mm = 0.01 in. Anything less shows up as 0.00in due to toFixed(2)
      if (rain > 0.254 && rain < 12.7) {
        return "LightSkyBlue";
      } else if (12.7 <= rain && rain < 25.4) {
        return "DodgerBlue";
      } else if (25.4 <= rain && rain < 50.8) {
        return "RoyalBlue";
      } else if (50.8 <= rain && rain < 76.2) {
        return "MediumBlue";
      } else {
        return "#FFFFFF";
      }
    };

    const precipitation = () => {
      // 0.254mm = 0.01 in. Anything less shows up as 0.00in due to toFixed(2)
      if (rain && rain > 0.254) {
        return `Rainfall (3 hrs): ${(rain / 25.4).toFixed(2)}in`;
      } else if (snow && snow > 0.254) {
        return `Snowfall (3 hrs): ${(snow / 25.4).toFixed(2)}in`;
      } else {
        return `No Preciptiation`;
      }
    };

    return (
      <div>
        <Container text>
          <Segment
            textAlign="center"
            style={{
              maxWidth: "60%",
              margin: "auto",
              backgroundColor: cardColor()
            }}
          >
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <p>{formattedDate}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{precipitation()}</p>
                  {/* <p>
                    Rainfall (3 hrs): {rain ? (rain / 25.4).toFixed(2) : "0.00"}
                    in
                  </p> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default ReportCard;
