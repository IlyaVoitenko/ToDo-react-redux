import React from 'react';
import { useDispatch } from 'react-redux';
import { openCreateTodoModal } from '../../store/actionCreators';

const BtnAddNewToDo = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(openCreateTodoModal(true))}>
      Create ToDo Item
    </button>
  );
};
export default BtnAddNewToDo;
