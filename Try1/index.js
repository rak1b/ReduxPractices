const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";
const initialState = {
  count: 0,
  payload: "",
  users: ["Rakib"],
};

const incrementAction = () => {
  console.log("in increment..");
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  console.log("in decrement..");

  return {
    type: DECREMENT,
  };
};

const usersAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
const incrementByValue = (value) => {
  console.log("in increment by value..");

  return {
    type: incrementByValue,
    payload: value,
  };
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case incrementByValue:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(incrementByValue(5));
store.dispatch(incrementByValue(7));
store.dispatch(usersAction("Riddo"));
store.dispatch(usersAction("Ranobi"));
