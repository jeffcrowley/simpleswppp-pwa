import React, { Component } from "react";
import { Form, Segment, Message, Loader } from "semantic-ui-react";

class InfoForm extends Component {
  state = {
    formHasError: false,
    loaderIsRendered: false
  };

  handleChange = e => {
    if (e.target.value.length === 5) {
      parseInt(e.target.value)
        ? this.handleZipCode(parseInt(e.target.value))
        : this.setState({ formHasError: true });
    } else if (e.target.value.length < 5) {
      this.setState({ formHasError: false });
    } else if (e.target.value.length > 5) {
      this.setState({ formHasError: true });
    }
  };

  handleZipCode = inputZip => {
    this.setState({ loaderIsRendered: true });
    window
      .fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${inputZip},us&APPID=${
          process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
        }`
      )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.cod === "404") {
          console.log(`data.cod: ${data.cod}`);
          this.setState({ formHasError: true, loaderIsRendered: false });
        } else {
          this.setState({ loaderIsRendered: false });
          this.props.addDataToState(data, inputZip);
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="info-form">
        <Segment>
          {this.state.loaderIsRendered ? (
            <Loader active />
          ) : (
            <Form error>
              <Form.Field>
                <label>Enter Your 5 Digit Jobsite ZIP Code</label>
                <input placeholder="e.g.: 90210" onChange={this.handleChange} />
                {this.state.formHasError && (
                  <Message
                    error
                    header="Not a Valid ZIP Code"
                    content="Please re-enter."
                  />
                )}
              </Form.Field>
            </Form>
          )}
        </Segment>
      </div>
    );
  }
}

export default InfoForm;
