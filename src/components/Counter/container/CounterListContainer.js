"use strict";

import {connect} from "react-redux";

import CounterList from "../display/CounterList";

function mapStateToProps(state) {
  return {
    counters: state.counters,
    total: state.counters.reduce((prevValue, currentValue) => {
      return prevValue + currentValue.count;
    }, 0)
  };
}

export default connect(mapStateToProps)(CounterList);
