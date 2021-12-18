import {
  UPDATE_SELECTED,
  CLOSE_MODAL_CREATE_TODO,
  CREATE_TODO,
  ADD_LIST_PRIORITY_TODO,
  OPEN_CREATE_TODO_MODAL,
  SET_TODO_LIST,
} from './actionTypes';
const initialState = {
  isOpen: false,
  listToDo: [],
  listPriorityToDo: [],
  isPriority: false,
  selectedItem: {
    id: '',
    nameToDoItem: '',
    categoryToDoItem: '',
    descriptionToDoItem: '',
    timeCompletionToDoItem: '',
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED:
      return {
        ...state,
        selectedItem: { ...state.selectedItem, ...action.payload },
      };
    case OPEN_CREATE_TODO_MODAL:
      return { ...state, isOpen: action.payload };
    case CLOSE_MODAL_CREATE_TODO:
      return { ...state, isOpen: action.payload };
    case CREATE_TODO:
      return { ...state, listToDo: [...state.listToDo, action.payload] };
    case ADD_LIST_PRIORITY_TODO:
      return {
        ...state,
        listPriorityToDo: [...state.listPriorityToDo, action.payload],
      };
    case SET_TODO_LIST: {
      return { ...state, listToDo: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;
