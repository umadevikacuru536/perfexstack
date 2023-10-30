import React, { useState } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import "./App.css"; // You can create an App.css file for styling
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
import { Link } from "react-router-dom";

function Asssessment(){
    const [navItemsVisible, setNavItemsVisible] = useState(false);

    const toggleNavItems = () => {
      setNavItemsVisible(!navItemsVisible);
    };
  
    return(
        <div>
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
              <a href="/home">Home page</a><br/>
              <a href="/admin">Instutions</a><br/>
              <a href="/users">Users</a>
            </li> 
          </ul>
        )}
      </div>
     
    </div>
    <div className="card21">
        <div className="d-flex flex-row ">
      <p className="assement">Assessment List</p>
      <button className="creat1">+ Create Assessment</button>
      </div>
      <div className="text-start m-4">
        <label>Show</label><br/>

<select >
  <option value="volvo">10</option>
  <option value="saab">20</option>
  <option value="mercedes">30</option>
  <option value="audi">40</option>
</select>

        <label className="seach">Seach</label>
        <input/>
      </div>
      <table className="table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Email ID</th>
              <th>EXAM </th>
              <th>Head</th>
              <th>Users Count</th>
              <th>Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          
              <tr >
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

          </tbody>
        </table>

      </div>
    </div>
        </div>
    )
}
export default Asssessment;