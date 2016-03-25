"use strict";

import React from "react";
import {Provider} from "react-redux";

import store from "../../store";
import AddCounterContainer from "../AddCounter/container/AddCounterContainer";
import CounterListContainer from "../Counter/container/CounterListContainer";

export default () => (
  <Provider store={store}>
    <div className="App">
      <h1 className="App__header">Counter App</h1>

      <AddCounterContainer />

      <CounterListContainer />
    </div>
  </Provider>
);
