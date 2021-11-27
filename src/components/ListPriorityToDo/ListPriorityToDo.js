import React from "react";
import { useSelector } from "react-redux";
import style from "./css/ListPriorityToDo.module.css";
//import { getListToDo } from "../ListToDo/selectors";
import { getListPriorityToDo } from "./selectors";
const ListPriorityToDo = () => {
  // const listToDo = useSelector(getListToDo);
  const listPriorityToDo = useSelector(getListPriorityToDo);
  return (
    <table className={style.tablePriorityList}>
      <thead>
        <tr>
          <th>nameToDo</th>
          <th>description</th>
          <th>time Completion</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {listPriorityToDo.map((toDoPriorityItem, index) => {
          return (
            <tr key={index}>
              <th>{toDoPriorityItem.nameToDo}</th>
              <th>{toDoPriorityItem.description}</th>
              <th>{toDoPriorityItem.timeCompletion}</th>
              <th>{toDoPriorityItem.category}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ListPriorityToDo;
