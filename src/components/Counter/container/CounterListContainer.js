"use strict";

import {connect} from "react-redux";

import CounterList from "../display/CounterList";

function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}

export default connect(mapStateToProps)(CounterList);
