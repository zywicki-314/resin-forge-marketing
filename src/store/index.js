import { legacy_createStore } from "redux";

// const redux = require("redux");

const langReducer = (state = { lang: "pl" }, action) => {
  if (action.type === "pl") {
    return {
      lang: "pl",
    };
  }
  if (action.type === "en") {
    return {
      lang: "en",
    };
  }

  return state;
};

const store = legacy_createStore(langReducer);

export default store;
