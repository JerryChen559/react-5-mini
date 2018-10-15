// note: how to know when to make another reducer
// make a new reducer when we have a new controller.
// one reducer per crud or feature.

// npm i redux react-redux

//step two: set up reducers

const initialState = {
  currentValue: 0
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function increment(num) {
  return {
    type: INCREMENT,
    payload: num
  };
}

export function decrement(num) {
  return {
    type: DECREMENT,
    payload: num
  };
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      // es6: return Object.assign({}, state, {currentValue + action.payload})
      // new es8 way below:
      return {
        ...state,
        currentValue: state.currentValue + action.payload
      };
    case DECREMENT:
      return {
        ...state,
        currentValue: state.currentValue - action.payload
      };
    default:
      return state;
  }
}
