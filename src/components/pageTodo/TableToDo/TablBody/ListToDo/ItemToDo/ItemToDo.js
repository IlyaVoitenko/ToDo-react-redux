import React from 'react';
import BtnPriority from './BtnPriority';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../../../API';
import {
  openCreateTodoModal,
  updateSelectedItem,
} from '../../../../../../store/actionCreators';
const ItemToDo = ({ item }) => {
  const dispatch = useDispatch();

  function editToDo() {
    dispatch(openCreateTodoModal(true));
    dispatch(
      updateSelectedItem({
        id: id,
        nameToDoItem: nameToDo,
        categoryToDoItem: category,
        descriptionToDoItem: descriptionToDo,
        timeCompletionToDoItem: timeCompletionToDo,
        isPriority: isPriority,
      })
    );
  }
  const {
    id,
    isPriority,
    category,
    timeCompletionToDo,
    descriptionToDo,
    nameToDo,
  } = item;

  return (
    <tr>
      <th>{nameToDo}</th>
      <th>{descriptionToDo}</th>
      <th>{timeCompletionToDo}</th>
      <th>{category}</th>
      <th>
        <BtnPriority
          id={id}
          nameToDo={nameToDo}
          description={descriptionToDo}
          timeCompletion={timeCompletionToDo}
          category={category}
          isPriority={isPriority}
        />
      </th>
      <th>
        <button onClick={() => editToDo()}>&#9998;</button>
      </th>
      <th>
        <form>
          <button type="submit" onClick={() => deleteTodo(id)}>
            &#10006;
          </button>
        </form>
      </th>
    </tr>
  );
};
export default ItemToDo;
