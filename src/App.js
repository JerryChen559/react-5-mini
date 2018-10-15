import React, { Component } from "react";
//note: import react-redux: in react files (files with jsx)
//note: import redux: in store and reducer files
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";

import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
