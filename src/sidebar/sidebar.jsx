import React, { useState } from 'react';
import './sidebar.css'; // Ensure the correct CSS file is imported
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/_7bf5af82-4de7-426c-b2c9-1a833c87c4ba.png';
function Sidebar() {
  const [userSubfolderVisible, setUserSubfolderVisible] = useState(false);
  const [userSubfolderVisible1, setUserSubfolderVisible1] = useState(false);
  const [userSubfolderVisible2, setUserSubfolderVisible2] = useState(false);
  const toggleUserSubfolder = () => {
    setUserSubfolderVisible(!userSubfolderVisible);
  };
  const toggleUserSubfolder1 = () => {
    setUserSubfolderVisible1(!userSubfolderVisible1);
  };
  const toggleUserSubfolder2 = () => {
    setUserSubfolderVisible2(!userSubfolderVisible2);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let navigate = useNavigate()
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuBtnChange = () => {
    if (isSidebarOpen) {
      return 'bxs-x-circle';
    } else {
      return 'bx-menu';
    }
  };
  const chartbox = () => {
    navigate("/chat")
  }
  const displayfildes = () => {
    const subMenu = document.getElementById("categoriesSubMenu");
    subMenu.style.display = "block";
  }
  return (
    <div className={`sidebar_menu ${isSidebarOpen ? 'open' : ''}`}>
      <div className="Logo">
        <i className='bx bxl-slack icon'></i>
        <div className="Text_Logo">
          <img  className="sidebarlogo"src={logo}/>
        </div>
        <i className={`fa-solid fa-bars  ${menuBtnChange()}`} id="Button" onClick={toggleSidebar}></i>
      </div>

      <ul className="Nav_Item">
        <li>
          <Link to="/dashbord">
            <span class="material-symbols-outlined dashboardicons">dashboard</span>
            <span className="Item_Name">Dashboard</span>
          </Link>
          <span className="Menu_btn">Dashboard</span>
        </li>

        <li>
          <Link to="/">
            <span class="material-symbols-outlined dashboardicons">home</span>
            <span className="Item_Name">Home</span>
          </Link>
          <span className="Menu_btn">Home</span>
        </li>

        <li>
          <Link to="/admin">
            <span class="material-symbols-outlined dashboardicons">group</span>
            <span className="Item_Name">Users</span>
          </Link>
          <span className="Menu_btn">Users</span>
        </li>

      
        <li onClick={toggleUserSubfolder}>
        <a href="#">
          <span className="material-symbols-outlined dashboardicons">folder</span>
          <span className="Item_Name">Assessment</span>
          <i className="fa fa-caret-down"></i>
        </a>
        <span className="Menu_btn">Assessment</span>
        <ul className={`subfolders ${userSubfolderVisible ? 'active' : ''}`}>
          <li>
          <Link to="/assessment/categories">
            <div className='d-flex flex-row'>
              <span class="material-symbols-outlined" style={{fontSize:"25px"}}>fiber_manual_record</span> 
              <a href="#">Categories</a>
              </div>
              </Link> 
          </li>
          <li>
            <Link to="/assessment">
            <div className='d-flex flex-row'>
              <span class="material-symbols-outlined" style={{fontSize:"25px"}}>fiber_manual_record</span> 
              <a href="#">Assessments</a>
              </div></Link>
          </li>
        </ul>
      </li>

      <li onClick={toggleUserSubfolder1}>
        <a href="#">
          <span className="material-symbols-outlined dashboardicons">folder</span>
          <span className="Item_Name">Reports</span>
          <i className="fa fa-caret-down"></i>
        </a>
        <span className="Menu_btn">Reports</span>
        <ul className={`subfolders ${userSubfolderVisible1 ? 'active' : ''}`}>
          <li>
          <Link to="/assessmentreport"> <div className='d-flex flex-row'>
              <span class="material-symbols-outlined" style={{fontSize:"25px"}}>fiber_manual_record</span> 
              <a href="#">Assessment Report</a>
              </div></Link> 
          </li>
          <li>
          <Link to="/paticipation"> <div className='d-flex flex-row'>
              <span class="material-symbols-outlined" style={{fontSize:"25px"}}>fiber_manual_record</span> 
              <a href="#">Participation Report</a>
              </div></Link> 
          </li>
        </ul>
      </li>
      <li onClick={toggleUserSubfolder2}>
        <a href="#">
        <span class="material-symbols-outlined dashboardicons">group</span>
          <span className="Item_Name">Assigned Assessments</span>
          <i className="fa fa-caret-down"></i>
        </a>
        <span className="Menu_btn">Assigned Assessments</span>
        <ul className={`subfolders ${userSubfolderVisible2 ? 'active' : ''}`}>
          <li>
          <Link to="/assingedcategories"><div className='d-flex flex-row'>
              <span class="material-symbols-outlined" style={{fontSize:"25px"}}>fiber_manual_record</span> 
              <a href="#">Categories</a>
              </div> </Link> 
          </li>
          <li>
          <Link to="/assingesassessment"><div className='d-flex flex-row'>
              <span class="material-symbols-outlined" style={{fontSize:"25px"}}>fiber_manual_record</span> 
              <a href="#">Assessments</a>
              </div> </Link> 
          </li>
        </ul>
      </li>
       <li>
          <Link to="/compare">
          <span class="material-symbols-outlined dashboardicons">repeat</span>
            <span className="Item_Name">Compare</span>
          </Link>
          <span className="Menu_btn">Compare</span>
        </li>
        <li className="Details">
          <div className="Child_Details">

            <div className="Name_Roll">
              <div className="Name">Uma Devi</div>
              <div className="Roll">Developer</div>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/2899/2899298.png" className="chartbox" onClick={chartbox} />
          </div>
          <i className='bx bxs-info-circle' id="log_out"></i>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
