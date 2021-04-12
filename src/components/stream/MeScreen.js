import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const MeScreen = () => {
  const dispatch = useDispatch();
  dispatch(startLogout());
  return <div>me</div>;
};
