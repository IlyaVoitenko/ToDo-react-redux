import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedItem } from '../../../../store/actionCreators';
const SelectionsCategories = ({ categoryToDoItem }) => {
  const dispatch = useDispatch();
  //options to array of options
  let options = ['work', 'home', 'travel', 'learning'];
  return (
    <label>
      you choose a categorie of ToDo :
      <br />
      <select
        value={categoryToDoItem}
        onChange={({ target }) =>
          dispatch(updateSelectedItem({ categoryToDoItem: target.value }))
        }
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
};
export default SelectionsCategories;
