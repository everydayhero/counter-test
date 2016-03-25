"use strict";

import {expect} from "chai";
import React from "react";
import {shallow} from "enzyme";

import CounterList from "../display/CounterList";
import CounterContainer from "../container/CounterContainer";

describe("CounterList display component", () => {
  let counterList;

  beforeEach(() => {
    const counters = [
      {name: "Counter", count: 0},
      {name: "Other counter", count: 1}
    ];
    counterList = shallow(
      <CounterList
        counters={counters}
      />
    );
  });

  it("should render a container element for counters", () => {
    expect(counterList.props().className).to.include("counter-list");
  });

  it("should render a CounterContainer for each counters item", () => {
    let counters = counterList.find(CounterContainer);
    expect(counters).to.have.length(2);
  });
});
