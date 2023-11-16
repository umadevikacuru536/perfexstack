import React from 'react'
import logo1 from '../sidebar/Skill-hub.png'
import './userdashbord.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Dashbordhome() {
    const [rangeValue, setRangeValue] = useState(0);

    // Step 3: Set up an event handler function to update the state
    const handleRangeChange = (event) => {
        setRangeValue(parseInt(event.target.value, 10));
    }; const [rangeValue1, setRangeValue1] = useState(0);

    // Step 3: Set up an event handler function to update the state
    const handleRangeChange1 = (event) => {
        setRangeValue1(parseInt(event.target.value, 10));
    };
    return (
        <>
        <div className='container d-flex flex-column'>

            <nav class="navbar navbar-expand-sm shadow bg-light navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo1} className='w-75' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Assessment</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Code</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Practice</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <button className='logout'>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='d-flex flex-row'>
                <div className='container Details'>
                    <div className='row'>
                        <div className='col-md-5 '>
                            <h3 className='detailsheading' >Welcom ashok</h3>
                            <p className='detailsheading'>Email:ashok76@gmail.com</p>
                            <div className='d-flex flex-row'>
                                <button className='changebtn'>Reported Issues</button>
                               <Link to="/changepassword"> <button className='changebtn'>Change Password</button></Link>
                            </div>
                            <button className='logout'>Logout</button>
                        </div>
                        <div className='col-md-5 mx-4'>
                            <p className='detailspara'>Organization:corporate Office</p><br />
                            <p className='detailspara'>Batch:2023_10_Batch_001-2023</p><br />
                            <p className='detailspara'>ID No:gsb021</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-6 Details1'>
                    <h3 className='detailsheading'>Your Overall Accuracy</h3>
                    <p style={{ marginLeft: "300px", fontSize: "25px" }}> {rangeValue}%</p>
                    <input
                        type='range'
                        value={rangeValue}
                        onChange={handleRangeChange}
                        className='progress1'
                        
                    />

                    {/* Display the current value of the range */}

                </div>
            </div>
            <div className='d-flex flex-row'>
                <div className='col-md-3 mx-1 shadow cards'>
                    <h5 className='detailsheading'>Assessment Activity</h5>
                    <p  className='detailspara'>Completed:3/14</p>
                    <p  className='detailspara'>Yet to Start:10/14</p>
                    <Link to="/viewassements"><p  className='detailspara'>View Recent Assessment </p></Link>
                </div>
                
                <div className='col-md-3  mx-3 shadow cards'>
                    <h5 className='detailsheading'>Course Activity</h5>
                    <p className='detailspara'>InProgress:6/7</p>
                    <p className='detailspara'>Yet to Start:1/7</p>
                    <Link to="/Coursesactivity"> <p className='detailspara'>View Recent Course </p></Link>
                </div>
            
                <div className='col-md-3 mx-3 shadow cards'>
                    <h5 className='detailsheading'>Practice Activity</h5>
                    <p  className='detailspara'>Completed:0/44</p>
                    <p  className='detailspara'>Yet to Start:42/44</p>
                    <Link to="/Practiceactivity">  <p  className='detailspara'>View Recent Practice</p></Link>
                </div>

            </div>
            <div className='d-flex flex-row'>
                <div className='col-md-6 shadow cards1'>
                    <h5 className='heading11'>MCQ:Subject Level Accuracy</h5>
                    <div className='d-flex flex-row'>
                    <p className='detailsheading'>Java_programming</p>
                    <p style={{ marginLeft: "300px", fontSize: "25px" }}> {rangeValue1}%</p>
                    </div>
                    <input
                        type='range'
                        value={rangeValue1}
                        onChange={handleRangeChange1}
                        className='progress'
                   
                    />
                   
                </div>
                
                <div className='col-md-6 shadow mx-5 cards12'>

                    <p className='heading11'>Coding:programming Wise Accuracy</p>

                </div>

            </div>
        </div>
        <footer class="container-fluid d-flex flex-row mt-5 bg-black">
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
                  style={{ color: "white", margin: "10px" }}
                ></i>
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
                <i class="fa-solid fa-greater-than"
                  style={{ color: "white", margin:"10px" }}
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
        </>
    )
}

export default Dashbordhome