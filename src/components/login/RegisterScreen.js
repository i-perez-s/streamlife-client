import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { startRegister, startUpload } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formValues;
  const [userPhoto, setUserPhoto] = useState();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(userPhoto);
    if (user._id !== "") dispatch(startUpload(userPhoto));
  }, [user, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startRegister(formValues, userPhoto));
  };

  const fileChange = (e) => {
    let file = e.target.files[0];
    setUserPhoto({ file });
  };

  return (
    <div className="loginBox">
      <div className="overlay">
        <form onSubmit={handleSubmit} className="form-login">
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
                name="username"
                onChange={handleInputChange}
                value={username}
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
                name="email"
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

              <br />
              <br />

              <input
                className="form-control"
                type="file"
                onChange={fileChange}
                required
              />

              <br />

              <button className="log-in btn-block"> Register </button>
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
