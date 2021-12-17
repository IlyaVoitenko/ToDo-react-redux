import axios from 'axios';
const baseURL = `http://localhost:3001/todos`;
export function getTodos() {
  return axios.get(`${baseURL}`);
}
export function getTodoById(id = '') {
  return axios.get(`${baseURL}/${id}`);
}
export function putTodo(
  id,
  name,
  description,
  timeCompletion,
  category,
  priority
) {
  return axios
    .put(`${baseURL}/${id}`, {
      nameToDo: name,
      descriptionToDo: description,
      timeCompletionToDo: timeCompletion,
      category: category,
      isPriority: priority,
    })
    .catch((err) => console.log(`error : ${err}`));
}
export function postNewTodo(
  name,
  description,
  timeCompletion,
  category,
  priority
) {
  return axios
    .post(`${baseURL}`, {
      nameToDo: name,
      descriptionToDo: description,
      timeCompletionToDo: timeCompletion,
      category: category,
      isPriority: priority,
    })
    .catch((err) => console.log(`error : ${err}`));
}
export function deleteTodo(id) {
  return axios.delete(`http://localhost:3001/todos/${id}`);
}
