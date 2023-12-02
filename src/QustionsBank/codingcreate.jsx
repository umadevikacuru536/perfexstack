import React from 'react'
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import './subject.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  { useEffect } from 'react';
import "../sidebar/sidebar.css"// Ensure the correct CSS file is imported
import { Link, useNavigate } from 'react-router-dom';
import logo from '../sidebar/Skill-hub.png';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function Codingcreate() {
    const [editorData, setEditorData] = useState('');
    const [selectedQuestionType, setSelectedQuestionType] = useState('');
  
    const handleQuestionTypeChange = (e) => {
      setSelectedQuestionType(e.target.value);
    };
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
         
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card213 text-start">
     <h3>CREATE CODING QUESTIONS</h3>
      <label className="qustionlabel">Subject<span className="star">*</span></label><br/>
      <select className="qustionselection">
          <option></option>
      </select><br/>
      <label className="qustionlabel">Chapters <span className="star">*</span></label><br/>
      <select className="qustionselection">
          <option></option>
      </select><br/>
    
      <label className="qustionlabel">Title <span className="star">*</span></label><br/>
      <input className="input" style={{height:"4vh"}}/><br/>
      <label className="qustionlabel">Programming Languages <span className="star">*</span></label><br/>
      <input className="input" style={{height:"4vh"}}/><br/>
      <label className="qustionlabel">Description <span className="star">*</span></label>
      <CKEditor 
      editor={ClassicEditor}
      onReady={(editor) => {
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
     
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
      
/>
<label className="qustionlabel">Description Image <span className="star">*</span></label><br/>
<button className="choose"> Choose Image</button><br/>
<label className="qustionlabel">Constraints <span className="star">*</span></label>
      <CKEditor 
      editor={ClassicEditor}
      onReady={(editor) => {
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
     
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
      
/>
<label className="qustionlabel">Constraints Image <span className="star">*</span></label><br/>
<button className="choose"> Choose Image</button><br/>
<label className="qustionlabel">Example <span className="star">*</span></label>
      <CKEditor 
      editor={ClassicEditor}
      onReady={(editor) => {
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
     
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
      
/>
<label className="qustionlabel">Example Image <span className="star">*</span></label><br/>
<button className="choose"> Choose Image</button><br/>
<label className="qustionlabel">Explanation <span className="star">*</span></label>
      <CKEditor 
      editor={ClassicEditor}
      onReady={(editor) => {
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
     
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
      
/>
<label className="qustionlabel">Explanation Image <span className="star">*</span></label><br/>
<button className="choose"> Choose Image</button><br/>
<button className="create"> Continue</button>
</div>
</div>
</div>

</div>

      </div>
 
</>
  )
}

export default Codingcreate