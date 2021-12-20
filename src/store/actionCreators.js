import {
  UPDATE_LIST_TODO,
  UPDATE_SELECTED,
  CLOSE_MODAL_CREATE_TODO,
  CREATE_TODO,
  ADD_LIST_PRIORITY_TODO,
  OPEN_CREATE_TODO_MODAL,
  EDIT_SELECTED_TODO,
  SET_TODO_LIST,
} from './actionTypes';
export function editSelectedTodo(payload) {
  return { type: EDIT_SELECTED_TODO, payload };
}
export function updateSelectedItem(payload) {
  return { type: UPDATE_SELECTED, payload };
}
export function closeModalCreateToDo(payload) {
  return { type: CLOSE_MODAL_CREATE_TODO, payload };
}
export function createToDoItem(payload) {
  return { type: CREATE_TODO, payload };
}
export function addListPriorityToDoItem(payload) {
  return { type: ADD_LIST_PRIORITY_TODO, payload };
}
export function openCreateTodoModal(payload) {
  return { type: OPEN_CREATE_TODO_MODAL, payload };
}
export function setTodoList(payload) {
  return { type: SET_TODO_LIST, payload };
}
export function updateToDoList(payload) {
  return { type: UPDATE_LIST_TODO, payload };
}
