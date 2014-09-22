/** @jsx react.DOM */
"use strict";

jest.autoMockOff();

describe('App', function() {
  var react  = require('react/addons');
  var App = require('../index');
  var TestUtils = react.addons.TestUtils;
  var findByType = TestUtils.findRenderedComponentWithType;
  var findByClass = TestUtils.findRenderedDOMComponentWithClass;
  var findByTag = TestUtils.findRenderedDOMComponentWithTag;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(<App/>);
  });

  it('should render the App header', function() {
    var header = findByTag(component, 'h1');

    expect(header.getDOMNode().textContent).toBe('Counter App');
  });
});
