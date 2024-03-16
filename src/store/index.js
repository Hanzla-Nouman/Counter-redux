import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "+") {
    return { counter: store.counter + 1, privacy: store.privacy };
  } else if (action.type === "-") {
    return {...store, counter: store.counter - 1 };  // or can use spread operator
  } else if (action.type === "ADD") {
    return {
      counter: store.counter + Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "SUB") {
    return {
      counter: store.counter - Number(action.payload.num),
      privacy: store.privacy,
    };
  } else if (action.type === "PRIVACY") {
    return { privacy: !store.privacy ,counter: store.counter};
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
