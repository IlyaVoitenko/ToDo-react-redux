import React from "react";
import { useDispatch } from "react-redux";
import style from "./css/CreateToDoWindow.module.css";
import SelectionsCategories from "./SelectionsCategories";
const CreateToDoWindow = () => {
  const dispatch = useDispatch();
  console.log(style);
  return (
    <div className={style.container}>
      <div className={style.modalWindow}>
        <button
          className={style.btnClose}
          onClick={() =>
            dispatch({
              type: "closeWindowCreateToDo",
              payload: false,
            })
          }
        >
          &#10006;
        </button>
        <input className={style.nameToDo} placeholder="name of ToDo"></input>
        <input placeholder="time of completion"></input>
        <input placeholder="discription"></input>
        <br />
        <SelectionsCategories />
        <br />
        <button className={style.btnCreateToDo}>Create ToDo</button>
      </div>
    </div>
  );
};
export default CreateToDoWindow;
