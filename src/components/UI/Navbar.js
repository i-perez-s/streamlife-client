import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FollowedUsers } from "./FollowedUsers";
import { SearchInput } from "./SearchInput";
export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div data-component="navbar">
        <nav className="navbar p-0 fixed-top">
          <Link className="navbar-brand px-1" to="/">
            <img
              className="d-inline-block mt-1"
              alt="Streamlife Logo"
              height="40"
              src="./logo.png"
            />
          </Link>

          <SearchInput />

          <div>
            <div className="right-links float-right mr-4">
              <div className="d-inline dropdown">
                <Link
                  to="/me"
                  className="dropdown-toggle"
                  id="messages"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={user.photo} alt="userPhoto" />
                  {/* <div
                    className="avatar"
                    style={{ backgroundImage: `url(${user.photo})` }}
                  ></div> */}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div data-component="sidebar">
        <div className="sidebar">
          <FollowedUsers />
        </div>
      </div>
    </>
  );
};
