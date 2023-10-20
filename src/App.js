import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './login';
import About1 from './forgetpaswword';
import Home from './home';
import Admin from './admin';
import Profile from './create';
import Eye from './eye';
import DataDeleteButton from './tas';
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
  <Route path='/delete' element={<DataDeleteButton/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
