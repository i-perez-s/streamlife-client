import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <div className="loginBox">
      <div className="overlay">
        <form className="form-login">
          <div className="con">
            <header className="head-form">
              <h2>Register</h2>
              <p>Register here and make awesome things</p>
            </header>

            <br />
            <div className="field-set">
              <span className="input-item">
                <i className="fa fa-user-circle"></i>
              </span>
              <input
                className="form-input"
                id="txt-input"
                type="text"
                placeholder="@UserName"
                required
              />
              <br />

              <span className="input-item">
                <i className="fa fa-user-circle"></i>
              </span>
              <input
                className="form-input"
                id="txt-input"
                type="text"
                placeholder="@Email"
                required
              />

              <br />

              <span className="input-item">
                <i className="fa fa-key"></i>
              </span>

              <input
                className="form-input"
                type="password"
                placeholder="Password"
                id="pwd"
                name="password"
                required
              />

              <span>
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  type="button"
                  id="eye"
                ></i>
              </span>

              <br />

              <button className="log-in"> Register </button>
            </div>

            <div className="other">
              <button className="btn submits frgt-pass">Forgot Password</button>
              <button className="btn submits sign-up btn-all">
                <Link to="/auth/login" className="loginLink">
                  Login <i className="fa fa-user-plus" aria-hidden="true"></i>
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
