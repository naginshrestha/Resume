import './App.css';
import { Header } from './components/layout/Header';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';

import Signup from './pages/login/Signup';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Signin } from './pages/login/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard/>} />

      <Route path='/signin' element={<Signin/>} />  
      <Route path='/signup' element={<Signup/>} />              




      </Routes>
      </BrowserRouter>
   


    </div>
  );
}

export default App;
