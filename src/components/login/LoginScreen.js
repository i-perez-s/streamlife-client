import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  return (
    <div className="loginBox">
      <div className="overlay">
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="con">
            <header className="head-form">
              <h2>Log In</h2>
              <p>Login here and make awesome things</p>
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
                placeholder="@Email"
                name="email"
                required
                onChange={handleInputChange}
                value={email}
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
                onChange={handleInputChange}
                value={password}
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

              <button className="log-in"> Log In </button>
            </div>

            <div className="other">
              <button className="btn submits frgt-pass">Forgot Password</button>
              <button className="btn submits sign-up btn-all">
                <Link to="/auth/register" className="loginLink">
                  Sign Up <i className="fa fa-user-plus" aria-hidden="true"></i>
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
