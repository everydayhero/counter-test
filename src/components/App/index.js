"use strict";

import React from "react";
import {Provider} from "react-redux";

import store from "../../store";

export default () => (
  <Provider store={store}>
    <div className="App">
      <h1 className="App__header">Counter App</h1>
    </div>
  </Provider>
);
