
import React, { useState } from "react";
import { Link, BrowserRouter as Router, useNavigate } from "react-router-dom";

import Sidebar from "./sidebar/sidebar";
function Dashboard() {
  
const navigate= useNavigate()
  

  return (
    <>
    <div className="d-flex flex-row">
    <Sidebar/>
    <div className="dashborcard">
        <h6 className="dashbordheading">Welcome back!</h6>
        <h3 className="dashbordheading"> GSB Gold Standard</h3>
        <div className="container">
            <div className=" d-flex flex-row ">
                <button className="col-md-3 dashbord">
                <Link to="/admin"> <p className="bashbordname">Instutions</p></Link>
                    <span>1</span>
                </button >
                <div className="col-md-1"></div>
                <button className="col-md-3 dashbord">
                <Link to="/users">   <p className="bashbordname">Users</p></Link>
                    <span>1</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-3 dashbord">
                    <p className="bashbordname">Active Users</p>
                    <span>1</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-3 dashbord">
                <Link to="/assessment"> <p className="bashbordname">Assessments</p></Link>
                    <span>1</span>
                </button>
                <div className="col-md-2"></div>
               <button className="col-md-3 dashbord">
               <Link to="/courses"> <p className="bashbordname">Courses</p></Link>
                    <span>1</span>
                </button>
                <div className="col-md-2"></div>
                <button className="col-md-3 dashbord">
                    <p className="bashbordname">Qustions</p>
                    <span>1</span>
                </button>
            </div><br/>

        </div>
        <div className=" d-flex flex-row" style={{marginTop:"100px"}}>
                <button className="col-md-2 mx-2 dashbord">
                    <p className="bashbordname">Assessment Participation</p>
                    <span>1</span>
                </button >
                <div className="col-md-1"></div>
                <button className="col-md-2 dashbord">
                    <p className="bashbordname">Questions Attempted</p>
                    <span>1</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-2 dashbord">
                    <p className="bashbordname">Coding Submissions</p>
                    <span>1</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-2 dashbord">
                    <p className="bashbordname">Testcases Executed</p>
                    <span>1</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-2 dashbord">
                    <p className="bashbordname">Courses Enrolles</p>
                    <span>1</span>
                </button>
            </div>
            <div className=" d-flex flex-row" style={{marginTop:"100px"}}>
                <button className="col-md-2  mx-4 dashbord">
                    <p className="bashbordname">Rt Tests</p>
                    <span>1</span>
                </button >
                <div className="col-md-1"></div>
                <button className="col-md-6 dashbord">
                    <p className="bashbordname">Speaking Evaluations</p>
                    <div className="d-flex flex-row mx-5">
                    <span>0/0</span>
                    <span>Usage/Limit</span>
                    
                    <div className="mx-5">
                        <span>RS .0</span>
                        <span>Usage/Limit</span>
                    </div>
                    </div>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-6 dashbord">
                <p className="bashbordname">Writing Evaluations</p>                   
                 <div className="d-flex flex-row mx-5">
                    <span>0/0</span>
                    <span>Usage/Limit</span>
                    
                    <div className="mx-5">
                        <span>RS .0</span>
                        <span>Usage/Limit</span>
                    </div>
                    </div>
                </button>
            </div>
    </div> 
    </div>
  </>
  )
}

export default Dashboard;