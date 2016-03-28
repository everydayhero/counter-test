"use strict";

import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import {expect} from "chai";

import {storeInstance} from "../../../store";
import {addCounter} from "../../../actions/counters-actions";
import CounterListContainer from "../container/CounterListContainer";
import CounterList from "../display/CounterList";

// Counter list container is simply a mapStateToProps on
// the display component, so it only needs a full connect test.
describe("CounterListContainer connected component", () => {
  let counterList, store;

  beforeEach(() => {
    store = storeInstance();
    counterList = mount(
      <Provider store={store}>
        <CounterListContainer />
      </Provider>
    );
  });

  it("should have the redux store's counter state on a counter prop", () => {
    store.dispatch(addCounter("First Counter"));
    store.dispatch(addCounter("Second Counter"));
    counterList.update();
    const list = counterList.find(CounterList);
    expect(list.props()).to.have.property("counters");
    expect(list.props().counters).to.deep.equal(store.getState().counters);
  });
});
