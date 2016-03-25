"use strict";

import {expect} from "chai";
import React from "react";
import {shallow} from "enzyme";
import * as sinon from "sinon";

import Counter from "../display/Counter";

describe("Counter display component", () => {
  let counter;

  beforeEach(() => {
    counter = shallow(
      <Counter
        name="Test counter"
        count={0}
        onIncrementClicked
      />
    );
  });

  it("should render a counter element", () => {
    expect(counter.props().className).to.equal("counter");
  });

  it("should render the counter name into the counter", () => {
    const counterNameElement = counter.find(".counter-name");
    expect(counterNameElement).to.have.length(1);
    expect(counterNameElement.text()).to.equal("Test counter");
  });

  it("should render the current count value into the counter", () => {
    const counterCountElement = counter.find(".counter-count");
    expect(counterCountElement).to.have.length(1);
    expect(counterCountElement.text()).to.equal("0");
  });

  it("should include an increment button", () => {
    const incrementButton = counter.find(".counter-increment");
    expect(incrementButton).to.have.length(1);
    expect(incrementButton.text()).to.equal("+");
    expect(incrementButton.props().className).to.include("button");
    expect(incrementButton.type()).to.equal("button");
  });

  it("should include a decrement button", () => {
    const decrementButton = counter.find(".counter-decrement");
    expect(decrementButton).to.have.length(1);
    expect(decrementButton.text()).to.equal("-");
    expect(decrementButton.props().className).to.include("button");
    expect(decrementButton.type()).to.equal("button");
  });
  
  it("should call onIncrementClicked when + button is clicked", () => {
    const incrementStub = sinon.stub();
    counter = shallow(
      <Counter
        name="Test counter"
        count={0}
        onIncrementClicked={incrementStub}
      />
    );
    const incrementButton = counter.find(".counter-increment");
    incrementButton.simulate("click");
    expect(incrementStub.called).to.be.true;
  });

  it("should call onDecrementClicked when - button is clicked", () => {
    const decrementStub = sinon.stub();
    counter = shallow(
      <Counter
        name="Test counter"
        count={0}
        onDecrementClicked={decrementStub}
      />
    );
    const decrementButton = counter.find(".counter-decrement");
    decrementButton.simulate("click");
    expect(decrementStub.called).to.be.true;
  });
});
