import React, { useState } from "react";
import "./App.css";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Sidebar from "./sidebar/sidebar";
function Assessmentadd() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    const [sno, setsno] = useState("");
    const [examid, setexamid] = useState("");
    const [category, setCategory] = useState("");
    const [assessmentname, setAssessmentName] = useState("");
    const [nooftimes, setNoOfTimes] = useState("");
    const [assessmentpassword, setAssessmentPassword] = useState("");
    const [exametype, setExamType] = useState("");
    const [cutofftype, setCutoffType] = useState("");
    const [questionselection, setQuestionSelection] = useState("");
    const [assessmentreport, setAssessmentReport] = useState([]);
    const [assessmentflow, setAssessmentFlow] = useState("");
    const [assessmentadaptiveness, setAssessmentAdaptiveness] = useState("");

    const navigate = useNavigate();
    const useData2 = {
        sno:sno,
        category: category,
        assessmentname: assessmentname,
        assessmentpassword: assessmentpassword,
        exametype: exametype,
        cutofftype: cutofftype,
        questionselection: questionselection,
        assessmentreport: assessmentreport,
        assessmentflow: assessmentflow,
        nooftimes:nooftimes,
        assessmentadaptiveness: assessmentadaptiveness,
        examid:examid
    };

    const onSubmitForm3 = (e) => {
        e.preventDefault();

        if (sno,category, assessmentname, nooftimes, assessmentpassword, exametype, cutofftype, questionselection, assessmentreport, assessmentflow, examid,assessmentadaptiveness !== "") {
            axios
                .post("http://localhost:5020/assessment", useData2)
                .then((response) => {
                    if (response.status === 200) {
                        let jwtToken = response.data.token;
                        localStorage.setItem("token", jwtToken);

                        toast.success("Registration Successfull", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        navigate("/assessment");
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                    toast.error("Registration Failed");
                });
        } else {
            toast.warning("Enter the Required Details");
        }
    }
    const chartbox =()=>{
        navigate("/chat")
      }
    return (
        <div className="d-flex flex-row">
       <Sidebar/>
            
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
                                    <form>
                                        <div class="col-md-7">
                                        <label className="profilename1">Sno</label>
                                            <br />
                                            <input className="input" placeholder="select category" onChange={(e) => setsno(e.target.value)}
                                                value={sno} />

                                           <label className="profilename1">EmailId</label>
                                            <br />
                                            <input className="input" placeholder="select category" onChange={(e) => setexamid(e.target.value)}
                                                value={examid} />

                                            <label className="profilename1">Category</label>
                                            <br />
                                            <input className="input" placeholder="select category" onChange={(e) => setCategory(e.target.value)}
                                                value={category} />

                                            <div className="d-flex flex-row">
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">Assement Name</label><br />
                                                    <input placeholder="Enter assessment name" className="input1" onChange={(e) => setAssessmentName(e.target.value)}
                                                        value={assessmentname} />
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">No of Times</label><br />
                                                    <input placeholder="Enter Time" className="input1" onChange={(e) => setNoOfTimes(e.target.value)}
                                                        value={nooftimes} />
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">Assement Password</label><br />
                                                    <input placeholder="Enter password" className="input1" onChange={(e) => setAssessmentPassword(e.target.value)}
                                                        value={assessmentpassword} />
                                                </div>

                                            </div>
                                            <div className="d-flex flex-row">
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">Exame Type</label><br />
                                                    <select className="input1" onChange={(e) => setExamType(e.target.value)}>
                                                        <option>---select option--</option>
                                                        <option value=" Single Timer">  Single Timer</option>
                                                        <option value="Sectional wise timer">Sectional wise timer</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="d-flex flex-column">
                                                    <label className="profilename1">Cutoff Type</label><br />
                                                    <select className="input1" onChange={(e) => setCutoffType(e.target.value)}
                                                    >
                                                        <option>---select option--</option>
                                                        <option value="Single Cutoff">Single Cutoff</option>
                                                        <option value="Sectional Cutoff">Sectional Cutoff</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="d-flex flex-column col-md-5">
                                                    <label className="profilename1">Question Selection</label><br />
                                                    <select className="input1" onChange={(e) => setQuestionSelection(e.target.value)}>
                                                        <option>---select option--</option>
                                                        <option value="Random">Random</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <label className="profilename1">Assessment Report Options</label><br />
                                            <div className="container showoption">

                                                <div className="row">
                                                    <div className="d-flex flex-row">
                                                        <div className="col-12 col-md-4 m-3">
                                                            <input
                                                                type="checkbox"
                                                                name="assessmentreport"
                                                                value="Show Reports"
                                                                onChange={(e) => setAssessmentReport(e.target.value)}
                                                            />
                                                            <span>Show Reports</span>
                                                        </div>
                                                        <div className="col-12 col-md-7 m-3">
                                                            <input
                                                                type="checkbox"
                                                                name="assessmentreport"
                                                                value="Show Qualifying percentager"
                                                                onChange={(e) => setAssessmentReport(e.target.value)}
                                                            />
                                                            <span>Show Qualifying percentage</span>
                                                        </div>
                                                        <div className="col-12 col-md-6 m-3">
                                                            <input
                                                                type="checkbox"
                                                                name="assessmentreport"
                                                                value="Show Check answers"
                                                                onChange={(e) => setAssessmentReport(e.target.value)}
                                                            />
                                                            <span>Show Check answers</span>
                                                        </div>
                                                        <div className="col-12 col-md-6 m-3">
                                                            <input
                                                                type="checkbox"
                                                                name="assessmentreport"
                                                                value="Show Explanation"
                                                                onChange={(e) => setAssessmentReport(e.target.value)}
                                                            />
                                                            <span>Show Explanation</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row">
                                                        <div className="col-12 col-md-8 m-3">
                                                            <input
                                                                type="checkbox"
                                                                name="assessmentreport"
                                                                value="Show Chapter Wise Report"
                                                                onChange={(e) => setAssessmentReport(e.target.value)}
                                                            />
                                                            <span>Show Chapter Wise Report</span>
                                                        </div>
                                                        <div className="col-12 col-md-7 m-3">
                                                            <input
                                                                type="checkbox"
                                                                name="assessmentreport"
                                                                value="Show Accuracy Report"
                                                                onChange={(e) => setAssessmentReport(e.target.value)}
                                                            />
                                                            <span>Show Accuracy Report</span>
                                                        </div>
                                                        <div className="col-12 col-md-6 m-3">
                                                            <input
                                                                type="checkbox"
                                                                name="assessmentreport"
                                                                value="Show Leaderboard"
                                                                onChange={(e) => setAssessmentReport(e.target.value)}
                                                            />
                                                            <span>Show Leaderboard</span>
                                                        </div>
                                                    </div>
                                                    <div className="m-3">
                                                        <input
                                                            type="checkbox"
                                                            name="assessmentreport"
                                                            value="Show Private Testcases Output"
                                                            onChange={(e) => setAssessmentReport(e.target.value)}
                                                        />
                                                        <span>Show Private Testcases Output</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="profilename1">Assessment Flow</label>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input
                                                        type="radio"
                                                        name="assessmentflow"
                                                        value="Non-Linear"
                                                        onChange={(e) => setAssessmentFlow(e.target.value)}
                                                    />
                                                    <span className="ravi">Non-Linear</span>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        type="radio"
                                                        name="assessmentflow"
                                                        value="Linear"
                                                        onChange={(e) => setAssessmentFlow(e.target.value)}
                                                    />
                                                    <span className="ravi">Linear</span>
                                                </div>
                                            </div>
                                            <label className="profilename1">Assessment Adaptiveness</label>
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="assessmentadaptiveness"
                                                    value="Non-Adaptive"
                                                    onChange={(e) => setAssessmentAdaptiveness(e.target.value)}
                                                />
                                                <span className="ravi">Non-Adaptive</span>
                                            </div>
                                        </div>
                                        <button className="creat12" onClick={onSubmitForm3}>Submit</button>
                                    </form>
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