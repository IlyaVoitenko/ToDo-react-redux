import React from "react";
import { useSelector } from "react-redux";
import style from "./css/ListPriorityToDo.module.css";
import TableHead from "../ListToDo/TableHead";
import { getListPriorityToDo } from "./selectors";
const ListPriorityToDo = () => {
  const listPriorityToDo = useSelector(getListPriorityToDo);
  return (
    <table className={style.tablePriorityList}>
      <TableHead />
      <tbody>
        {listPriorityToDo.map((toDoPriorityItem, index) => {
          //all element in maps should be inside separate component
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
