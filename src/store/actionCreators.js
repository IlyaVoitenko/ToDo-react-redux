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
  EDIT_SELECTED_TODO,
} from "./actionTypes";
export function editSelectedTodo(payload) {
  return { type: EDIT_SELECTED_TODO, payload };
}
export function updateSelectedItem(payload) {
  return { type: UPDATE_SELECTED, payload };
}
export function initialTimeCompletionToDoItem(payload) {
  return { type: INITIAL_TIME_COMPLETION_TODO, payload };
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
export function initialNameToDoItem(payload) {
  return { type: INITIAL_NAME_TODO, payload };
}
export function initialCategoryToDoItem(payload) {
  return { type: INITIAL_CATEGORY_TODO, payload };
}
export function initialDescriptionToDoItem(payload) {
  return { type: INITIAL_DESCRIPTION_TODO, payload };
}
export function openCreateTodoModal(payload) {
  return { type: OPEN_CREATE_TODO_MODAL, payload };
}
export function isCheckedPutPost(payload) {
  return { type: IS_CHECKED_PUT_POST, payload };
}
export function setTodoList(payload) {
  return { type: SET_TODO_LIST, payload };
}
