"use strict";

import {expect} from "chai";

import * as actionTypes from "../";
import {
  addCounter,
  incrementCounter,
  decrementCounter
} from "../counters-actions";

describe("Counters action creators", () => {
  describe("Add counter action creator", () => {
    it("should create an ADD_COUNTER action given a name", () => {
      expect(addCounter("Test counter")).to.deep.equal({
        type: actionTypes.ADD_COUNTER,
        counter: {
          name: "Test counter"
        }
      });

      expect(addCounter("Cats")).to.deep.equal({
        type: actionTypes.ADD_COUNTER,
        counter: {
          name: "Cats"
        }
      });
    });
  });

  describe("Increment counter action creator", () => {
    it("should create an INCREMENT_COUNTER action given an index", () => {
      expect(incrementCounter(0)).to.deep.equal({
        type: actionTypes.INCREMENT_COUNTER,
        index: 0
      });

      expect(incrementCounter(8)).to.deep.equal({
        type: actionTypes.INCREMENT_COUNTER,
        index: 8
      });
    });
  });

  describe("Decrement counter action creator", () => {
    it("should create a DECREMENT_COUNTER action given an index", () => {
      expect(decrementCounter(0)).to.deep.equal({
        type: actionTypes.DECREMENT_COUNTER,
        index: 0
      });

      expect(decrementCounter(8)).to.deep.equal({
        type: actionTypes.DECREMENT_COUNTER,
        index: 8
      });
    });
  });
});
