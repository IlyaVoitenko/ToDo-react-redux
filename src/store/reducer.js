import {
  UPDATE_SELECTED,
  INITIAL_TIME_COMPLETION_TODO,
  CLOSE_MODAL_CREATE_TODO,
  CREATE_TODO,
  ADD_LIST_PRIORITY_TODO,
  INITIAL_NAME_TODO,
  INITIAL_CATEGORY_TODO,
  INITIAL_DESCRIPTION_TODO,
  OPEN_CREATE_TODO_MODAL,
  IS_CHECKED_PUT_POST,
  SET_TODO_LIST,
} from './actionTypes';
const initialState = {
  isOpen: false,
  listToDo: [],
  listPriorityToDo: [],
  isPriority: false,
  isCheckedPutPost: false,
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
    case IS_CHECKED_PUT_POST:
      return { ...state, isCheckedPutPost: action.payload };
    case OPEN_CREATE_TODO_MODAL:
      return { ...state, isOpen: action.payload };
    case SET_TODO_LIST: {
      return { ...state, listToDo: action.payload };
    }
    case CLOSE_MODAL_CREATE_TODO:
      return { ...state, isOpen: action.payload };
    case CREATE_TODO:
      return { ...state, listToDo: [...state.listToDo, action.payload] };
    case ADD_LIST_PRIORITY_TODO:
      return {
        ...state,
        listPriorityToDo: [...state.listPriorityToDo, action.payload],
      };
    case INITIAL_NAME_TODO:
      return { ...state, nameToDoItem: action.payload };
    case INITIAL_CATEGORY_TODO:
      return { ...state, categoryToDoItem: action.payload };
    case INITIAL_DESCRIPTION_TODO:
      return { ...state, descriptionToDoItem: action.payload };
    case INITIAL_TIME_COMPLETION_TODO:
      return { ...state, timeCompletionToDoItem: action.payload };
    default:
      return state;
  }
};
export default reducer;
