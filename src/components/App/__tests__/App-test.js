"use strict";

import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import App from "../";

describe("App", function() {
  let component;

  beforeEach(function() {
    component = shallow(<App/>);
  });

  it("should render the App header", function() {
    const header = component.find("h1");

    expect(header.text()).to.contain("Counter App");
  });
});
