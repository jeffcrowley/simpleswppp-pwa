import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Heading from "./Heading";
import InfoForm from "./InfoForm";

class Main extends Component {
  render() {
    return (
      <div>
        <header>
          <Container text>
            <Heading />
          </Container>
        </header>
        <InfoForm />
      </div>
    );
  }
}

export default Main;
