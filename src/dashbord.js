
import React, { useState } from "react";
import { Link, BrowserRouter as Router, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./sidebar/sidebar";
import Cookies from 'js-cookie';
function Dashboard() {

  return (
    <>
    
    <div className="d-flex flex-row">
    <Sidebar/>
    
    <div className="dashborcard shadow w-75" >
        <h6 className="dashbordheading">Welcome back!</h6>
        <h3 className="dashbordheading"> GSB Gold Standard</h3>
        <div className="container">
            <div className=" d-flex flex-row ">
                <button className="col-md-3 dashbord">
                <Link to="/admin"> <p className="bashbordname">Instutions</p></Link>
                    <span className="dashbordpara">1</span>
                </button >
                <div className="col-md-1"></div>
                <button className="col-md-3 dashbord">
                <Link to="/users">   <p className="bashbordname">Users</p></Link>
                    <span className="dashbordpara">0</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-3 dashbord">
                    <p className="bashbordname">Active Users</p>
                    <span className="dashbordpara">0</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-3 dashbord">
                <Link to="/assessment"> <p className="bashbordname">Assessments</p></Link>
                    <span className="dashbordpara">0</span>
                </button>
                <div className="col-md-2"></div>
               <button className="col-md-3 dashbord">
               <Link to="/courses"> <p className="bashbordname">Courses</p></Link>
                    <span className="dashbordpara">0</span>
                </button>
                <div className="col-md-2"></div>
                <button className="col-md-3 dashbord">
                    <p className="bashbordname">Qustions</p>
                    <span className="dashbordpara">0</span>
                </button>
            </div><br/>

        </div>
        <div className=" d-flex flex-row" style={{marginTop:"100px"}}>
                <button className="col-md-2 mx-2 dashbord">
                    <p className="bashbordname">Assessment Participation</p>
                    <span className="dashbordpara">0</span>
                </button >
                <div className="col-md-1"></div>
                <button className="col-md-2 dashbord">
                    <p className="bashbordname">Questions Attempted</p>
                    <span className="dashbordpara">0</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-2 dashbord">
                    <p className="bashbordname">Coding Submissions</p>
                    <span className="dashbordpara">0</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-2 dashbord">
                    <p className="bashbordname">Testcases Executed</p>
                    <span className="dashbordpara">0</span>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-2 dashbord">
                    <p className="bashbordname">Courses Enrolles</p>
                    <span className="dashbordpara">1</span>
                </button>
            </div>
            <div className=" d-flex flex-row" style={{marginTop:"100px"}}>
                <button className="col-md-2  mx-4 dashbord">
                    <p className="bashbordname">Rt Tests</p>
                    <span className="dashbordpara">0</span>
                </button >
                <div className="col-md-1"></div>
                <button className="col-md-6 dashbord">
                    <p className="bashbordname">Speaking Evaluations</p>
                    <div className="d-flex flex-row mx-5">
                    <span className="dashbordpara"> 0/0</span>
                    <span className="dashbordpara">Usage/Limit</span>
                    
                    <div className="mx-5">
                        <span className="dashbordpara">RS .0</span>
                        <span className="dashbordpara">Usage/Limit</span>
                    </div>
                    </div>
                </button>
                <div className="col-md-1"></div>
                <button className="col-md-6 dashbord">
                <p className="bashbordname">Writing Evaluations</p>                   
                 <div className="d-flex flex-row mx-5">
                    <span className="dashbordpara">0/0</span>
                    <span className="dashbordpara">Usage/Limit</span>
                    
                    <div className="mx-5">
                        <span className="dashbordpara">RS .0</span>
                        <span className="dashbordpara">Usage/Limit</span>
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
 