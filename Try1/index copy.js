const {createStore} = require('redux');

// --------------- 1--------------------------
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
// --------------- 1 --------------------------

// --------------- 2 --------------------------
const initialState = {
  count: 0,
};
// --------------- 2 --------------------------

// --------------- 3 --------------------------

const IncrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const DecrementAction = () => {
  return {
    type: DECREMENT,
  };
};
// --------------- 3 END --------------------------

// --------------- 4 START--------------------------

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};

// --------------- 4 END--------------------------

const store =createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(IncrementAction());
store.dispatch(IncrementAction());
store.dispatch(IncrementAction());
store.dispatch(DecrementAction());