
import React, { useState } from "react";
import { Link, BrowserRouter as Router, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
function Dashboard() {
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
    <div className="d-flex flex-row">
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
    <div className="dashborcard">
        <h6 className="dashbordheading">Welcome back!</h6>
        <h3 className="dashbordheading"> GSB Gold Standard</h3>
        <div className="container">
            <div className=" d-flex flex-row ">
                <div className="col-md-1 item rotate">
                    <p className="bashbordname">Instutions</p>
                    <span>1</span>
                </div >
                <div className="col-md-1"></div>
                <div className="col-md-1 item swipeX">
                    <p className="bashbordname">Users</p>
                    <span>1</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-1 item swipeY">
                    <p className="bashbordname">Active Users</p>
                    <span>1</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-1 item smoothX">
                    <p className="bashbordname">Assessments</p>
                    <span>1</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-1 item smoothXY">
                    <p className="bashbordname">Courses</p>
                    <span>1</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-1 item stretch">
                    <p className="bashbordname">Qustions</p>
                    <span>1</span>
                </div>
            </div><br/>

        </div>
        <div className=" d-flex flex-row" style={{marginTop:"100px"}}>
                <div className="col-md-2 mx-2  item glowing">
                    <p className="bashbordname">Assessment Participation</p>
                    <span>1</span>
                </div >
                <div className="col-md-1"></div>
                <div className="col-md-2 item rotate">
                    <p className="bashbordname">Questions Attempted</p>
                    <span>1</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2 item scaling">
                    <p className="bashbordname">Coding Submissions</p>
                    <span>1</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2 item swipeX">
                    <p className="bashbordname">Testcases Executed</p>
                    <span>1</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2 item swipeY">
                    <p className="bashbordname">Courses Enrolles</p>
                    <span>1</span>
                </div>
            </div>
            <div className=" d-flex flex-row" style={{marginTop:"100px"}}>
                <div className="col-md-2  mx-4 item smoothX">
                    <p className="bashbordname">Rt Tests</p>
                    <span>1</span>
                </div >
                <div className="col-md-1"></div>
                <div className="col-md-6 item smoothXY">
                    <p className="bashbordname">Speaking Evaluations</p>
                    <span>0/0</span>
                    <span>Usage/Limit</span>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 item scaling">
                    <p className="bashbordname">Writing Evaluations</p>
                    <span>0/0</span>
                    <span>Usage/Limit</span>
                </div>
            </div>
    </div>
    </div>
  </>
  )
}

export default Dashboard;