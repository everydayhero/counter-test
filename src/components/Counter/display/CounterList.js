"use strict";

import React from "react";

import CounterContainer from "../container/CounterContainer";

const CounterList = ({
  counters,
  total
}) => (
  <div className="counters-wrapper">
    <div className="counters-total">
      Total: <span className="counters-total-value">{total}</span>
    </div>
    <div className="counter-list">

      {counters.map((counter, index) => (
        <CounterContainer
          key={counter.name}
          index={index}
        />
      ))}
    </div>
  </div>
);
CounterList.propTypes = {
  counters: React.PropTypes.array.isRequired,
  total: React.PropTypes.number.isRequired
};

export default CounterList;
