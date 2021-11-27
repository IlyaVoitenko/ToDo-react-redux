import React from "react";
import { useDispatch } from "react-redux";
const BtnPriority = ({
  nameToDo,
  index,
  description,
  timeCompletion,
  category,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch({
          type: "addListPriorityToDoItem",
          //добавлять элементы на пряиую
          payload: {
            nameToDo: nameToDo,
            id: index,
            description: description,
            timeCompletion: timeCompletion,
            category: category,
          },
        });
      }}
    >
      &#9734;
    </button>
  );
};
export default BtnPriority;
