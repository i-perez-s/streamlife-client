import React from "react";
import { FollowedUsers } from "./FollowedUsers";
import { SearchInput } from "./SearchInput";

export const NavbarScreen = () => {
  return (
    <>
      <div data-component="navbar">
        <nav className="navbar p-0 fixed-top">
          <a className="navbar-brand px-1" href="#">
            <img
              className="d-inline-block mt-1"
              alt="Streamlife Logo"
              height="40"
              src="./logo.png"
            />
          </a>
          {/* <button
            className="navbar-toggler navbar-toggler-left rounded-0 border-0"
            type="button"
            data-toggle="collapse"
            data-target="#megamenu-dropdown"
            aria-controls="megamenu-dropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button> */}

          <SearchInput />

          <div>
            <div className="right-links float-right mr-4">
              <div className="d-inline dropdown">
                <a
                  className="dropdown-toggle"
                  id="messages"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                >
                  <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right rounded-0"
                  aria-labelledby="messages"
                >
                  <a className="dropdown-item" href="#">
                    Edit my profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div data-component="sidebar">
        <div className="sidebar">
          <FollowedUsers />

          {/*  <ul className="list-group flex-column d-inline-block first-menu">
            <li className="list-group-item pl-3 py-2">
              <a href="#">
                <i className="fa fa-user" aria-hidden="true">
                  <span className="ml-2 align-middle">pepe</span>
                </i>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
};
