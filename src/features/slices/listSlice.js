import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    popular: [],
    theatres: [],
    childrens:[],
    comedies:[],
    top:[]
  },
  reducers: {
    addPopular: (state, actions) => {
        state.popular = actions.payload
    },
    addTheatres: (state, actions) => {
        state.theatres = actions.payload
    },
    addChildren: (state, actions) => {
      state.childrens = actions.payload
    },
    addComedies: (state, actions) => {
      state.comedies = actions.payload
    },
    addTops: (state, actions) => {
      state.top = actions.payload
    }
  },
});

export const { addPopular, addTheatres, addChildren, addComedies, addTops} = listSlice.actions
export default listSlice.reducer
