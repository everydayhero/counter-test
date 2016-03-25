"use strict";

import {shallow} from "enzyme";
import React from "react";
import {expect} from "chai";
import * as sinon from "sinon";

import AddForm from "../display/AddForm";

describe("AddForm display component", () => {
  let addForm, formSubmitStub;

  beforeEach(() => {
    formSubmitStub = sinon.stub();
    addForm = shallow(
      <AddForm
        onFormSubmitted={formSubmitStub}
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

  it("should call onFormSubmitted on form submit", () => {
    const preventDefault = sinon.stub();
    const event = {preventDefault};
    addForm.simulate("submit", event);
    expect(formSubmitStub.called).to.be.true;
  });
});
