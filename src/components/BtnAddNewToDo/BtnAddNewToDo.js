import React from "react";
import { useDispatch } from "react-redux";
const BtnAddNewToDo = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        dispatch({
          type: "openWindowCreateToDo",
          payload: true,
        })
      }
    >
      Create
    </button>
  );
};
export default BtnAddNewToDo;
