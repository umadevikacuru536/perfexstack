import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './login';
import About1 from './forgetpaswword';
import Home from './home';
import Admin from './admin';
import Profile from './create';
import Eye from './eye';
import Users from './users';
import Detial from './pa';
import Update from './update';
import Asssessment from './Assessment';
import Coursesadd from './courses/coursesadd';
import Courses from './courses/courses';
import Assessmentadd from './assessmentadd';
import SimpleForm from './form/Simple';
import Dashboard from './dashbord';
import Sidebar from './sidebar/sidebar';
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
  <Route path='/users' element={<Users/>}/>
  <Route path='/detial' element={<Detial/>}/>
  <Route path='/Update/:email' element={<Update/>}/>
  <Route path='/assessment' element={<Asssessment/>}/>
  <Route path='/assessmentadd' element={<Assessmentadd/>}/>
  <Route path='/coursesadd' element={<Coursesadd/>}/>
  <Route path='/courses' element={<Courses/>}/>
  <Route path='/chat' element={<SimpleForm />}/>
  <Route path='/dashbord' element={<Dashboard/>}/>
  <Route path='/sidebar' element={<Sidebar/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;