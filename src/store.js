// step one is to create the store

import { createStore } from "redux";

import counter from "./ducks/counterReducer";

const store = createStore(counter);

export default store;
