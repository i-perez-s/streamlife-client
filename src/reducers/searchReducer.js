import { types } from "../types/types";

const initialState = {
  search: "",
  searchResult: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setSearchResults:
      return {
        ...state,
        searchResult: action.payload,
      };

    case types.setSearchQuery:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
