import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedItem } from '../../../store/actionCreators';
const SelectionsCategories = ({ categoryToDoItem }) => {
  const dispatch = useDispatch();
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
        <option></option>
        <option value="work">work</option>
        <option value="home">home</option>
        <option value="travel">travel</option>
        <option value="learning">learning</option>
      </select>
    </label>
  );
};
export default SelectionsCategories;
