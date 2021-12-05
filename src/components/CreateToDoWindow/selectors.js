export function getNameToDoItem(state) {
  return state.nameToDoItem;
}
export function getSelectedItem(state) {
  return state.selectedItem;
}
export function getDescriptionToDoItem(state) {
  return state.descriptionToDoItem;
}
export function getTimeCompletionToDoItem(state) {
  return state.timeCompletionToDoItem;
}
export function getIsPriority(state) {
  return state.isPriority;
}
export function getCategoryToDoItem(state) {
  return state.categoryToDoItem;
}
//think about present id or not
export function isCheckedPutPost(state) {
  return state.isCheckedPutPost;
}

// function saveTodo(todo) {
//   if (todo.id) {
//     put()
//   } else {
//     post()
//   }

// }
