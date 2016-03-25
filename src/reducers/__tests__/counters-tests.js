"use strict";

import {expect} from "chai";
import deepFreeze from "deep-freeze";

import * as actionTypes from "../../actions";
import countersReducer from "../counters";

describe("Counters reducer function", () => {

  it("should initialise state to an empty array", () => {
    expect(countersReducer()).to.deep.equal([]);
  });

  it("should add a counter to the state on ADD_COUNTER", () => {
    const beforeState = [];
    const action = {
      type: actionTypes.ADD_COUNTER,
      counter: {
        name: "Test counter"
      }
    };
    const afterState = [Object.assign({}, action.counter, {
      count: 0
    })];
    deepFreeze(beforeState);
    deepFreeze(afterState);
    expect(countersReducer(beforeState, action)).to.deep.equal(afterState);
  });

  it("should add new counters after existing counters", () => {
    const beforeState = [{
      name: "Test counter",
      count: 0
    }];
    const action = {
      type: actionTypes.ADD_COUNTER,
      counter: {
        name: "Test counter 2"
      }
    };
    const afterState = [
      {
        name: "Test counter",
        count: 0
      },
      {
        name: "Test counter 2",
        count: 0
      }
    ];
    expect(countersReducer(beforeState, action)).to.deep.equal(afterState);
  });

  it("should only add counters with unique names", () => {
    const beforeState = [
      {
        name: "Test counter",
        count: 0
      }
    ];
    const action = {
      type: actionTypes.ADD_COUNTER,
      counter: {
        name: "Test counter"
      }
    };
    const afterState = [
      {
        name: "Test counter",
        count: 0
      }
    ];
    expect(countersReducer(beforeState, action)).to.deep.equal(afterState);
  });

  it("should increment a counter on INCREMENT_COUNTER", () => {
    const beforeState = [
      {
        name: "Test counter",
        count: 0
      },
      {
        name: "Other counter",
        count: 0
      }
    ];
    const action = {
      type: actionTypes.INCREMENT_COUNTER,
      index: 0
    };
    const afterState = [
      {
        name: "Test counter",
        count: 1
      },
      {
        name: "Other counter",
        count: 0
      }
    ];
    expect(countersReducer(beforeState, action)).to.deep.equal(afterState);
  });

  it("should pass through on an invalid index", () => {
    const beforeState = [
      {
        name: "Test counter",
        count: 0
      }
    ];
    const action = {
      type: actionTypes.INCREMENT_COUNTER,
      index: 1
    };
    const afterState = [
      {
        name: "Test counter",
        count: 0
      }
    ];
    expect(countersReducer(beforeState, action)).to.deep.equal(afterState);
  });

  it("should decrement a counter on DECREMENT_COUNTER", () => {
    const beforeState = [
      {
        name: "Test counter",
        count: 4
      },
      {
        name: "Other counter",
        count: 7
      }
    ];
    const action = {
      type: actionTypes.DECREMENT_COUNTER,
      index: 1
    };
    const afterState = [
      {
        name: "Test counter",
        count: 4
      },
      {
        name: "Other counter",
        count: 6
      }
    ];
    expect(countersReducer(beforeState, action)).to.deep.equal(afterState);
  });

  it("should pass through on an invalid index", () => {
    const beforeState = [
      {
        name: "Test counter",
        count: 0
      }
    ];
    const action = {
      type: actionTypes.DECREMENT_COUNTER,
      index: 1
    };
    const afterState = [
      {
        name: "Test counter",
        count: 0
      }
    ];
    expect(countersReducer(beforeState, action)).to.deep.equal(afterState);
  });

  it("should not allow a counter to decrement below 0", () => {
    const beforeState = [
      {
        name: "Test counter",
        count: 1
      }
    ];
    const action = {
      type: actionTypes.DECREMENT_COUNTER,
      index: 0
    };
    const afterState = [
      {
        name: "Test counter",
        count: 0
      }
    ];
    const firstState = countersReducer(beforeState, action);
    expect(firstState).to.deep.equal(afterState);
    const secondState = countersReducer(firstState, action);
    expect(secondState).to.deep.equal(afterState);
  });
});
