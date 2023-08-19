import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    obtainData:(state,action)=> {
      return action.payload
    }
  }
});

export const {obtainData} = dataSlice.actions;

export default dataSlice.reducer;