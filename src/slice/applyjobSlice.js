import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
  };

  const applyjobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{
        applyjob :(state = initialState,{payload}) =>{
            state.jobs = payload;
        },

     
    }
  })
  const { reducer, actions } = applyjobSlice;

export const { applyjob } = actions;

export default reducer;