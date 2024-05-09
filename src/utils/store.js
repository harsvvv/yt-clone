// store.js
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appslice";

import chatslice from "./chatslice";

const store = configureStore({
  reducer: {
    app: appReducer,
    chat:chatslice,
  },
});

export default store;
