"use strict";

import {shallow} from "enzyme";
import React from "react";
import {expect} from "chai";
import * as sinon from "sinon";

import AddForm from "../display/AddCounter";

describe("AddCounter display component", () => {
  let addForm, formSubmitStub, counterInputStub;

  beforeEach(() => {
    formSubmitStub = sinon.stub();
    counterInputStub = sinon.stub();
    addForm = shallow(
      <AddForm
        onCounterAdded={formSubmitStub}
        onCounterNameChanged={counterInputStub}
      />
    );
  });

  it("should render as a form", () => {
    expect(addForm.type()).to.equal("form");
    expect(addForm.find("[type=\"submit\"]")).to.have.length(1);
  });

  it("should include a counter name entry field", () => {
    const counterEntry = addForm.find("#counter-name-entry");
    expect(counterEntry).to.have.length(1);
    expect(counterEntry.type()).to.equal("input");
    expect(counterEntry.props().type).to.equal("text");
  });

  it("should prevent page reload on form submit", () => {
    const preventDefault = sinon.stub();
    const event = {preventDefault};

    addForm.simulate("submit", event);
    expect(event.preventDefault.called).to.be.true;
  });

  it("should call onCounterAdded on form submit", () => {
    const preventDefault = sinon.stub();
    const event = {preventDefault};
    addForm.simulate("submit", event);
    expect(formSubmitStub.called).to.be.true;
  });

  it("should call onCounterNameChange on input value change", () => {
    const preventDefault = sinon.stub();
    const event = {preventDefault, target: {
      value: "New Counter"
    }};
    const input = addForm.find("input");
    input.simulate("change", event);
    expect(counterInputStub.calledWith(event)).to.be.true;
  });
  
});
