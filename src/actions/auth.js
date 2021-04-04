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
  };
};
