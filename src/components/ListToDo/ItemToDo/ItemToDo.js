import React from "react";
import BtnPriority from "./BtnPriority";
import { useDispatch } from "react-redux";
import {
  openCreateTodoModal,
  isCheckedPutPost,
  getSelectedItem,
} from "../../../store";
import { deleteById } from "../../API";
const ItemToDo = ({
  nameToDo,
  description,
  timeCompletion,
  category,
  index,
  isPriority,
  item,
}) => {
  const dispatch = useDispatch();
  const { id } = item;
  return (
    <tr>
      <th>{nameToDo}</th>
      <th>{description}</th>
      <th>{timeCompletion}</th>
      <th>{category}</th>
      <th>
        <BtnPriority
          index={index}
          nameToDo={nameToDo}
          description={description}
          timeCompletion={timeCompletion}
          category={category}
          isPriority={isPriority}
        />
      </th>
      <th>
        <button
          onClick={() => {
            dispatch(openCreateTodoModal(true));
            dispatch(isCheckedPutPost(true));
            dispatch(getSelectedItem({ ...item }));
          }}
        >
          &#9998;
        </button>
      </th>
      <th>
        <button type="submit" onClick={() => deleteById(id)}>
          &#10006;
        </button>
      </th>
    </tr>
  );
};
export default ItemToDo;
