import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";

export const setSearchResults = (results) => ({
  type: types.setSearchResults,
  payload: results,
});

export const setSearchQuery = (query) => ({
  type: types.setSearchQuery,
  payload: query,
});

export const startSearchResults = (query) => {
  return async (dispatch) => {
    const resp = await fetchConToken(`search/${query}`);
    const body = await resp.json();
    dispatch(setSearchQuery(query));
    dispatch(setSearchResults(body.usersSearched));
  };
};
