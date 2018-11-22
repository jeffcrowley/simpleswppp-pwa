import React, { Component } from "react";
import { Header } from "semantic-ui-react";

class Heading extends Component {
  render() {
    return (
      <div>
        <div style={{ background: "rgba(0,0,0,0.7)", borderRadius: "50%" }}>
          <Header
            as="h1"
            inverted
            style={{
              fontSize: "4em",
              marginTop: "3em",
              paddingTop: "1em"
            }}
          >
            SimpleSWPPP
          </Header>
          <Header
            as="h2"
            inverted
            style={{
              paddingBottom: "3em",
              paddingTop: "1em",
              paddingLeft: "3em",
              paddingRight: "3em"
            }}
          >
            Get accurate rainfall predictions for your job site so you can plan
            your SWPPP.
          </Header>
        </div>
      </div>
    );
  }
}

export default Heading;
