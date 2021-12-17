import React from "react";
import { useDispatch } from "react-redux";
import {
  openCreateTodoModal,
  isCheckedPutPost,
} from "../../store/actionCreators";

const BtnAddNewToDo = () => {
  const dispatch = useDispatch();
  function openModal() {
    dispatch(openCreateTodoModal(true));
    dispatch(isCheckedPutPost(false));
  }
  return <button onClick={() => openModal()}>Create ToDo Item</button>;
};
export default BtnAddNewToDo;
