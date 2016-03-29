"use strict";

import * as actionTypes from "./";

export const addCounter = (name) => {
  return {
    type: actionTypes.ADD_COUNTER,
    counter: {name}
  };
};

export const incrementCounter = (index) => {
  return {
    type: actionTypes.INCREMENT_COUNTER,
    index
  };
};

export const decrementCounter = (index) => {
  return {
    type: actionTypes.DECREMENT_COUNTER,
    index
  };
};
