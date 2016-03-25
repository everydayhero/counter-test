"use strict";

import React from "react";

const AddForm = ({
  onFormSubmitted
}) => (
  <form className="counter-add-form"
    onSubmit={function(event) {
      event.preventDefault();
      onFormSubmitted(event);
    }}
  >
    <input type="text" id="counter-name-entry" name="name" />
    
    <button type="submit" className="button">Add</button>
  </form>
);
AddForm.propTypes = {
  onFormSubmitted: React.PropTypes.func.isRequired
};

export default AddForm;
