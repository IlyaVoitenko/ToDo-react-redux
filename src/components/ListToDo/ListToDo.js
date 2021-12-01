import React from "react";
import { useSelector } from "react-redux";
import { getListToDo } from "./selectors";
import ItemToDo from "./ItemToDo";
import style from "./css/ListToDo.module.css";
import TableHead from "./TableHead";
const ListToDo = () => {
  const listToDo = useSelector(getListToDo);
  return (
    <div>
      <table className={style.tableToDo}>
        <TableHead />
        <tbody>
          {listToDo.map((item, index) => (
            <ItemToDo
              key={index}
              index={index}
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
