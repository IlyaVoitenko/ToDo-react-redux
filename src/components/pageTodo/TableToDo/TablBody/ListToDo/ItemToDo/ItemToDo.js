import React from 'react';
import BtnPriority from './BtnPriority';
import { useDispatch } from 'react-redux';
import { putSelectedItem } from '../../../../CreateToDoModal/helper';
import { deleteTodo } from '../../../../../API';
const ItemToDo = ({ index, item }) => {
  const dispatch = useDispatch();
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
          index={index}
          nameToDo={nameToDo}
          description={descriptionToDo}
          timeCompletion={timeCompletionToDo}
          category={category}
          isPriority={isPriority}
        />
      </th>
      <th>
        <button
          onClick={() =>
            //movie to funck
            putSelectedItem(
              id,
              nameToDo,
              category,
              descriptionToDo,
              timeCompletionToDo,
              dispatch
            )
          }
        >
          &#9998;
        </button>
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
