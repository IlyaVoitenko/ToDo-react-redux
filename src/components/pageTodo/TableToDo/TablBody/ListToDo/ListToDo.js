import React from 'react';
import ItemToDo from './ItemToDo';
import { useSelector } from 'react-redux';
import { getListToDo } from '../selectors';
const ListToDo = () => {
  const listToDo = useSelector(getListToDo);
  return listToDo.map((item, index) => (
    <ItemToDo item={item} key={index} index={index} />
  ));
};
export default ListToDo;
