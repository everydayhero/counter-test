"use strict";

import {createStore, combineReducers} from "redux";
import counters from "./reducers/counters";

export const storeInstance = () => {
  return createStore(combineReducers({
    counters
  }));
};

export default storeInstance();
