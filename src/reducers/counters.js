"use strict";

import * as actionTypes from "../actions";

export default (state = [], action = {}) => {
  switch(action.type) {
  case actionTypes.ADD_COUNTER:
    return addCounterReducer(state, action);
  case actionTypes.INCREMENT_COUNTER:
    return incrementCounterReducer(state, action);
  case actionTypes.DECREMENT_COUNTER:
    return decrementCounterReducer(state, action);
  default:
    return state;
  }
};

function addCounterReducer(state, action) {
  const names = state.map(counter => counter.name);
  if (names.includes(action.counter.name)) {
    return state;
  }
  const counter = Object.assign({}, action.counter, {
    count: 0
  });
  return [...state, counter];
}

function incrementCounterReducer(state, action) {
  const counter = state[action.index];
  if (!counter) {
    return state;
  }
  return [
    ...state.slice(0, action.index),
    Object.assign({}, counter, {
      count: counter.count + 1
    }),
    ...state.slice(action.index + 1)
  ]
}

function decrementCounterReducer(state, action) {
  const counter = state[action.index];
  if (!counter || counter.count === 0) {
    return state;
  }
  return [
    ...state.slice(0, action.index),
    Object.assign({}, counter, {
      count: counter.count - 1
    }),
    ...state.slice(action.index + 1)
  ];
}
