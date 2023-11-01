import React, { useState } from "react";
import "./App.css";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Assessmentadd() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    const [sno, setsno] = useState("");
    const [examid, setexamid] = useState("");
    const [category, setcategory] = useState("");
    const [assessmentname, setassessmentname] = useState("");
    const [exametype, setexametype] = useState("");
    const [nooftimes, setnooftimes] = useState("");
    const [assessmentpassword, setassessmentpassword] = useState("");
    const [cutofftype, setcutofftype] = useState("");
    const [questionselection, setquestionselection] = useState("");
    const [assessmentreport, setassessmentreport] = useState("");
    const [assessmentflow, setassessmentflow] = useState("");
    const [assessmentadaptiveness, setassessmentadaptiveness] = useState("");

  
    const [data2, setdata2] = useState([]);
    const useData2 = { 
        category:category, 
        assessmentname:assessmentname, 
        nooftimes:nooftimes, 
        assessmentpassword:assessmentpassword, 
        exametype:exametype, 
        cutofftype:cutofftype, 
        questionselection:questionselection, 
        assessmentreport:assessmentreport, 
        assessmentflow:assessmentflow,
        assessmentadaptiveness:assessmentadaptiveness
      };
    const onSubmitForm3 = (e) => {
        e.preventDefault();
    
        if ( category, assessmentname, nooftimes, assessmentpassword, exametype, cutofftype, questionselection, assessmentreport, assessmentflow,
        assessmentadaptiveness !== "") {
          axios
            .post("http://localhost:5020/assessment", useData2)
            .then((response) => {
              setdata2(response.data);
    
              console.log(response.data);
              toast.success("Registration Successfull");
            })
            .catch((error) => {
              console.log(error.message);
            });
        } else {
          toast.warning("Enter the Required Details");
        }
      };
    return (
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
            <div className="ram">
                <div class="modal-dialog99">
                    <div class="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h3>CREATE ASSESSMENT</h3>
                            <Link to="/assessment"><button type="button" class="btn-close"></button></Link>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">
                            <div class="text-start">
                                <div class="row">
                                <ToastContainer
                      position="top-right"
                      autoClose={1000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="colored"
                    />
                                    <from>
                                        <div class="col-md-7">
                                            <label className="profilename1">Category</label>
                                            <br />
                                            <input className="input" placeholder="select category" onChange={(e) => setcategory(e.target.value)}
                              value={category}/>
                                               
                                            <div className="d-flex flex-row">
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">Assement Name</label><br />
                                                    <input placeholder="Enter assessment name" className="input1" onChange={(e) => setassessmentname(e.target.value)}
                              value={assessmentname} />
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">No of Times</label><br />
                                                    <input placeholder="Enter Time" className="input1" onChange={(e) => setnooftimes(e.target.value)}
                              value={nooftimes}/>
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">Assement Password</label><br />
                                                    <input placeholder="Enter password" className="input1" onChange={(e) => setassessmentpassword(e.target.value)}
                              value={assessmentpassword}/>
                                                </div>

                                            </div>
                                            <div className="d-flex flex-row">
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">Exame Type</label><br />
                                                   <select className="input1" onChange={(e) => setexametype(e.target.value)}
                              value={exametype}>
                                                    <option>---select option--</option>
                                                  <option>Single Timer</option>
                                                  <option>Sectional wise timer</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">Cutoff Type</label><br />
                                                    <select className="input1" onChange={(e) => setcutofftype(e.target.value)}
                             >
                                                    <option>---select option--</option>
                                                  <option value="Single Cutoff">Single Cutoff</option>
                                                  <option value="Single Cutoff">Sectional Cutoff</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="d-flex flex-column col-md-5">
                                                    <label className="profilename1">Question Selection</label><br />
                                                    <select className="input1"onChange={(e) => setquestionselection(e.target.value)}
                              value={questionselection}>
                                                    <option>---select option--</option>
                                                  <option>Random</option>
                                                   </select>
                                                </div>

                                            </div>
                                            <label className="profilename1">Assessment Report Options</label><br />
                                            <div className="container showoption">
                                                <div className="row">
                                                <div className="d-flex flex-row">
                                                    <div className="col-12 col-md-4 m-3">
                                                   <input type="checkbox"onChange={(e) => setassessmentreport(e.target.value)}
                              value={assessmentreport} /> <span>Show Reports </span>
                                                    </div>
                                                    <div className="col-12 col-md-7  m-3">
                                                    <input type="checkbox"onChange={(e) => setassessmentreport(e.target.value)}
                              value={assessmentreport} /><span>Show Qualifying percentage </span>
                                                    </div>
                                                    <div className="col-12 col-md-6  m-3">
                                                    <input type="checkbox" onChange={(e) => setassessmentreport(e.target.value)}
                              value={assessmentreport}/><span>Show Check answers </span>
                                                    </div>
                                                    <div className="col-12 col-md-6  m-3">
                                                    <input type="checkbox"onChange={(e) => setassessmentreport(e.target.value)}
                              value={assessmentreport} /><span>Show Explanation </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row ">
                                                    <div className="col-12 col-md-8  m-3">
                                                   <input type="checkbox" onChange={(e) => setassessmentreport(e.target.value)}
                              value={assessmentreport} /> <span >Show Chapter Wise Report</span>
                                                    </div>
                                                    <div className="col-12 col-md-7  m-3">
                                                   <input type="checkbox"onChange={(e) => setassessmentreport(e.target.value)}
                              value={assessmentreport} /> <span>Show Accuracy Report </span>
                                                    </div>
                                                    <div className="col-12 col-md-6  m-3">
                                                   <input type="checkbox"onChange={(e) => setassessmentreport(e.target.value)}
                              value={assessmentreport} /> <span>Show Leaderboard </span>
                                                    </div>
                                                </div>
                                                <div className=" m-3">
                                                <input type="checkbox" onChange={(e) => setassessmentreport(e.target.value)}
                              value={assessmentreport}/><span>Show Private Testcases Output </span>
                                                </div>
                                                </div>
                                            </div>
                                            <label className="profilename1">Assessment Flow</label>
                                            <div className="row">
                                                <div className="col-md-6">
                                                <input type="radio" onChange={(e) => setassessmentflow(e.target.value)}
                              value={assessmentflow}/>  <span className="ravi">Non-Linear </span></div>
                                                <div className="col-md-6">
                                                <input type="radio" onChange={(e) => setassessmentflow(e.target.value)}
                              value={assessmentflow}/>  <span className="ravi">Linear </span></div>
                                            </div>
                                            <label className="profilename1">Assessment Adaptiveness</label><br />
                                          <input type="radio"onChange={(e) => setassessmentadaptiveness(e.target.value)}
                              value={assessmentadaptiveness} />  <span className="ravi">Non-Adaptive </span>
                                        </div>
                                        <button className="creat12" onClick={onSubmitForm3}>Submit</button>
                                    </from>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assessmentadd;