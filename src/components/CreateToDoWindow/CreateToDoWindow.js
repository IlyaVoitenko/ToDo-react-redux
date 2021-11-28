import React from 'react';
import style from './css/CreateToDoWindow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import SelectionsCategories from './SelectionsCategories';
import {
  getNameToDo,
  getTimeCompletionToDo,
  getDescriptionToDo,
} from './helpers';
import {
  getIsPriority,
  getNameToDoItem,
  getCategoryToDoItem,
  getDescriptionToDoItem,
  getTimeCompletionToDoItem,
} from './selectors';

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
          onClick={() =>
            dispatch({
              type: 'closeWindowCreateToDo',
              payload: false,
            })
          }
        >
          &#10006;
        </button>
        <input
          className={style.nameToDo}
          placeholder="name of ToDo"
          onChange={({ target }) =>
            dispatch({
              type: 'initialNameToDoItem',
              payload: getNameToDo(target.value),
            })
          }
        ></input>
        <input
          placeholder="time of completion"
          onChange={({ target }) =>
            dispatch({
              type: 'initialTimeCompletionToDoItem',
              payload: getTimeCompletionToDo(target),
            })
          }
        ></input>
        <input
          placeholder="discription"
          onChange={({ target }) =>
            dispatch({
              type: 'initialDescriptionToDoItem',
              payload: getDescriptionToDo(target),
            })
          }
        ></input>
        <br />
        <SelectionsCategories />
        <br />
        <button
          className={style.btnCreateToDo}
          onClick={() =>
            dispatch({
              type: 'createToDoItem',
              payload: {
                nameToDo: nameToDoItem,
                descriptionToDo: descriptionToDoItem,
                timeCompletionToDo: timeCompletionToDoItem,
                category: categoryToDoItem,
                isPriority: isPriority,
              },
            })
          }
        >
          Create ToDo
        </button>
      </div>
    </div>
  );
};
export default CreateToDoWindow;
