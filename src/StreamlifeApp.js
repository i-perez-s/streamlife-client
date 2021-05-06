import React from "react";
import { Provider } from "react-redux";

import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

// const url = "http://localhost:3001";

export const StreamlifeApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
