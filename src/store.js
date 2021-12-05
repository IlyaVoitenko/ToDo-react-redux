import { createStore } from 'redux';
const initialState = {
  isOpen: false,
  listToDo: [],
  listPriorityToDo: [],
  nameToDoItem: '',
  categoryToDoItem: '',
  descriptionToDoItem: '',
  timeCompletionToDoItem: '',
  isPriority: false,
  isCheckedPutPost: false,
  selectedItem: {},
};
const OPEN_CREATE_TODO_MODAL = 'openWindowCreateToDo';
const SET_TODO_LIST = 'setTodoList';
const INITIAL_TIME_COMPLETION_TODO_ITEM = 'initialTimeCompletionToDoItem';
const CLOSE_MODAL_CREATE_TODO = 'closeModalCreateToDo';
const CREATE_TODO_ITEM = 'createToDoItem';
const ADD_LIST_PRIORITY_TODO_ITEM = 'addListPriorityToDoItem';
const INITIAL_NAME_TODO_ITEM = 'initialNameToDoItem';
const INITIAL_CATEGORY_TODO_ITEM = 'initialCategoryToDoItem';
const INITIAL_DESCRIPTION_TODO_ITEM = 'initialDescriptionToDoItem';
const IS_CHECKED_PUT_POST = 'checkedPutPost';
const GET_SELECTED_ITEM = 'getSelectedItem';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // move all action.types to variables
    // and move all dispatch from code to actionCreators
    // {name: e.target.value} {description: e.target.value}
    // case UPDATE_SELECTED_TODO:
    //   return {
    //     ...state,
    //     selectedItem: { ...state.selecteItem, ...action.payload },
    //   };

    case GET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: { ...state.selecteItem, ...action.payload },
      };
    case IS_CHECKED_PUT_POST:
      return { ...state, isCheckedPutPost: action.payload };
    case OPEN_CREATE_TODO_MODAL:
      return { ...state, isOpen: true };
    // case EDIT_TODO: {
    //   return { ...state, isOpen: true, selectedTodo: action.payload };
    // }
    case SET_TODO_LIST: {
      return { ...state, listToDo: action.payload };
    }
    case CLOSE_MODAL_CREATE_TODO:
      return { ...state, isOpen: true };
    case CREATE_TODO_ITEM:
      return { ...state, listToDo: [...state.listToDo, action.payload] };
    case ADD_LIST_PRIORITY_TODO_ITEM:
      return {
        ...state,
        listPriorityToDo: [...state.listPriorityToDo, action.payload],
      };
    //remove ITEMS. try to remove all todo related state to selectedTodo
    //you will have state for selectedTodo, then put it or post to server, and clean after that
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
export function getSelectedItem(payload) {
  return { type: GET_SELECTED_ITEM, payload };
}
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
export function openCreateTodoModal() {
  return { type: OPEN_CREATE_TODO_MODAL };
}
export function isCheckedPutPost(payload) {
  return { type: IS_CHECKED_PUT_POST, payload };
}
export function setTodoList(payload) {
  return { type: SET_TODO_LIST, payload };
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
