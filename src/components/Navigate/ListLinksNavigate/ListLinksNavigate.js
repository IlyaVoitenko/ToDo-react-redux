import React from "react";
import { Link } from "react-router-dom";
const ListLinksNavigate = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/ListPriority">List Priority</Link>
        </li>
      </ul>
    </header>
  );
};
export default ListLinksNavigate;
