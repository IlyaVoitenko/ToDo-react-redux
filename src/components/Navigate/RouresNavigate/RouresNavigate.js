import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListPriorityToDo from '../../ListPriorityToDo';
import PageToDo from '../../PageTodo';

const RouresNavigate = () => {
  return (
    <Routes>
      <Route path="/ListPriority" element={<ListPriorityToDo />} />
      <Route path="/" element={<PageToDo />} />
    </Routes>
  );
};
export default RouresNavigate;
