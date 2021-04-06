import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";
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
export const register = (user) => {
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
      dispatch(login(body.userdb));
    }
  };
};
