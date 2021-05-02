import * as __SNOWPACK_ENV__ from '../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../snowpack/pkg/react";
import ReactDOM from "../snowpack/pkg/react-dom";
import App from "./App.js";
import "./index.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
