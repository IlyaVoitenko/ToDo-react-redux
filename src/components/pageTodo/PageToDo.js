import React from "react";
import { useSelector } from "react-redux";
import CreateToDoWindow from "../CreateToDoWindow";
import { getStateWindowCreateToDo } from "./selector";
import BtnAddNewToDo from "../BtnAddNewToDo";
import ListToDo from "../ListToDo";
const PageToDo = () => {
  const isOpen = useSelector(getStateWindowCreateToDo);
  return (
    <div>
      <BtnAddNewToDo />
      {isOpen ? <CreateToDoWindow /> : null}
      <ListToDo />
    </div>
  );
};
export default PageToDo;
