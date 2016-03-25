"use strict";

import React from "react";
import {connect} from "react-redux";

import {addCounter} from "../../../actions/counters-actions";
import AddCounter from "../display/AddCounter";

export class AddCounterContainer extends React.Component {
  constructor() {
    super();
    this.handleCounterNameChange = this.handleCounterNameChange.bind(this);
    this.handleCounterAdded = this.handleCounterAdded.bind(this);
  }

  handleCounterNameChange(event) {
    this.counterName = event.target.value;
    this.input = event.target;
  }

  handleCounterAdded() {
    const {addCounter} = this.props;
    addCounter(this.counterName);
    this.input.value = "";
  }

  render() {
    return (
      <AddCounter
        onCounterAdded={this.handleCounterAdded}
        onCounterNameChanged={this.handleCounterNameChange}
      />
    );
  }
}
AddCounterContainer.propTypes = {
  addCounter: React.PropTypes.func.isRequired
};

export default connect(null, {addCounter})(AddCounterContainer);
