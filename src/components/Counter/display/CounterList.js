"use strict";

import React from "react";

import CounterContainer from "../container/CounterContainer";

const CounterList = ({
  counters,
  total
}) => (
  <div className="counter-list">
    <div className="counters-total">
      Total: {total}
    </div>
    {counters.map((counter, index) => (
      <CounterContainer
        key={counter.name}
        index={index}
      />
    ))}
  </div>
);
CounterList.propTypes = {
  counters: React.PropTypes.array.isRequired,
  total: React.PropTypes.number.isRequired
};

export default CounterList;
