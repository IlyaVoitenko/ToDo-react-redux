import { createStore } from "redux";
const initialState = {
  isOpen: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "openWindowCreateToDo":
      return { ...state, isOpen: action.payload };
    case "closeWindowCreateToDo":
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
