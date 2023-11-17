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
import Adminadd from './adminadd';
import Categories from './categories/categories';
import Categoriesadd from './categories/categoriesadd';
import Access from './categories/access';
import Paticipationreport from './Reports/paticipationreport';
import AssessmentReport from './Reports/assessmentReport';
import Compare from './compare/compare';
import AssignedCategories from './assignedassessment/categories';
import AssignedAssessment from './assignedassessment/assessments';
import Schedule from './assignedassessment/schedule';
import AssessmentEye from './assignedassessment/assessment';
import Dashbordhome from './UserDashbord/Dashbordhome';
import Changepassword from './UserDashbord/changepassword';
import Viewassements from './UserDashbord/viewassements';
import Coursesactivity from './UserDashbord/coursesactivity';
import Practiceactivity from './UserDashbord/practiceactivity';
import Assessment from './UserDashbord/assement';
import UserCourses from './UserDashbord/courses';
import Userpratice from './UserDashbord/userpratice';
import Usersblogs from './UserDashbord/usersblogs';
import Accuracy from './UserDashbord/Accuracy';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
 <Routes>
  <Route path="/" element={<About/>}/>
  <Route path="/forget" element={<About1/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/adminadd' element={<Adminadd/>}/>
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
  <Route path='/assessment/categories' element={<Categories/>}/>
  <Route path='/categoriesadd' element={<Categoriesadd/>}/>
  <Route path='/access' element={<Access/>}/>
  <Route path='/paticipation' element={<Paticipationreport/>}/>
 <Route path='/assessmentreport' element={<AssessmentReport/>}/>
 <Route path='/compare' element={<Compare/>}/>
 <Route path='/assingedcategories' element={<AssignedCategories/>}/>
 <Route path='/assingesassessment' element={<AssignedAssessment/>}/>
 <Route path='/schedule' element={<Schedule/>}/>
 <Route path='/assingedeye' element={<AssessmentEye/>}/>
 <Route path='/dashbordhome' element={<Dashbordhome/>}/>
 <Route path='/changepassword' element={<Changepassword/>}/>
 <Route path='/viewassements' element={< Viewassements/>}/>
 <Route path='/Coursesactivity' element={<Coursesactivity/>}/>
 <Route path='/Practiceactivity' element={<Practiceactivity/>}/>
 <Route path='/userAssessment' element={<Assessment/>}/>
 <Route path='/usersCourses' element={<UserCourses/>}/>
 <Route path='/Userpratice' element={<Userpratice/>}/>
 <Route path='/Usersblogs' element={<Usersblogs/>}/>
 <Route path='/Accuracy' element={<Accuracy/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;