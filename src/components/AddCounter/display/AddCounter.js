"use strict";

import React from "react";

const AddCounter = ({
  onCounterAdded,
  onCounterNameChanged
}) => {
  let input;

  return (
    <form className="counter-add-form"
      onSubmit={event => {
        event.preventDefault();
        onCounterAdded();
        if (input) {
          input.value = "";
          input.focus();
        }
      }}
    >
      <input
        type="text"
        id="counter-name-entry"
        name="name"
        maxLength="32"
        onChange={(event) => {
          onCounterNameChanged(event.target.value);
        }}
        ref={entry => {
          if (entry) {
            input = entry;
            entry.focus();
          }
        }}
      />

      <button type="submit" className="button">Add</button>
    </form>
  );
};

AddCounter.propTypes = {
  onCounterAdded: React.PropTypes.func.isRequired,
  onCounterNameChanged: React.PropTypes.func.isRequired
};

export default AddCounter;
