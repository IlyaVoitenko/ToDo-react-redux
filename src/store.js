import { createStore } from "redux";
const initialState = {
  isOpen: false,
  listToDo: [],
  nameToDoItem: "",
  categoryToDoItem: "",
  descriptionToDoItem: "",
  timeCompletionToDoItem: "",
  isPriority: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "openWindowCreateToDo":
      return { ...state, isOpen: action.payload };
    case "closeWindowCreateToDo":
      return { ...state, isOpen: action.payload };
    case "createToDoItem":
      return { ...state, listToDo: [...state.listToDo, action.payload] };
    case "initialNameToDoItem":
      return { ...state, nameToDoItem: action.payload };
    case "initialCategoryToDoItem":
      return { ...state, categoryToDoItem: action.payload };
    case "initialDescriptionToDoItem":
      return { ...state, descriptionToDoItem: action.payload };
    case "initialTimeCompletionToDoItem":
      return { ...state, timeCompletionToDoItem: action.payload };
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
