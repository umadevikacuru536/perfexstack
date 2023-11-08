import React, { useState } from 'react';
import './sidebar.css'; // Ensure the correct CSS file is imported
import { Link, useNavigate } from 'react-router-dom';
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
        <div className="Text_Logo">Instack</div>
        <i className={`bx ${menuBtnChange()}`} id="Button" onClick={toggleSidebar}></i>
      </div>

      <ul className="Nav_Item">
        <li>

          <input type="text" placeholder="Search...." />
          <span className="Menu_btn">Search</span>
        </li>

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
          <Link to="/assessment/categories"> <a href="#">Categories</a></Link> 
          </li>
          <li>
            <Link to="/assessment"><a href="#">Assessments</a></Link>
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
          <Link to="/assessmentreport"> <a href="#">Assessment Report</a></Link> 
          </li>
          <li>
          <Link to="/paticipation"> <a href="#">Participation Report</a></Link> 
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
          <Link to="/assingedcategories"> <a href="#">Categories</a></Link> 
          </li>
          <li>
          <Link to="/assingesassessment"> <a href="#">Assessments</a></Link> 
          </li>
        </ul>
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
