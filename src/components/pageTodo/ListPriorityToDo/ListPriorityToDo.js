import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './css/ListPriorityToDo.module.css';
import TableHead from '../TableToDo/TableHead';
import { putTodo } from '../../API';
import { getListPriorityToDo } from './selectors';
const ListPriorityToDo = () => {
  const listPriorityToDo = useSelector(getListPriorityToDo);
  const dispatch = useDispatch();
  return (
    <table className={style.tablePriorityList}>
      <TableHead />
      <tbody>
        {listPriorityToDo.map((toDoPriorityItem) => {
          const {
            id,
            nameToDo,
            descriptionToDo,
            timeCompletionToDo,
            category,
          } = toDoPriorityItem;
          return (
            <tr key={id}>
              <th>{nameToDo}</th>
              <th>{descriptionToDo}</th>
              <th>{timeCompletionToDo}</th>
              <th>{category}</th>
              <th>
                <button
                  onClick={() =>
                    dispatch(
                      putTodo(
                        id,
                        nameToDo,
                        descriptionToDo,
                        timeCompletionToDo,
                        category,
                        false
                      )
                    )
                  }
                >
                  &#10006;
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ListPriorityToDo;
