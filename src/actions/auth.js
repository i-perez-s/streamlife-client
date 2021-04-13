import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types";

export const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const logout = () => ({
  type: types.authLogout,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
};

export const startLogin = (email, password) => {
  return async (dispatch) => {
    console.log(email, password);
    const resp = await fetchSinToken("login", { email, password }, "POST");
    const body = await resp.json();
    console.log(body);
    if (!body.ok) {
      Swal.fire("Error", body.err, "error");
    } else {
      localStorage.setItem("token", body.token);
      dispatch(login(body.user));
    }
  };
};

export const startRegister = (user, file) => {
  return async (dispatch) => {
    const { username, email, password } = user;
    const resp = await fetchSinToken(
      "user",
      { email, password, username },
      "POST"
    );
    const body = await resp.json();
    console.log(body);
    if (!body.ok) {
      Swal.fire("Error", body.err.message, "error");
    } else {
      const { userdb } = body;
      const { _id: uid } = userdb;
      if (file) {
        await fileUpload(file, uid);
      }
      dispatch(startLogin(email, password));
    }
  };
};

export const startUpload = (file, uid) => {
  return async () => {
    const body = await fileUpload(file, uid);
    console.log(body);
    return body;
  };
};

export const renewToken = () => {
  return async (dispatch) => {
    const resp = await fetchConToken("renewToken");
    const { token, user } = await resp.json();
    localStorage.setItem("token", token);
    dispatch(login(user));
  };
};

export const startDelete = () => {
  return async (dispatch) => {
    const resp = await fetchConToken("user", {}, "DELETE");
    const body = await resp.json();
    if (!body.ok) {
      Swal.fire("Error", body.err, "error");
    } else {
      dispatch(startLogout());
    }
  };
};
