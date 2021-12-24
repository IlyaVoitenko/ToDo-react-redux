import React from 'react';
import { useDispatch } from 'react-redux';
import { putTodo } from '../../../../../../API';
const BtnPriority = ({
  nameToDo,
  id,
  description,
  timeCompletion,
  category,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(
          putTodo(id, nameToDo, description, timeCompletion, category, true)
        );
      }}
    >
      &#9734;
    </button>
  );
};
export default BtnPriority;
