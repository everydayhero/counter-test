"use strict";

import React from "react";

const AddCounter = ({
  onCounterAdded,
  onCounterNameChanged
}) => (
  <form className="counter-add-form"
    onSubmit={event => {
      event.preventDefault();
      onCounterAdded();
    }}
  >
    <input
      type="text"
      id="counter-name-entry"
      name="name"
      onChange={(event) => {
        onCounterNameChanged(event.target.value);
      }}
    />

    <button type="submit" className="button">Add</button>
  </form>
);
AddCounter.propTypes = {
  onCounterAdded: React.PropTypes.func.isRequired,
  onCounterNameChanged: React.PropTypes.func.isRequired
};

export default AddCounter;
