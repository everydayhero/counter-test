"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'App',

  getInitialState: function() {
    return {
      total: 0
    }
  },

  render: function() {
    return (
      <div className="App">
         <h1>Counter App</h1>
       </div>
    );
  },
});
