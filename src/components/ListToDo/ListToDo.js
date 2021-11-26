import React from "react";
import { useSelector } from "react-redux";
import { getListToDo } from "./selectors";
import ItemToDo from "./ItemToDo";
import style from "./css/ListToDo.module.css";
const ListToDo = () => {
  const listToDo = useSelector(getListToDo);
  return (
    <div>
      <table className={style.tableToDo}>
        <thead>
          <tr>
            <th>Name todo</th>
            <th>Description</th>
            <th> TimeCompletion</th>
            <th> Category</th>
            <th> Priority</th>
          </tr>
        </thead>
        <tbody>
          {listToDo.map((item, index) => (
            <ItemToDo
              key={index}
              nameToDo={item.nameToDo}
              description={item.descriptionToDo}
              timeCompletion={item.timeCompletionToDo}
              category={item.category}
              isPriority={item.isPriority}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListToDo;
