import React, { useState } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import "./App.css"; 
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
function Asssessment(){
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
    const [navItemsVisible, setNavItemsVisible] = useState(false);

    const toggleNavItems = () => {
      setNavItemsVisible(!navItemsVisible);
    };
  
    return(
        <div>
<div className="d-flex flex-row">
     <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
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
    <div className="card21">
        <div className="d-flex flex-row ">
      <p className="assement">Assessment List</p>
      <Link to="/assessmentadd"><button className="creat1">+ Create Assessment</button></Link>
      </div>
     
      <div className="text-start m-4">
        <label className="showname">Show</label><br/>
      
<select className="show" >
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
              <th>EXAM ID</th>
              <th>EXAM SERIES</th>
              <th>EXAM NAME </th>
              <th>PASSWORD</th>
              <th>QUES SELECTION</th>
              <th>DISPLAY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
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