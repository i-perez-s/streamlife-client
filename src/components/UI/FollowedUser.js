import React from "react";
import { Link } from "react-router-dom";

export const FollowedUser = () => {
  return (
    <li className="list-group-item pl-3 py-2">
      <Link to={`/stream/dsdsd`}>
        <i className="fa fa-user" aria-hidden="true">
          <span className="ml-2 align-middle">pepe</span>
        </i>
      </Link>
    </li>
  );
};
