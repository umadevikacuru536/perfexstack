import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './login';
import About1 from './forgetpaswword';
import Home from './home';
import Admin from './admin';
import Profile from './create';
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
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
