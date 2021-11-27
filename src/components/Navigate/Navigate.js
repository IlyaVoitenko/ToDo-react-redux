import React from "react";
import ListLinksNavigate from "./ListLinksNavigate";
import RouresNavigate from "./RouresNavigate";
import { BrowserRouter as Router } from "react-router-dom";

const Navigate = () => {
  return (
    <Router>
      <ListLinksNavigate />
      <RouresNavigate />
    </Router>
  );
};
export default Navigate;
