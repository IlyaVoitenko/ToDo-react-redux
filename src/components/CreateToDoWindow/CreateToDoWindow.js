import React from "react";
import style from "./css/CreateToDoWindow.module.css";
import { useDispatch, useSelector } from "react-redux";
import SelectionsCategories from "./SelectionsCategories";
import { getValue } from "./helpers";
import {
  getIsPriority,
  getNameToDoItem,
  getCategoryToDoItem,
  getDescriptionToDoItem,
  getTimeCompletionToDoItem,
} from "./selectors";
import {
  initialTimeCompletionToDoItem,
  initialNameToDoItem,
  closeModalCreateToDo,
  initialDescriptionToDoItem,
  createToDoItem,
} from "../../store";
const CreateToDoWindow = () => {
  const dispatch = useDispatch();
  const isPriority = useSelector(getIsPriority);
  const nameToDoItem = useSelector(getNameToDoItem);
  const categoryToDoItem = useSelector(getCategoryToDoItem);
  const descriptionToDoItem = useSelector(getDescriptionToDoItem);
  const timeCompletionToDoItem = useSelector(getTimeCompletionToDoItem);
  return (
    <div className={style.container}>
      <div className={style.modalWindow}>
        <button
          className={style.btnClose}
          onClick={() => dispatch(closeModalCreateToDo(false))}
        >
          &#10006;
        </button>
        <input
          className={style.nameToDo}
          placeholder="name of ToDo"
          onChange={({ target }) =>
            dispatch(initialNameToDoItem(getValue(target)))
          }
        ></input>
        <input
          placeholder="time of completion"
          onChange={({ target }) =>
            dispatch(initialTimeCompletionToDoItem(getValue(target)))
          }
        ></input>
        <input
          placeholder="discription"
          onChange={({ target }) =>
            dispatch(initialDescriptionToDoItem(getValue(target)))
          }
        ></input>
        <br />
        <SelectionsCategories />
        <br />
        <button
          className={style.btnCreateToDo}
          onClick={() =>
            dispatch(
              createToDoItem({
                nameToDo: nameToDoItem,
                descriptionToDo: descriptionToDoItem,
                timeCompletionToDo: timeCompletionToDoItem,
                category: categoryToDoItem,
                isPriority: isPriority,
              })
            )
          }
        >
          Create ToDo
        </button>
      </div>
    </div>
  );
};
export default CreateToDoWindow;
