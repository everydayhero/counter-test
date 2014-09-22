/** @jsx react.DOM */
"use strict";

var react     = require('react');

module.exports = react.createClass({
  displayName: 'App',

  getInitialState: function() {
    return {
      total: 0,
    }
  },

  render: function() {
    return <div className="App">
             <h1>Counter App</h1>
           </div>;
  },
});
