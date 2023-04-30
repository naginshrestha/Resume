import './App.css';
import { Header } from './components/layout/Header';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import Signup from './pages/login/Signup';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Signin } from './pages/login/Signin';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Profile } from './pages/profile/Profile';
import { Resume } from './pages/resume/Resume';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {userAction} from './actions/userAction'
import { auth } from "./firebase-config/firebase-config";
import {getResumeAction} from './actions/actionResume'
import { useEffect } from 'react';




function App() {

  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {

    dispatch(userAction(user.uid));
  });
  useEffect(()=>{
    dispatch(getResumeAction())
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard/>} />

      <Route path='/signin' element={<Signin/>} />  
      <Route path='/signup' element={<Signup/>} /> 
      <Route path='/user/profile' element={<Profile/>} />      
      <Route path='/user/resume' element={<Resume/>} />             
       




      </Routes>
      </BrowserRouter>
      <ToastContainer />
   


    </div>
  );
}

export default App;
