"use strict";

import React from "react";

import CounterContainer from "../container/CounterContainer";

const CounterList = ({
  counters
}) => (
  <div className="counter-list">
    {counters.map((counter, index) => (
      <CounterContainer
        key={counter.name}
        index={index}
      />
    ))}
  </div>
);
CounterList.propTypes = {
  counters: React.PropTypes.array.isRequired
};

export default CounterList;
