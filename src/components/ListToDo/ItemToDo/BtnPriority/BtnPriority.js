import React from "react";
import { useDispatch } from "react-redux";
import { addListPriorityToDoItem } from "../../../../store/actionCreators";
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
        dispatch(
          addListPriorityToDoItem({
            nameToDo: nameToDo,
            id: index,
            description: description,
            timeCompletion: timeCompletion,
            category: category,
          })
        );
      }}
    >
      &#9734;
    </button>
  );
};
export default BtnPriority;
