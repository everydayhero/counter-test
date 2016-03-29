"use strict";

import {expect} from "chai";

import store from "../store";
import {addCounter, incrementCounter} from "../actions/counters-actions";

describe("Redux store for counter app", () => {
  it("should be a redux store", () => {
    expect(store).to.respondTo("getState");
    expect(store).to.respondTo("dispatch");
  });

  it("should compose in the counter reducer under counters", () => {
    const initialState = store.getState();
    expect(initialState).to.have.ownProperty("counters");
    expect(initialState.counters).to.deep.equal([]);
  });

  it("should modify counter sub-state when counter actions dispatch", () => {
    store.dispatch(addCounter("Test Counter"));
    expect(store.getState()).to.deep.equal({
      counters: [
        {
          name: "Test Counter",
          count: 0
        }
      ]
    });
    store.dispatch(incrementCounter(0));
    store.dispatch(incrementCounter(0));
    expect(store.getState()).to.deep.equal({
      counters: [
        {
          name: "Test Counter",
          count: 2
        }
      ]
    });
  });
});
