import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const loadFollows = (follows) => ({
  type: types.putAllFollows,
  payload: follows,
});

export const newFollow = (follow) => ({
  type: types.addNewFollow,
  payload: follow,
});

export const startLoadingFollows = () => {
  return async (disptach) => {
    const resp = await fetchConToken("myFollows");
    const { follows } = await resp.json();
    disptach(loadFollows(follows));
  };
};

export const startFollowing = (uid) => {
  return async (disptach) => {
    const resp = await fetchConToken(`startFollow/${uid}`, {}, "POST");
    const body = await resp.json();
    console.log(body);
    if (!body.ok) {
      return Swal.fire("Error", body.err, "error");
    } else {
      disptach(startLoadingFollows());
    }
  };
};

export const stopFollowing = (uid) => {
  return async (disptach) => {
    const resp = await fetchConToken(`stopFollowing/${uid}`, {}, "DELETE");
    const body = await resp.json();
    console.log(body);
    if (!body.ok) {
      return Swal.fire("Error", body.err, "error");
    } else {
      disptach(startLoadingFollows());
    }
  };
};
