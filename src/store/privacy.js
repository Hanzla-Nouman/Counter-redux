import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: "privacy",
    initialState: false,
    reducers: {
      toggle: (privacy) => (privacy = !privacy),
    },
  });

  export default privacySlice;
export const privacyAction = privacySlice.actions;
  