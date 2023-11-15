import React from 'react'
import logo1 from '../sidebar/Skill-hub.png'
import './userdashbord.css'
import { useState, useEffect } from 'react';
function Dashbordhome() {
    const [style, setStyle] = useState({});
    useEffect(() => {
        const newStyle = {
            opacity: 1,
            width: "180px",
        };

        setStyle(newStyle);
    }, []);

    return (
        <div className='container d-flex flex-column'>

            <nav class="navbar navbar-expand-sm shadow bg-light navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo1} className='w-25' /></a>
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
                        <div className='col-md-6'>
                            <h3>Welcom ashok</h3>
                            <p>Email:ashok76@gmail.com</p>
                            <div className='d-flex flex-row'>
                                <button className='changebtn'>Reported Issues</button>
                                <button className='changebtn'>Change Password</button>
                            </div>
                            <button className='logout'>Logout</button>
                        </div>

                        <div className='col-md-6'>
                            <p>Organization:corporate Office</p><br />
                            <p>Batch:2023_10_Batch_001-2023</p><br />
                            <p>ID No:gsb021</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 Details1'>
                    <h3>Your Overall Accuracy</h3>
                    {/* <div className="progress">
                        <div className="progress-done" style={style}>
                            <span className='progress1'>50%</span>
                        </div>
                    </div> */}
                    <input type='range' className='progress'/>
                </div>
            </div>
            <div className='d-flex flex-row'>
                <div className='col-md-3 shadow cards'>
                    <h5>Assessment Activity</h5>
                    <p>Completed:3/14</p>
                    <p>Yet to Start:10/14</p>
                    <p>View Recent Assessment </p>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-3  shadow cards'>
                    <h5>Course Activity</h5>
                    <p>InProgress:6/7</p>
                    <p>Yet to Start:1/7</p>
                    <p>View Recent Course </p>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-3  shadow cards'>
                    <h5>Practice Activity</h5>
                    <p>Completed:0/44</p>
                    <p>Yet to Start:42/44</p>
                    <p>View Recent Practice</p>
                </div>

            </div>
            <div className='d-flex flex-row'>
                <div className='col-md-6 shadow cards1'>
                    <h5>MCQ:Subject Level Accuracy</h5>
                    <p>Java_programming</p>
                    <div className="progress11">
                        <div className="progress-done" style={style}>
                            <span className='progress1'>50%</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-6 shadow cards1'>
                   
                    <p>Coding:programming Wise Accuracy</p>
               
                </div>

            </div>
            <div className='col-md-6 shadow cards1'>
                <h5>Assessment Activity</h5>
                <p>Completed:3/14</p>
                <p>Yet to Start:10/14</p>
                <p>View Recent Assessment </p>
            </div>
        </div>
    )
}

export default Dashbordhome