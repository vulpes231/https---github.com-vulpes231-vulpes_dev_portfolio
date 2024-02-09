import { configureStore } from "@reduxjs/toolkit";
import sendMessageReducer from "../features/sendMessageSlice";

const store = configureStore({
  reducer: {
    sendmessage: sendMessageReducer,
  },
});

export default store;
