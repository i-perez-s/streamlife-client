import Swal from "sweetalert2";
import { browserHistory } from "react-router";
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
    const resp = await fetchSinToken("login", { email, password }, "POST");
    const body = await resp.json();
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
      const resp = await fetchSinToken("login", { email, password }, "POST");
      const body = await resp.json();
      if (!body.ok) {
        Swal.fire("Error", body.err, "error");
      } else {
        localStorage.setItem("token", body.token);
        dispatch(startUpload(file));
      }
    }
  };
};

export const startUpload = (file) => {
  return async (dispatch) => {
    console.log(file);
    const { userUpdated: user, ok } = await fileUpload(file);
    if (!ok) {
      Swal.fire("Error", "ha habido un problema subiendo la imagen");
    } else {
      Swal.fire(
        "Succes",
        "all it's ok. Refresh for see the changes",
        "success"
      );
      // browserHistory.push("/auth/login");
      dispatch(login(user));
    }
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
