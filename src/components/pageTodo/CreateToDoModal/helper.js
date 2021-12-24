import { postNewTodo, putTodo } from '../../API';
export function saveTodo(
  id,
  nameToDoItem,
  descriptionToDoItem,
  timeCompletionToDoItem,
  categoryToDoItem,
  isPriority
) {
  if (id !== '') {
    return putTodo(
      id,
      nameToDoItem,
      descriptionToDoItem,
      timeCompletionToDoItem,
      categoryToDoItem,
      isPriority
    );
  }
  return postNewTodo(
    nameToDoItem,
    descriptionToDoItem,
    timeCompletionToDoItem,
    categoryToDoItem,
    isPriority
  );
}
