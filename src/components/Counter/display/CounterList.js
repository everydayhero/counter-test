"use strict";

import React from "react";

import CounterContainer from "../container/CounterContainer";

const CounterList = ({
  counters
}) => (
  <div className="counter-list">
    {counters.map(counter => <CounterContainer key={counter.name} />)}
  </div>
);
CounterList.propTypes = {
  counters: React.PropTypes.array.isRequired
};

export default CounterList;
