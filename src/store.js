import { createStore } from "redux";
const initialState = {
  isOpen: false,
  listToDo: [],
  listPriorityToDo: [],
  nameToDoItem: "",
  categoryToDoItem: "",
  descriptionToDoItem: "",
  timeCompletionToDoItem: "",
  isPriority: false,
};
const OPEN_CREATE_TODO_MODAL = "openWindowCreateToDo";
const SET_TODO_LIST = "setTodoList";
const INITIAL_TIME_COMPLETION_TODO_ITEM = "initialTimeCompletionToDoItem";
const CLOSE_MODAL_CREATE_TODO = "closeModalCreateToDo";
const CREATE_TODO_ITEM = "createToDoItem";
const ADD_LIST_PRIORITY_TODO_ITEM = "addListPriorityToDoItem";
const INITIAL_NAME_TODO_ITEM = "initialNameToDoItem";
const INITIAL_CATEGORY_TODO_ITEM = "initialCategoryToDoItem";
const INITIAL_DESCRIPTION_TODO_ITEM = "initialDescriptionToDoItem";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // move all action.types to variables
    // and move all dispatch from code to actionCreators
    case OPEN_CREATE_TODO_MODAL:
      return { ...state, isOpen: action.payload };
    case SET_TODO_LIST: {
      return { ...state, listToDo: action.payload };
    }
    case CLOSE_MODAL_CREATE_TODO:
      return { ...state, isOpen: action.payload };
    case CREATE_TODO_ITEM:
      return { ...state, listToDo: [...state.listToDo, action.payload] };
    case ADD_LIST_PRIORITY_TODO_ITEM:
      return {
        ...state,
        listPriorityToDo: [...state.listPriorityToDo, action.payload],
      };
    case INITIAL_NAME_TODO_ITEM:
      return { ...state, nameToDoItem: action.payload };
    case INITIAL_CATEGORY_TODO_ITEM:
      return { ...state, categoryToDoItem: action.payload };
    case INITIAL_DESCRIPTION_TODO_ITEM:
      return { ...state, descriptionToDoItem: action.payload };
    case INITIAL_TIME_COMPLETION_TODO_ITEM:
      return { ...state, timeCompletionToDoItem: action.payload };
    default:
      return state;
  }
};
export function initialTimeCompletionToDoItem(payload) {
  return { type: INITIAL_TIME_COMPLETION_TODO_ITEM, payload };
}
export function closeModalCreateToDo(payload) {
  return { type: CLOSE_MODAL_CREATE_TODO, payload };
}
export function createToDoItem(payload) {
  return { type: CREATE_TODO_ITEM, payload };
}
export function addListPriorityToDoItem(payload) {
  return { type: ADD_LIST_PRIORITY_TODO_ITEM, payload };
}
export function initialNameToDoItem(payload) {
  return { type: INITIAL_NAME_TODO_ITEM, payload };
}
export function initialCategoryToDoItem(payload) {
  return { type: INITIAL_CATEGORY_TODO_ITEM, payload };
}
export function initialDescriptionToDoItem(payload) {
  return { type: INITIAL_DESCRIPTION_TODO_ITEM, payload };
}
export function openCreateTodoModal(payload) {
  return { type: OPEN_CREATE_TODO_MODAL, payload };
}

export function setTodoList(payload) {
  return { type: SET_TODO_LIST, payload };
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
