import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDelete, startLogout, startUpload } from "../../actions/auth";

export const MeScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [streamKey, setStreamKey] = useState("**************");
  const [userPhoto, setUserPhoto] = useState();

  const handleStreamKey = () => {
    if (streamKey.includes("**************")) {
      setStreamKey(user._id);
    } else {
      setStreamKey("**************");
    }
  };

  const fileChange = (e) => {
    let file = e.target.files[0];
    console.log(file);
    setUserPhoto({ file });
    console.log(userPhoto);
    dispatch(startUpload({ file }, user._id));
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleDelete = () => {
    dispatch(startDelete());
  };
  return (
    <div className="row">
      <div className="col-md-6 mb-5">
        <img className="imgUserMePage" src={user.photo} alt="userImg" />

        <span className="mt-5">Change user img:</span>
        <input
          className="form-control mt-3"
          type="file"
          onChange={fileChange}
        />
        <br />
      </div>

      <div className="col-md-6 align-items-center mt-5">
        <h2 className="text-center">{user.username.toUpperCase()}</h2>
        <span className="d-block">
          <b>Email:</b> {user.email}
        </span>
        <span className="d-block">
          <b>Stream key:</b> {streamKey}
        </span>
        <button
          className="btn btn-all btn-success meScreenButton"
          onClick={handleStreamKey}
        >
          Get stream key
        </button>
        <button
          className="btn btn-all btn-info  meScreenButton "
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          className="btn btn-all btn-danger meScreenButton"
          onClick={handleDelete}
        >
          Delete account
        </button>
      </div>
    </div>
  );
};
