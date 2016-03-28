"use strict";

import {jsdom} from "jsdom";

const testdom = (markup) => {
  if (typeof document !== "undefined") {
    return;
  }

  global.document = jsdom(markup || "");
  global.window = document.defaultView;
  global.navigator = {
    userAgent: "node.js"
  };
};

export default testdom("<!doctype html><html><body></body></html>");
