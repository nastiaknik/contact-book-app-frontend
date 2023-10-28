import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterState = string;

const initialState: FilterState = "";

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterValue: (state, { payload }: PayloadAction<string>) => {
      state = payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
