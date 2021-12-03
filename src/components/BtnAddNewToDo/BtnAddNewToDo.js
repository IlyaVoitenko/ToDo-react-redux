import React from "react";
import { useDispatch } from "react-redux";
import { openCreateTodoModal, isCheckedPutPost } from "../../store";

const BtnAddNewToDo = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(openCreateTodoModal(true));
        dispatch(isCheckedPutPost(false));
      }}
    >
      Create ToDo Item
    </button>
  );
};
export default BtnAddNewToDo;
