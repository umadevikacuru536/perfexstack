import React from 'react'
import logo1 from '../sidebar/Skill-hub.png'
import './userdashbord.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
function Accuracy() {
    const [rangeValue, setRangeValue] = useState(0);

    // Step 3: Set up an event handler function to update the state
    const handleRangeChange = (event) => {
        setRangeValue(parseInt(event.target.value, 10));
    }; 
  return (
    <div> 
    <nav class="navbar navbar-expand-sm shadow bg-light navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={logo1} className='w-25' /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/userAssessment" style={{textDecoration:"none"}}>  <a class="nav-link" href="#">Assessment</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/usersCourses" style={{textDecoration:"none"}}> <a class="nav-link" href="#">Courses</a></Link>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="#">Code</a>
                    </li>
                    <li class="nav-item">
                    <Link to="/Userpratice" style={{textDecoration:"none"}}> <a class="nav-link" href="#">Practice</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/Usersblogs" style={{textDecoration:"none"}}> <a class="nav-link" href="#">Blogs</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/dashbordhome" style={{textDecoration:"none"}}>  <a class="nav-link" href="#">Dashboard</a></Link>
                    </li>
                    <li class="nav-item">
                        <button className='logout'>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      
    <div className=''>
      <h1 className='text-center'>Your Recent Accuracy</h1>
      <button className='assementbutton'style={{marginBottom:"300px"}}>
          <div >
           
         <h4>Accuracy of Java_programming</h4>
          <h6>Other</h6>
          <p>Questions Solved: 32 Corretly Solved:7</p>
          </div>
          <div style={{marginLeft:"480px"}}>
          <p style={{ marginLeft: "300px", fontSize: "25px" }}> {rangeValue}%</p>
          <input
                        type='range'
                        value={rangeValue}
                        onChange={handleRangeChange}
                        className='progress w-75'
                   
                    />
                   
          </div>
      </button>
     
    
     
     
   
     
      </div>
   
    <footer class="container-fluid d-flex flex-row bg-black " >
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-lg-3 ">
                    <img
                        src={logo1}
                        class=" w-100"
                    />
                    <p style={{ color: "white" }}>Powered by Instacks</p>
                    <p style={{ color: "white" }}>Loading Assassment Provider in India</p>
                    <div className='d-flex flex-row p-3'>
                        <button className='umadevi'><i class="fa-brands fa-facebook"></i></button>
                        <button className='umadevi1'><i class="fa-brands fa-instagram"></i></button>
                        <button className='umadevi2'><i class="fa-brands fa-twitter"></i></button>
                        <button className='umadevi'><i class="fa-brands fa-linkedin"></i></button>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-lg-3">
                    <h5 style={{ color: "white" }}>Company</h5>

                    <p>
                        <i
                            class="fa-solid fa-greater-than"
                            style={{ color: "white", margin: "10px" }}></i>
                        <span style={{ color: "white" }}>About us</span>
                    </p>
                    <p>
                        <i
                            class="fa-solid fa-greater-than"
                            style={{ color: "white", margin: "10px" }}
                        ></i>
                        <span style={{ color: "white" }}>Services</span>
                    </p>
                    <p style={{marginLeft:"82px"}}>
                        <i
                            class="fa-solid fa-greater-than"
                            style={{ color: "white", margin: "10px" }}
                        ></i>
                        <span style={{ color: "white" }}>Terms and Conditions</span>
                    </p>
                    <p>
                        <i
                            class="fa-solid fa-greater-than"
                            style={{ color: "white", margin: "10px" }}
                        ></i>
                        <span style={{ color: "white" }}>Contact Us</span>
                    </p>
                </div>
                <div class="col-md-3 col-sm-6 col-lg-3">
                    <h5 style={{ color: "white" }}>Usefull Links</h5>

                    <p>
                        <i
                            class="fa-solid fa-greater-than"
                            style={{ color: "white", margin: "10px" }}
                        ></i>
                        <span style={{ color: "white" }}>Assessments</span>
                    </p>
                    <p>
                        <i
                            class="fa-solid fa-greater-than"
                            style={{ color: "white", margin: "10px" }}
                        ></i>
                        <span style={{ color: "white" }}>Courses</span>
                    </p>
                </div>


            </div>

        </div>

    </footer>
    </div>
  )
}

export default Accuracy;