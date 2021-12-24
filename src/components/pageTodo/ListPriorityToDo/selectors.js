export function getListPriorityToDo(state) {
  return state.listToDo.filter((item) => item.isPriority);
}
