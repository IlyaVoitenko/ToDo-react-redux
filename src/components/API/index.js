import axios from 'axios';
import { setTodoList, updateToDoList } from '../../store/actionCreators';

const baseURL = `http://localhost:3001/todos`;
export function getTodos() {
  return function (dispatch) {
    axios.get(`${baseURL}`).then((res) => {
      return dispatch(setTodoList(res.data));
    });
  };
}
export function putTodo(
  id,
  name,
  description,
  timeCompletion,
  category,
  priority
) {
  return (dispatch) => {
    axios
      .put(`${baseURL}/${id}`, {
        nameToDo: name,
        descriptionToDo: description,
        timeCompletionToDo: timeCompletion,
        category: category,
        isPriority: priority,
      })
      .then(() => dispatch(getTodos()))
      .catch((err) => console.log(`error : ${err}`));
  };
}
export function postNewTodo(
  name,
  description,
  timeCompletion,
  category,
  priority
) {
  return function (dispatch) {
    axios
      .post(`${baseURL}`, {
        nameToDo: name,
        descriptionToDo: description,
        timeCompletionToDo: timeCompletion,
        category: category,
        isPriority: priority,
      })
      .then((res) => {
        dispatch(updateToDoList({ ...res.data }));
      })
      .catch((err) => console.log(`error : ${err}`));
  };
}

export function deleteTodo(id) {
  return axios.delete(`http://localhost:3001/todos/${id}`);
}
