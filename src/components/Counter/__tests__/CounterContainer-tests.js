"use strict";

import React from "react";
import {shallow, mount} from "enzyme";
import {Provider} from "react-redux";
import * as sinon from "sinon";
import chai, {expect} from "chai";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

import {addCounter, incrementCounter} from "../../../actions/counters-actions";
import {storeInstance} from "../../../store";
import Counter from "../display/Counter";
import Connected, {CounterContainer} from "../container/CounterContainer";

describe("Counter container component", () => {
  let counter, incrementCounterStub, decrementCounterStub;

  beforeEach(() => {
    incrementCounterStub = sinon.stub();
    decrementCounterStub = sinon.stub();
    counter = shallow(
      <CounterContainer
        key="Test counter"
        name="Test counter"
        count={3}
        index={0}
        incrementCounter={incrementCounterStub}
        decrementCounter={decrementCounterStub}
      />
    );
  });

  it("should render a Counter display component", () => {
    const displayCounter = counter.find(Counter);
    expect(displayCounter).to.have.length(1);
  });

  it("should pass display properties on to its display component", () => {
    const displayCounter = counter.find(Counter).at(0);
    const props = displayCounter.props();
    expect(props.name).to.equal("Test counter");
    expect(props.count).to.equal(3);
  });

  it("should have a handleCounterIncrement method", () => {
    const instance = counter.instance();
    expect(instance).to.respondTo("handleCounterIncrement");
  });

  it("should have a handleCounterDecrement method", () => {
    const instance = counter.instance();
    expect(instance).to.respondTo("handleCounterDecrement");
  });

  it("should attach handleCounterIncrement to display component", () => {
    const instance = counter.instance();
    const displayProps = counter.find(Counter).at(0).props();
    expect(displayProps.onIncrementClicked)
      .to.equal(instance.handleCounterIncrement);
  });

  it("should attach handleCounterDecrement to display component", () => {
    const instance = counter.instance();
    const displayProps = counter.find(Counter).at(0).props();
    expect(displayProps.onDecrementClicked)
      .to.equal(instance.handleCounterDecrement);
  });

  it("should incrementCounter with the index on handleCounterIncrement", () => {
    const instance = counter.instance();
    instance.handleCounterIncrement();
    expect(incrementCounterStub).to.be.calledWith(0);
    counter.setProps({index: 2});
    counter.update();
    instance.handleCounterIncrement();
    expect(incrementCounterStub).to.be.calledWith(2);
  });

  it("should decrementCounter with the index on handleCounterDecrement", () => {
    const instance = counter.instance();
    instance.handleCounterDecrement();
    expect(decrementCounterStub).to.be.calledWith(0);
    counter.setProps({index: 2});
    counter.update();
    instance.handleCounterDecrement();
    expect(decrementCounterStub).to.be.calledWith(2);
  });

  describe("Connected component", () => {
    let counter, store;

    beforeEach(() => {
      store = storeInstance();
      store.dispatch(addCounter("Test counter"));
      store.dispatch(addCounter("Other counter"));
      store.dispatch(incrementCounter(1));
      sinon.stub(store, "dispatch");
      counter = mount(
        <Provider store={store}>
          <Connected index={0} />
        </Provider>
      );
    });

    it("should map the contents of counters[index] to props", () => {
      const displayProps = counter.find(Counter).at(0).props();
      expect(displayProps.name).to.equal("Test counter");
      expect(displayProps.count).to.equal(0);
    });

    it("should dispatch INCREMENT_COUNTER on handleCounterIncrement", () => {
      const incrementButton = counter.find(".counter-increment");
      incrementButton.simulate("click");
      expect(store.dispatch).to.be.calledWith({
        type: "INCREMENT_COUNTER",
        index: 0
      });
    });

    it("should dispatch DECREMENT_COUNTER on handleCounterDecrement", () => {
      const incrementButton = counter.find(".counter-decrement");
      incrementButton.simulate("click");
      expect(store.dispatch).to.be.calledWith({
        type: "DECREMENT_COUNTER",
        index: 0
      });
    });
  })
});
