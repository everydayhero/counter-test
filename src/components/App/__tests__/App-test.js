"use strict";

describe('App', function() {
  var App = require('../index');
  var component;

  beforeEach(function() {
    component = renderIntoDocument(<App/>);
  });

  it('should render the App header', function() {
    var header = findByTag(component, 'h1');

    expect(header.getDOMNode().textContent).to.contain('Counter App');
  });
});
