import { configureStore } from "@reduxjs/toolkit";
import  userReducer   from "./slice/userSlice";
import resumeReducer from './slice/userResume';
import applyjobReducer from './slice/applyjobSlice'





export default configureStore({
    reducer: {
      user: userReducer,
      resume: resumeReducer,
      applyjob: applyjobReducer,




    },
  });