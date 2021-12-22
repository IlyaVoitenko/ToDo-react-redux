import { Fragment, React } from 'react';
import style from './css/CreateToDoWindow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import SelectionsCategories from './SelectionsCategories';
import { saveTodo } from './helper';
import { getIsPriority, getSelectedItem } from './selectors';
import {
  updateSelectedItem,
  closeModalCreateToDo,
} from '../../../store/actionCreators';

const CreateToDoModal = () => {
  const dispatch = useDispatch();
  const isPriority = useSelector(getIsPriority);
  const selectedItem = useSelector(getSelectedItem);
  const {
    id,
    nameToDoItem,
    timeCompletionToDoItem,
    descriptionToDoItem,
    categoryToDoItem,
  } = selectedItem;
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
          value={nameToDoItem}
          placeholder="name of ToDo"
          onChange={({ target }) => {
            dispatch(updateSelectedItem({ nameToDoItem: target.value }));
          }}
        ></input>
        <input
          value={timeCompletionToDoItem}
          placeholder="time of completion"
          onChange={({ target }) =>
            dispatch(
              updateSelectedItem({ timeCompletionToDoItem: target.value })
            )
          }
        ></input>
        <input
          value={descriptionToDoItem}
          placeholder="discription"
          onChange={({ target }) =>
            dispatch(updateSelectedItem({ descriptionToDoItem: target.value }))
          }
        ></input>
        <br />
        <SelectionsCategories categoryToDoItem={categoryToDoItem} />
        <br />
        <button
          type="submit"
          className={style.btnCreateToDo}
          onClick={() =>
            dispatch(
              saveTodo(
                id,
                nameToDoItem,
                timeCompletionToDoItem,
                descriptionToDoItem,
                categoryToDoItem,
                isPriority
              )
            )
          }
        >
          Create ToDo
        </button>
      </div>
    </div>
  );
};
export default CreateToDoModal;
