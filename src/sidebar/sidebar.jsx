import React, { useEffect, useState } from 'react';
import './sidebar.css'; // Ensure the correct CSS file is imported
import { Link, useNavigate } from 'react-router-dom';
import logo from '../sidebar/Skill-hub.png';
import Cookies from 'js-cookie';

function Sidebar() {
  const onClicklogout = () => {
    Cookies.remove('token')
    navigate("/")
  }
  const token = Cookies.get('token');
  useEffect(() => {

    if (token == undefined) {
      navigate("/")
    }
  }, []);
  const [userSubfolderVisible, setUserSubfolderVisible] = useState(false);
  const [userSubfolderVisible1, setUserSubfolderVisible1] = useState(false);
  const [userSubfolderVisible2, setUserSubfolderVisible2] = useState(false);
  const [userSubfolderVisible3, setUserSubfolderVisible3] = useState(false);
  const [userSubfolderVisible4, setUserSubfolderVisible4] = useState(false);
  const [userSubfolderVisible5, setUserSubfolderVisible5] = useState(false);
  const [userSubfolderVisible6, setUserSubfolderVisible6] = useState(false);
  const [assessment1, setassessment1] = useState(false);
  const assessment = () => {
    setassessment1(!assessment1);
  }
  const toggleUserSubfolder = () => {
    setUserSubfolderVisible(!userSubfolderVisible);
  };
  const toggleUserSubfolder1 = () => {
    setUserSubfolderVisible1(!userSubfolderVisible1);
  };
  const toggleUserSubfolder2 = () => {
    setUserSubfolderVisible2(!userSubfolderVisible2);
  };
  const toggleUserSubfolder3 = () => {
    setUserSubfolderVisible3(!userSubfolderVisible3);
  };
  const toggleUserSubfolder4 = () => {
    setUserSubfolderVisible4(!userSubfolderVisible4);
  };
  const toggleUserSubfolder5 = () => {
    setUserSubfolderVisible5(!userSubfolderVisible5);
  };
  const toggleUserSubfolder6 = () => {
    setUserSubfolderVisible6(!userSubfolderVisible6);
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
          {/* <img  className="sidebarlogo"src={logo}/> */}
          <h3 style={{ textShadow: "2px 2px 4px white", fontSize: "40px", marginTop: "10px" }}>Skill<span className='sidebarlogo'>Hub</span></h3>
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
        <h4 className='text-white text-start' >QUESTION BANK</h4>
        <>
        <li onClick={toggleUserSubfolder3}>
          <a href="#">
            <span class="material-symbols-outlined dashboardicons">stacks</span>
            <span className="Item_Name">Self Created QB</span>
            <i className="fa fa-caret-down"></i>
          </a>
          <span className="Menu_btn">Self Created QB</span>
          <ul className={`subfolders ${userSubfolderVisible3 ? 'active' : ''}`}>
            <li>
              <Link to="/Subject">
                <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Subjects</a>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Chapaters">
                <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Chapters</a>
                </div></Link>
            </li>
            <li onClick={toggleUserSubfolder4}>
            <div className='d-flex flex-row'>
            
                <span class="material-symbols-outlined" style={{ fontSize: "25px" ,color:"white"}}>fiber_manual_record</span>
                <a href="#">MCQ Questions</a>
                <i className="fa fa-caret-down"></i>
              
              </div>
              <ul className={`subfolders ${userSubfolderVisible4 ? 'active' : ''}`}>
                <li>
                  <Link to="/McqCreat">
                    <div className='d-flex flex-row'>
                      <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                      <a href="#">Create</a>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/Meqview">
                    <div className='d-flex flex-row'>
                      <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                      <a href="#">View</a>
                    </div></Link>
                </li>
                <li>
                  <Link to="/Upload">
                    <div className='d-flex flex-row'>
                      <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                      <a href="#">Upload</a>
                    </div></Link>
                </li>
              </ul>
            </li>
            <li onClick={toggleUserSubfolder5}>
            <div className='d-flex flex-row'>
                <span class="material-symbols-outlined" style={{ fontSize: "25px",color:"white" }}>fiber_manual_record</span>
                <a href="#"> Parag MCQ Questions</a>
                <i className="fa fa-caret-down"></i>
              </div>

              <ul className={`subfolders ${userSubfolderVisible5 ? 'active' : ''}`}>
                <li>
                  <Link to="/Paragquestioncreate">
                    <div className='d-flex flex-row'>
                      <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                      <a href="#">Create</a>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/Paragview">
                    <div className='d-flex flex-row'>
                      <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                      <a href="#">View</a>
                    </div></Link>
                </li>
              </ul>
            </li>
            <li onClick={toggleUserSubfolder6}>
            <div className='d-flex flex-row'>
                <span class="material-symbols-outlined" style={{ fontSize: "25px",color:"white" }}>fiber_manual_record</span>
                <a href="#"> Coding Questions</a>
                <i className="fa fa-caret-down"></i>
              </div>
              <ul className={`subfolders ${userSubfolderVisible6 ? 'active' : ''}`}>
                <li>
                  <Link to="/Codingcreate">
                    <div className='d-flex flex-row'>
                      <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                      <a href="#">Create</a>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/Codingview
                  ">
                    <div className='d-flex flex-row'>
                      <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                      <a href="#">View</a>
                    </div></Link>
                </li>

              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/Upload">
            <div className='d-flex flex-row'>
              <span class="material-symbols-outlined dashboardicons">search</span>
              <span className="Item_Name">Assigned QB</span>

            </div></Link>
        </li>
        </>
        <h4 className='text-white text-start' onClick={assessment}>Assessment</h4>



        <>
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
                    <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                    <a href="#">Categories</a>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/assessment">
                  <div className='d-flex flex-row'>
                    <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
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
                  <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Assessment Report</a>
                </div></Link>
              </li>
              <li>
                <Link to="/paticipation"> <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
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
                  <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Categories</a>
                </div> </Link>
              </li>
              <li>
                <Link to="/assingesassessment"><div className='d-flex flex-row'>
                  <span class="material-symbols-outlined" style={{ fontSize: "25px" }}>fiber_manual_record</span>
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
        </>



        <li className="Details">
          <div className="Child_Details">

            <div className="Name_Roll">
              <div className="Name">Uma Devi</div>
              <div className="Roll">Developer</div>
              <button onClick={onClicklogout} className='logout'>logout</button>
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
