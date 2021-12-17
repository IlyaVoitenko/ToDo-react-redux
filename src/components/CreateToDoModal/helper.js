import { postNewTodo, putTodo } from '../API';
import {
  openCreateTodoModal,
  isCheckedPutPost,
  updateSelectedItem,
} from '../../store/actionCreators';
export function putSelectedItem(
  id,
  nameToDo,
  category,
  descriptionToDo,
  timeCompletionToDo,
  dispatch
) {
  dispatch(openCreateTodoModal(true));
  dispatch(isCheckedPutPost(true));
  dispatch(
    updateSelectedItem({
      id: id,
      nameToDoItem: nameToDo,
      categoryToDoItem: category,
      descriptionToDoItem: descriptionToDo,
      timeCompletionToDoItem: timeCompletionToDo,
    })
  );
}
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
