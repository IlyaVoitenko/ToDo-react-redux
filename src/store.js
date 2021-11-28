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
};
const OPEN_CREATE_TODO_MODAL = 'openWindowCreateToDo';
const SET_TODO_LIST = 'setTodoList';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // move all action.types to variables
    // and move all dispatch from code to actionCreators
    case OPEN_CREATE_TODO_MODAL:
      return { ...state, isOpen: action.payload };
    case SET_TODO_LIST: {
      return { ...state, listToDo: action.payload };
    }
    case 'closeWindowCreateToDo':
      return { ...state, isOpen: action.payload };
    case 'createToDoItem':
      return { ...state, listToDo: [...state.listToDo, action.payload] };
    case 'addListPriorityToDoItem':
      return {
        ...state,
        listPriorityToDo: [...state.listPriorityToDo, action.payload],
      };
    case 'initialNameToDoItem':
      return { ...state, nameToDoItem: action.payload };
    case 'initialCategoryToDoItem':
      return { ...state, categoryToDoItem: action.payload };
    case 'initialDescriptionToDoItem':
      return { ...state, descriptionToDoItem: action.payload };
    case 'initialTimeCompletionToDoItem':
      return { ...state, timeCompletionToDoItem: action.payload };
    default:
      return state;
  }
};

export function openCreateTodoModal(payload) {
  return { type: OPEN_CREATE_TODO_MODAL, payload };
}

export function setTodoList(payload) {
  return { type: SET_TODO_LIST, payload };
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
