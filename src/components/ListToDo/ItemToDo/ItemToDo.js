import React from "react";
import BtnPriority from "./BtnPriority";
const ItemToDo = ({
  nameToDo,
  description,
  timeCompletion,
  category,
  index,
  isPriority,
}) => {
  return (
    <tr>
      <th>{nameToDo}</th>
      <th>{description}</th>
      <th>{timeCompletion}</th>
      <th>{category}</th>
      <th>
        <BtnPriority
          index={index}
          nameToDo={nameToDo}
          description={description}
          timeCompletion={timeCompletion}
          category={category}
          isPriority={isPriority}
        />
      </th>
    </tr>
  );
};
export default ItemToDo;
