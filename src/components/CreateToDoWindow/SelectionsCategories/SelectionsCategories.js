import React from "react";
import { useDispatch } from "react-redux";
import { getValue } from "../helpers";
import { initialCategoryToDoItem } from "../../../store";
const SelectionsCategories = ({ checkedPutOrPost, defaultCategory }) => {
  const dispatch = useDispatch();
  return (
    <label>
      you choose a categorie of ToDo :
      <br />
      <select
        defaultValue={checkedPutOrPost ? defaultCategory : null}
        onChange={({ target }) =>
          dispatch(initialCategoryToDoItem(getValue(target)))
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
