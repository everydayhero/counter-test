"use strict";

import React from "react";

const Counter = ({
  name,
  count,
  onIncrementClicked,
  onDecrementClicked
}) => (
  <div className="counter">
    <h2 className="counter-name">{name}</h2>

    <div className="counter-count">
      {count}
    </div>

    <div className="counter-actions">
      <button className="button counter-increment"
        onClick={onIncrementClicked}
      >
        +
      </button>
      <button className="button counter-decrement"
        onClick={onDecrementClicked}
      >
        -
      </button>
    </div>
  </div>
);
Counter.propTypes = {
  name: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  onIncrementClicked: React.PropTypes.func,
  onDecrementClicked: React.PropTypes.func
};

export default Counter;

