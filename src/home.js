// import React, { useState } from "react";
// import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
// import "./App.css"; // You can create an App.css file for styling
// import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
// import { Link } from "react-router-dom";

// function Home() {
//   const [navItemsVisible, setNavItemsVisible] = useState(false);

//   const toggleNavItems = () => {
//     setNavItemsVisible(!navItemsVisible);
//   };

//   return ( 
//     <div className="d-flex flex-row">
//     <div className="container">
      
//       <div className={`nav-bar ${!navItemsVisible ? "hidden" : ""}`}>
        
//         <div className="toggle-button" onClick={toggleNavItems}>
//         <img src={logo} className='image1' />
//          <FaBars />
       
//         </div>
//         {navItemsVisible && (
//           <ul className="nav-list">
//             <li className="list">
//               <a href="/">Dash Board</a>
//             </li>
//             <li className="list">
//               <a href="/home">Home page</a><br/>
//               <a href="/admin">Instutions</a><br/>
//               <a href="/users">Users</a>
//             </li> 
//           </ul>
//         )}
//       </div>
     
//     </div>
//     <button className="butn">
//         <h1 className="stact">Welcome to perfex stact</h1>
//         <div className=" d-flex flex-row">
//            <Link to="/admin"> <button className="button1">Instutions Count</button></Link>
//             <Link to="/users"><button className="button">Users</button></Link>
//             <button className="button">Active Users</button>
//             <button className="button">Active Users</button>
//             <button className="button">Asssessment</button>
//             <button className="button">Courses</button>
//         </div>
//       </button>
//     </div>
    
//   );
  
// }

// export default Home;

import React, { useState } from "react";
import { Link, BrowserRouter as Router, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
function Home() {
  const [sidebar, setSidebar] = useState(false);
const navigate= useNavigate()
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const chartbox =()=>{
    navigate("/chat")
  }

  return (
    <>
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
       <img src="https://cdn-icons-png.flaticon.com/512/2899/2899298.png" className="chartbox" onClick={chartbox}/>
      </div>
      
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            const { title, path, icon, cName } = item;
            return (
              <li key={index} className={cName}>
                <Link to={path}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        
      </nav>
    </IconContext.Provider>
  </>
  )
}

export default Home;