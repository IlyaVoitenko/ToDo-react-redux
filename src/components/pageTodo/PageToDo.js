import React from "react";
import { useSelector } from "react-redux";
import CreateToDoWindow from "../CreateToDoWindow";
import { getStateWindowCreateToDo } from "./selector";
import BtnAddNewToDo from "../BtnAddNewToDo";
const PageToDo = () => {
  const isOpen = useSelector(getStateWindowCreateToDo);
  return (
    <div>
      <BtnAddNewToDo />
      {isOpen ? <CreateToDoWindow /> : null}
    </div>
  );
};
export default PageToDo;
