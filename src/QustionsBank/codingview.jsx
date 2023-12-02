import React from 'react'
import Sidebar from '../sidebar/sidebar'
import './subject.css'
import  { useEffect,useState } from 'react';
import "../sidebar/sidebar.css"// Ensure the correct CSS file is imported
import { Link, useNavigate } from 'react-router-dom';
import logo from '../sidebar/Skill-hub.png';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function Codingview() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
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


  let navigate = useNavigate()


  const [userSubfolderVisible1, setUserSubfolderVisible1] = useState(false);
  const [userSubfolderVisible2, setUserSubfolderVisible2] = useState(false);
  const [userSubfolderVisible3, setUserSubfolderVisible3] = useState(false);
  const [userSubfolderVisible4, setUserSubfolderVisible4] = useState(false);
  const [userSubfolderVisible5, setUserSubfolderVisible5] = useState(false);
  const [userSubfolderVisible6, setUserSubfolderVisible6] = useState(false);
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
  const [showassign, setShow] = useState(false);
  const showAssign = () => {
    setShow(!showassign)
  }
  const [isSwitchOn, setSwitchOn] = useState(false);

  const onClickHandler = () => {
    setSwitchOn(!isSwitchOn);
  };
  return (
    <>
    <header>
        <div className="toggle" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h3 style={{ textShadow: "2px 2px 4px white", fontSize: "40px", marginTop: "10px" }}>Skill<span className='sidebarlogo'>Hub</span></h3>
        <a href="#">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </a>
      </header>
      <nav className={`sidebar_menu ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <a className="toggle" onClick={handleToggle}>
              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <h3 style={{ textShadow: "2px 2px 4px white", fontSize: "40px", marginTop: "10px" }}>Skill<span className='sidebarlogo'>Hub</span></h3>
            </a>
          </li>
          <li>
           <Link to="/sidebar">
             <span class="material-symbols-outlined icon">dashboard</span>
             <span className="Item_Name">Dashboard</span>
           </Link>
          
         </li>
          <li>
            <a href="#">
              <span class="material-symbols-outlined icon">home</span>
              <span className="title">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="material-symbols-outlined icon">group</span>
              <span className="title">Users</span>
            </a>
          </li>
          <li onClick={toggleUserSubfolder3}>
            <a href="#" >
              <span className="material-symbols-outlined icon">stacks</span>
              <span className="title">Self Created QB</span>
            </a>

          </li>
          {userSubfolderVisible3 && (
            <ul className='subfolders'>
              <li>
                <Link to="/Subject">
                  <div className='d-flex flex-row'>
                    <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                    <a href="#">Subjects</a>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Chapaters">
                  <div className='d-flex flex-row'>
                    <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                    <a href="#">Chapters</a>
                  </div></Link>
              </li>
              <li onClick={toggleUserSubfolder4}>
                <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px", color: "white" }}>fiber_manual_record</span>
                  <a href="#">MCQ Questions</a>
                </div>
              </li>
              {userSubfolderVisible4 && (
                <ul className="subfolders">
                  <li>
                    <Link to="/McqCreat">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Create</a>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Meqview">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">View</a>
                      </div></Link>
                  </li>
                  <li>
                    <Link to="/Upload">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Upload</a>
                      </div></Link>
                  </li>
                </ul>
              )}
              <li onClick={toggleUserSubfolder5}>
                <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px", color: "white" }}>fiber_manual_record</span>
                  <a href="#"> Parag MCQ Questions</a>
                </div>
              </li>

              {userSubfolderVisible5 && (
                <ul className="subfolders">
                  <li>
                    <Link to="/Paragquestioncreate">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Create</a>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Paragview">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">View</a>
                      </div></Link>
                  </li>
                </ul>
              )}

              <li onClick={toggleUserSubfolder6}>
                <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px", color: "white" }}>fiber_manual_record</span>
                  <a href="#"> Coding Questions</a>
                </div>
              </li>
              {userSubfolderVisible6 && (
                <ul className="subfolders">
                  <li>
                    <Link to="/Codingcreate">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Create</a>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Codingview
               ">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">View</a>
                      </div></Link>
                  </li>

                </ul>
              )}
            </ul>
          )}

          <li>
            <Link to="/Assignedqb">
            <a href="#" >
                <span class="material-symbols-outlined icon">search</span>
                <span className=" title">Assigned QB</span>
                </a>
              </Link>
          </li>
          <li onClick={showAssign} >
            <a href="#">
              <span className="material-symbols-outlined icon">folder</span>
              <span className=" title" >Assessment</span>
            </a>

            <li>
              {showassign && (
                <ul className="subfolders">
                  <li>
                    <Link to="/assessment/categories">
                      <div className='d-flex flex-row'>
                        <span className="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Categories</a>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/assessment">
                      <div className='d-flex flex-row'>
                        <span className="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Assessments</a>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

          </li>

          <li onClick={toggleUserSubfolder1}>
            <a href="#">
              <span className="material-symbols-outlined icon">folder</span>
              <span className="Menu_btn">Reports</span>

            </a>
          </li>
          {userSubfolderVisible1 && (
            <ul className="subfolders">
              <li>
                <Link to="/assessmentreport"> <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Assessment Report</a>
                </div></Link>
              </li>
              <li>
                <Link to="/paticipation"> <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Participation Report</a>
                </div></Link>
              </li>
            </ul>
          )}



          <li onClick={toggleUserSubfolder2}>
            <a href="#">
              <span class="material-symbols-outlined icon">group</span>
              <span className="Item_Name">Assigned Assessments</span>

            </a>
          </li>
          {userSubfolderVisible2 && (
            <ul className='subfolders'>
              <li>
                <Link to="/assingedcategories"><div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Categories</a>
                </div> </Link>
              </li>
              <li>
                <Link to="/assingesassessment"><div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Assessments</a>
                </div> </Link>
              </li>
            </ul>
          )}


          <li>
            <Link to="/compare">
              <span class="material-symbols-outlined icon">repeat</span>
              <span className="title">Compare</span>
            </Link>

          </li>

          <li>
            <a href="#">
              <span className="icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
              <span className="title" onClick={onClicklogout}>Log Out</span>
            </a>
          </li>
        </ul>

      </nav>
      <div
        className={`content-container ${isActive ? "shifted-content" : ""}`}
      >
 <div className='container'>
      <div className='row'>
        <div className='col-md-12 '>
         <div className='col-md-12'>
      <div className="card-container1">
        <h3 className='card2'>Filter Coding Questions:</h3>
        <hr className="line" />
        <div className="form-container">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <label className="qustionlabel">Subject</label><br/>
            <select className="option12 w-100" >
              <option value="">Select Subject</option>
            
            </select>
          </div>
  
          <div className="col-sm-12 col-md-3 col-lg-3">
            <label className='qustionlabel'>Chapter</label><br/>
            <select className="option12 w-100" >
              <option value="">Select  Chapter</option>
            </select>
          </div>
          
         
          <div className="col-sm-12 col-md-3 col-lg-3 d-flex flex-row">
         
        <button className='bg-success text-white m-2' style={{padding:"6px",borderRadius:"10px"}}>Go</button>
          <button className='bg-white ' style={{padding:"6px",borderRadius:"10px",borderColor:"orangered"}} >Clear Filters</button>
       
          </div>
          
        </div>
        
      </div>
      <div className="card-container1">
        <h3 className='card2'>Seach Coding Questions:</h3>
        <hr className="line" />
        <div className="form-container">
        
          <div className="col-md-12">
          <input className='w-25' style={{borderRadius:"10px",borderColor:"gray",height:"5vh"}}/>
          <button className='bg-primary text-white' style={{marginLeft:"10px",borderRadius:"10px",padding:"1vh"}}>Search</button>
          </div>
          
        </div>
        
      </div>
      </div>
      <div className='col-md-2'></div>
      <div className='col-md-12'>
      <div className="card-container2">
        <div className='card3'>
          <h3>Coding Questions Table</h3>
          <hr className="line" />
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>

                <th>S.NO</th>
                <th>ID</th>
                <th>MODULE</th>
                <th>CHAPTER</th>
                <th>TITLE</th>
                <th>VALIDATED</th>
                <th>Actions</th>
              </tr>
            </thead>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>

          </table>
        </div>
      </div>
      </div>
      </div>

        
      </div>

    </div>
      </div>
   
    </>
  )
}

export default Codingview