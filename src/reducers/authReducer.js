import { types } from "../types/types";

const initialState = {
  user: {
    username: "",
    email: "",
    isInLive: false,
    photo: "",
    _id: "",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        user: action.payload,
      };

    case types.authLogout:
      return {
        ...state,
        user: initialState,
      };

    default:
      return state;
  }
};
