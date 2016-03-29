"use strict";

/**
 * This module simply declares action type constants that the action creators
 * and reducers will use to control the state. Declaring them as constants
 * rather than simply using inline strings allows tooling to cut down on
 * runtime errors caused by typos.
 * @module
 */

export const ADD_COUNTER = "ADD_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
