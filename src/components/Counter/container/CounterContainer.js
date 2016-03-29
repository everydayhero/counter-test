"use strict";

import React from "react";
import {connect} from "react-redux";

import Counter from "../display/Counter";
import {
  incrementCounter,
  decrementCounter
} from "../../../actions/counters-actions";

export class CounterContainer extends React.Component {
  constructor() {
    super();
    this.handleCounterDecrement = this.handleCounterDecrement.bind(this);
    this.handleCounterIncrement = this.handleCounterIncrement.bind(this);
  }

  handleCounterIncrement() {
    const {incrementCounter, index} = this.props;
    incrementCounter(index);
  }

  handleCounterDecrement() {
    const {decrementCounter, index} = this.props;
    decrementCounter(index);
  }

  render() {
    const {
      name,
      count
    } = this.props;
    return (
      <Counter
        name={name}
        count={count}
        onIncrementClicked={this.handleCounterIncrement}
        onDecrementClicked={this.handleCounterDecrement}
      />
    );
  }
}
CounterContainer.propTypes = {
  incrementCounter: React.PropTypes.func.isRequired,
  decrementCounter: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  index: React.PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return state.counters[ownProps.index];
}

export default connect(
  mapStateToProps,
  {incrementCounter, decrementCounter}
)(CounterContainer);
