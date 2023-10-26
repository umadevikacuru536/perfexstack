import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './login';
import About1 from './forgetpaswword';
import Home from './home';
import Admin from './admin';
import Profile from './create';
import Eye from './eye';
import UpdateInstitute from './updatedata';
import Users from './users';
import Home1 from './uma';
import Detial from './pa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
 <Routes>

  <Route path="/" element={<About/>}/>

  <Route path="/forget" element={<About1/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/crate' element={<Profile/>}/>
  <Route path='/eye' element={<Eye/>}/>
  <Route path='/update' element={<UpdateInstitute/>}/>
  <Route path='/users' element={<Users/>}/>
  <Route path='/uma' element={<Home1/>}/>
  <Route path='/detial' element={<Detial/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;