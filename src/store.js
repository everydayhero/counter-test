"use strict";

import {createStore, combineReducers} from "redux";
import counters from "./reducers/counters";

export default createStore(combineReducers({
  counters
}));
