import React from "react";
import { Link } from "react-router-dom";
import { FollowedUsers } from "./FollowedUsers";
import { SearchInput } from "./SearchInput";

export const Navbar = () => {
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
                  <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g" />
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
