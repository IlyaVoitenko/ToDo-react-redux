import React from "react";
import BtnPriority from "./BtnPriority";
const ItemToDo = ({
  nameToDo,
  description,
  timeCompletion,
  category,
  isPriority,
}) => {
  return (
    <tr>
      <th>{nameToDo}</th>
      <th>{description}</th>
      <th>{timeCompletion}</th>
      <th>{category}</th>
      <th>
        <BtnPriority />
      </th>
    </tr>
  );
};
export default ItemToDo;
