import { createSlice } from "@reduxjs/toolkit";

const serieSlice = createSlice({
  name: "series",
  initialState: {
    series: [],
    serie: [],
    idSeries: [],
    categories: [],
  },
  reducers: {
    addSeries: (state, actions) => {
      state.series = actions.payload;
    },
    aSerie: (state, actions) => {
      state.serie = actions.payload;
    },
    idCategory: (state, actions) => {
      state.idSeries = actions.payload;
    },
    categorySeries: (state, actions) => {
      state.categories = actions.payload;
    },
  },
});

export const { addSeries, aSerie, idCategory, categorySeries } = serieSlice.actions;
export default serieSlice.reducer;
