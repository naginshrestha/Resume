import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {uid: '', fname: '', role: '', email: ''},
  };

  const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser :(state = initialState,{payload}) =>{
            state.user = payload;
        },

        // resetUser(state) {
        //   Object.assign(state, initialState); 
        // },
    }
  })
  const { reducer, actions } = userSlice;

export const { setUser,resetUser } = actions;

export default reducer;