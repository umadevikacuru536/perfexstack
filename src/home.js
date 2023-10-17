import React, { useState } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import "./App.css"; // You can create an App.css file for styling
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
import { Link } from "react-router-dom";

function Home() {
  const [navItemsVisible, setNavItemsVisible] = useState(false);

  const toggleNavItems = () => {
    setNavItemsVisible(!navItemsVisible);
  };

  return ( 
    <div className="d-flex flex-row">
    <div className="container">
      
      <div className={`nav-bar ${!navItemsVisible ? "hidden" : ""}`}>
        
        <div className="toggle-button" onClick={toggleNavItems}>
        <img src={logo} className='image1' />
         <FaBars />
       
        </div>
        {navItemsVisible && (
          <ul className="nav-list">
            <li className="list">
              <a href="/">Dash Board</a>
            </li>
            <li className="list">
              <a href="/about">Home page</a>
            </li> 
          </ul>
        )}
      </div>
     
    </div>
    <div className="butn">
        <h1 className="stact">Welcome to perfex stact</h1>
        <div className=" d-flex flex-row">
           <Link to="/admin"> <button className="button1">Instutions Count No</button></Link>
            <button className="button">Users</button>
            <button className="button">Active Users</button>
        </div>
      </div>
    </div>
    
  );
  
}

export default Home;