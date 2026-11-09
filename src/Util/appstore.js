import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./createslice.js";
const appstore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default appstore;
