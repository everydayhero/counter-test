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

  handleCounterNameChange(counterName) {
    this.counterName = counterName;
  }

  handleCounterAdded() {
    const {addCounter} = this.props;
    addCounter(this.counterName);
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
