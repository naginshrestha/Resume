import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resume: [],
  };

  const userResume = createSlice({
    name:"user",
    initialState,
    reducers:{
        setResume :(state = initialState,{payload}) =>{
            state.resume = payload;
        },

     
    }
  })
  const { reducer, actions } = userResume;

export const { setResume } = actions;

export default reducer;