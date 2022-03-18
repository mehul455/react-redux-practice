// import { createStore } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reduxdark/ReducerDark/index' 
var middlewares = applyMiddleware(thunk);
// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
  // load string from localStarage and convert into an Object
  // invalid output must be undefined
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
// const store = createStore(rootReducer, middlewares);
const store = createStore(rootReducer,loadFromLocalStorage(),middlewares)
store.subscribe(() => saveToLocalStorage(store.getState()));
// const store = createStore(rootReducer);  //all states in rootReducer

export default store;