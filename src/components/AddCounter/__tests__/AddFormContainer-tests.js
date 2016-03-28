"use strict";

import chai, {expect} from "chai";
import sinonChai from "sinon-chai";
import React from "react";
import * as sinon from "sinon";
import {Provider} from "react-redux";
import {mount, shallow} from "enzyme";

chai.use(sinonChai);
import store from "../../../store";
import AddCounter from "../display/AddCounter";
import Connected, {AddCounterContainer} from "../container/AddCounterContainer";

describe("Add Counter container component", () => {
  let addForm, addCounterStub, instance;

  beforeEach(() => {
    addCounterStub = sinon.stub();
    addForm = shallow(
      <AddCounterContainer
        addCounter={addCounterStub}
      />
    );
    instance = addForm.instance();
  });

  it("should have a handleCounterNameChange method", () => {
    expect(instance).to.respondTo("handleCounterNameChange");
  });

  it("should have a handleCounterAdded method", () => {
    expect(instance).to.respondTo("handleCounterAdded");
  });

  it("should render an AddCounter display component", () => {
    expect(addForm.find(AddCounter)).to.have.length(1);
  });

  it("should attach handleCounterAdded to the AddCounter", () => {
    const displayComponent = addForm.find(AddCounter);
    expect(displayComponent.props().onCounterAdded)
      .to.equal(instance.handleCounterAdded);
  });

  it("should attach handleCounterNameChange to the AddCounter", () => {
    const displayComponent = addForm.find(AddCounter);
    expect(displayComponent.props().onCounterNameChanged)
      .to.equal(instance.handleCounterNameChange);
  });

  it("should cache the value of the event target in handleCounterNameChange", () => {
    expect(instance.counterName).to.be.undefined;
    instance.handleCounterNameChange("New value");
    expect(instance.counterName).to.equal("New value");
  });

  it("handleCounterAdded call addCounter prop with counter name", () => {
    instance.handleCounterNameChange("New value");
    instance.handleCounterAdded();
    expect(addCounterStub).to.be.calledWith("New value");
  });

  describe("Connected component", () => {
    let addForm;

    beforeEach(() => {
      sinon.stub(store, "dispatch");
      addForm = mount(
        <Provider store={store}>
          <Connected />
        </Provider>
      );
    });

    afterEach(() => {
      store.dispatch.restore();
    });

    it("should dispatch ADD_COUNTER when adding counter", () => {
      const addButton = addForm.find("form");
      addButton.simulate("submit");
      expect(store.dispatch).to.be.called;
      expect(store.dispatch.firstCall.args[0].type).to.equal("ADD_COUNTER");
    });

    it("should dispatch ADD_COUNTER with the counter input value", () => {
      const nameInput = addForm.find("#counter-name-entry");
      nameInput.get(0).value = "Test name";
      nameInput.simulate("change");
      const addButton = addForm.find("form");
      addButton.simulate("submit");
      expect(store.dispatch).to.be.calledWith({
        type: "ADD_COUNTER",
        counter: {
          name: "Test name"
        }
      });
    });
  });
});
