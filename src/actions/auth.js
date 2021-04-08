import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types";

export const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const logout = () => ({
  type: types.authLogout,
});

export const startLogin = (email, password) => {
  return async (dispatch) => {
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
export const register = (user, file) => {
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
      console.log(file);
      if (file) {
        dispatch(setUserPhoto(file, body.userdb._id));
      }
      dispatch(startLogin(body.userdb.email, body.userdb.password));
    }
  };
};

export const setUserPhoto = async (file, uid) => {
  const resp = await fileUpload(file, uid);
  console.log(resp);
};
