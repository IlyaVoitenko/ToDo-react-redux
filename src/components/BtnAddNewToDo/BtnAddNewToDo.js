import React from 'react';
import { useDispatch } from 'react-redux';
import { openCreateTodoModal } from '../../store';

const BtnAddNewToDo = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(openCreateTodoModal(true))}>
      Create ToDo
    </button>
  );
};
export default BtnAddNewToDo;
