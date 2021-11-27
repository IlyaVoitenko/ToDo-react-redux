import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPriorityToDo from "../../ListPriorityToDo";
import PageToDo from "../../PageToDo";
const RouresNavigate = () => {
  return (
    <Routes>
      <Route path="/ListPriority" element={<ListPriorityToDo />}></Route>
      <Route path="/" element={<PageToDo />}></Route>
    </Routes>
  );
};
export default RouresNavigate;
