import { types } from "../types/types";

const initialState = {
  follows: [],
};

export const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addNewFollow:
      return {
        ...state,
        follows: [...state.follows, action.payload],
      };
    case types.putAllFollows:
      return {
        ...state,
        follows: [...action.payload],
      };
    case types.deleteFollow:
    return {
        ...state,
        follows: state.follows.filter(
          (follow) => {
            return follow.followed[0]._id !== action.payload.followed[0]._id
          }
        ),
      };

    default:
      return state;
  }
};
