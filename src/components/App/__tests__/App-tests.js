"use strict";

import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import {Provider} from "react-redux";

import App from "../";
import store from "../../../store";

describe("App", function() {
  let component;

  beforeEach(function() {
    component = shallow(<App/>);
  });

  it("should render the App header", function() {
    const header = component.find("h1");

    expect(header.text()).to.contain("Counter App");
  });

  it("should wrap the top-level components in a Redux Provider", () => {
    expect(component.is(Provider)).to.equal(true);
  });

  it("should set the application redux store to the Provider's prop", () => {
    expect(component.props().store).to.equal(store);
  });
});
