import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  sent: false,
};

export const sendMessage = createAsyncThunk(
  "sendmessage/sendMessage",
  async (formData) => {
    const url = "https://getform.io/f/55c5bd6b-01d7-4eaa-bcce-5aeb7191eb8a";
    try {
      const response = axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        throw new Error(errorMessage);
      } else {
        console.error(error.response);
        throw error;
      }
    }
  }
);

const sendMessageSlice = createSlice({
  name: "sendmessage",
  initialState,
  reducers: {
    reset(state) {
      state.error = false;
      state.loading = false;
      state.sent = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.loading = false;
        state.sent = true;
        state.error = false;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.sent = false;
        state.error = action.error.message;
      });
  },
});

export const { reset } = sendMessageSlice.actions;
export default sendMessageSlice.reducer;
