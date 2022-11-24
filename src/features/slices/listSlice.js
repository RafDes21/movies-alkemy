import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    popular: [],
    theatres: [],
  },
  reducers: {
    addPopular: (state, actions) => {
        state.popular = actions.payload
    },
    addTheatres: (state, actions) => {
        state.theatres = actions.payload
    },
  },
});

export const { addPopular, addTheatres} = listSlice.actions
export default listSlice.reducer
