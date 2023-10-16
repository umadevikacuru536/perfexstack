import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './login';
import About1 from './forgetpaswword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
 <Routes>

  <Route path="/" element={<About/>}/>

  <Route path="/forget" element={<About1/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
