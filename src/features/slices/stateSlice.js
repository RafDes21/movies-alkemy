import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "profile",
  initialState: {
    profiles: [],
    profileOne: {},
  },
  reducers: {
    change: (state, action) => {},
    addProfiles: (state, action) => {
      state.profiles = action.payload;
    },
    getProfile: (state, action) => {
      const search = state.profiles.find((item) => item.id === action.payload);
      state.profileOne = search;
    },
  },
});

export const { change, addProfiles, getProfile } = stateSlice.actions;
export default stateSlice.reducer;
