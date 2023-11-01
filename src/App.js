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
import Update from './update';
import Asssessment from './Assessment';
import Coursesadd from './courses/coursesadd';
import Courses from './courses/courses';
import Assessmentadd from './assessmentadd';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
 <Routes>
  <Route path="/login" element={<About/>}/>
  <Route path="/forget" element={<About1/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/crate' element={<Profile/>}/>
  <Route path='/eye' element={<Eye/>}/>
  <Route path='/update' element={<UpdateInstitute/>}/>
  <Route path='/users' element={<Users/>}/>
  <Route path='/uma' element={<Home1/>}/>
  <Route path='/detial' element={<Detial/>}/>
  <Route path='/Update/:email' element={<Update/>}/>
  <Route path='/assessment' element={<Asssessment/>}/>
  <Route path='/assessmentadd' element={<Assessmentadd/>}/>
  <Route path='/coursesadd' element={<Coursesadd/>}/>
  <Route path='/courses' element={<Courses/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;