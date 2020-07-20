import React from "react";
import ReactDOM from "react-dom";
// import {GlobalStyle} from  "./style.js"
// import "./style.js";
import GlobalStyle from "./static/iconfont/iconfont"
import App from "./App";
import store from './store/index'
import {Provider} from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>,
  document.getElementById("root")
);
