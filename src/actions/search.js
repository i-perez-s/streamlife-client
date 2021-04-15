import { types } from "node-sass";
import { fetchConToken } from "../helpers/fetch";

export const setSearchResults = (results) => ({
  type: types.SetSearchResults,
  action: results,
});

export const setSearchQuery = (query) => ({
  type: types.setSearchQuery,
  action: query,
});

export const startSearchResults = (query) => {
  return async (dispatch) => {
    const resp = await fetchConToken(`search/${query}`);
    const body = await resp.json;
    dispatch(setSearchQuery(query));
    dispatch(setSearchResults(body.results));
  };
};
