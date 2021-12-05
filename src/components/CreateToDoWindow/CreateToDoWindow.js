import React from 'react';
import style from './css/CreateToDoWindow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import SelectionsCategories from './SelectionsCategories';
import { getValue } from './helpers';
import { post, put } from '../API';
import {
  getIsPriority,
  getNameToDoItem,
  getCategoryToDoItem,
  isCheckedPutPost,
  getSelectedItem,
  getDescriptionToDoItem,
  getTimeCompletionToDoItem,
} from './selectors';
import {
  initialTimeCompletionToDoItem,
  initialNameToDoItem,
  closeModalCreateToDo,
  initialDescriptionToDoItem,
} from '../../store';

const CreateToDoWindow = () => {
  const dispatch = useDispatch();
  const isPriority = useSelector(getIsPriority);
  const nameToDoItem = useSelector(getNameToDoItem);
  const selectedItem = useSelector(getSelectedItem);
  //isNewTodo
  const checkedPutOrPost = useSelector(isCheckedPutPost);
  const categoryToDoItem = useSelector(getCategoryToDoItem);
  const descriptionToDoItem = useSelector(getDescriptionToDoItem);
  const timeCompletionToDoItem = useSelector(getTimeCompletionToDoItem);
  const {
    id,
    category,
    descriptionToDo,
    nameToDo,
    timeCompletionToDo,
  } = selectedItem;

  return (
    <div className={style.container}>
      <form>
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
            defaultValue={checkedPutOrPost ? nameToDo : null}
            onChange={({ target }) =>
              dispatch(initialNameToDoItem(getValue(target)))
            }
          ></input>
          <input
            placeholder="time of completion"
            defaultValue={checkedPutOrPost ? timeCompletionToDo : null}
            onChange={({ target }) =>
              dispatch(initialTimeCompletionToDoItem(getValue(target)))
            }
          ></input>
          <input
            placeholder="discription"
            value={checkedPutOrPost ? descriptionToDo : null}
            onChange={({ target }) =>
              dispatch(initialDescriptionToDoItem(getValue(target)))
            }
          ></input>
          <br />
          <SelectionsCategories
            checkedPutOrPost={checkedPutOrPost}
            defaultCategory={category}
          />
          <br />
          {checkedPutOrPost ? (
            <button
              type="submit"
              className={style.btnCreateToDo}
              onClick={() =>
                put(
                  id,
                  nameToDoItem,
                  descriptionToDoItem,
                  timeCompletionToDoItem,
                  categoryToDoItem,
                  isPriority,
                )
              }
            >
              Create ToDo
            </button>
          ) : (
            <button
              className={style.btnCreateToDo}
              onClick={() =>
                post(
                  nameToDoItem,
                  descriptionToDoItem,
                  timeCompletionToDoItem,
                  categoryToDoItem,
                  isPriority,
                )
              }
            >
              Create ToDo
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default CreateToDoWindow;
