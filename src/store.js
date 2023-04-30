import { configureStore } from "@reduxjs/toolkit";
import  userReducer   from "./slice/userSlice";
import resumeReducer from './slice/userResume'





export default configureStore({
    reducer: {
      user: userReducer,
      resume: resumeReducer,



    },
  });