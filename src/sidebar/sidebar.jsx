import React, { useState } from 'react';
import './sidebar.css'; // Ensure the correct CSS file is imported
import { Link, useNavigate } from 'react-router-dom';
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
let navigate=useNavigate()
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
  const chartbox =()=>{
    navigate("/chat")
  }
  return (
    <div className={`sidebar_menu ${isSidebarOpen ? 'open' : ''}`}>
      <div className="Logo">
        <i className='bx bxl-slack icon'></i>
        <div className="Text_Logo">Logo</div>
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

        <li>
        <Link to="/assessment">
          <span class="material-symbols-outlined dashboardicons">folder</span>
            <span className="Item_Name">Assessment</span>
            </Link>
      
          <span className="Menu_btn">Assessment</span>
        </li> 

        <li className="Details">
          <div className="Child_Details">
         
            <div className="Name_Roll">
              <div className="Name">Uma Devi</div>
              <div className="Roll">Developer</div>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/2899/2899298.png" className="chartbox"onClick={chartbox} />
          </div>
          <i className='bx bxs-info-circle' id="log_out"></i>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
