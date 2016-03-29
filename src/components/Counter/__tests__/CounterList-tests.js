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
        total={7}
      />
    );
  });

  it("should render a container element for counters", () => {
    expect(counterList.props().className).to.include("counters-wrapper");
  });

  it("should render a CounterContainer for each counters item", () => {
    const counters = counterList.find(CounterContainer);
    expect(counters).to.have.length(2);
  });

  it("should set counter name as the key prop on its CounterContainer", () => {
    const counters = counterList.find(CounterContainer);
    const firstCounter = counters.get(0);
    const secondCounter = counters.get(1);
    expect(firstCounter.key).to.equal("Counter");
    expect(secondCounter.key).to.equal("Other counter");
  });

  it("should set index in the Array as a prop on CounterContainer", () => {
    const counters = counterList.find(CounterContainer);
    const firstCounter = counters.get(0);
    const secondCounter = counters.get(1);
    expect(firstCounter.props.index).to.equal(0);
    expect(secondCounter.props.index).to.equal(1);
  });

  it("should render the counter total prop", () => {
    const totalElement = counterList.find(".counters-total");
    expect(totalElement).to.have.length(1);
    expect(totalElement.text()).to.match(/7/);
  })
});
