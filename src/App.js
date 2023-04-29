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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard/>} />

      <Route path='/signin' element={<Signin/>} />  
      <Route path='/signup' element={<Signup/>} /> 
      <Route path='/user/profile' element={<Profile/>} />             




      </Routes>
      </BrowserRouter>
      <ToastContainer />
   


    </div>
  );
}

export default App;
