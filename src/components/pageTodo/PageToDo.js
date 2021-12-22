import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CreateToDoWindow from './CreateToDoModal';
import { getStateWindowCreateToDo } from './selector';
import BtnAddNewToDo from '../PageTodo/BtnAddNewToDo';
import TableToDo from './TableToDo';
const PageToDo = () => {
  const isOpen = useSelector(getStateWindowCreateToDo);
  return (
    <Fragment>
      <BtnAddNewToDo />
      {isOpen ? <CreateToDoWindow /> : null}
      <TableToDo />
    </Fragment>
  );
};
export default PageToDo;
