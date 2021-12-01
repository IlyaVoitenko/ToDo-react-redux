import React from "react";
import { useDispatch } from "react-redux";
import { getValue } from "../helpers";
const SelectionsCategories = () => {
  const dispatch = useDispatch();
  return (
    <label>
      you choose a categorie of ToDo :
      <br />
      <select
        onChange={({ target }) =>
          dispatch({
            type: "initialCategoryToDoItem",
            payload: getValue(target),
          })
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
