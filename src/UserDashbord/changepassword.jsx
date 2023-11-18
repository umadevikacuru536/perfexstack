import React, { useState } from 'react'
import logo1 from '../sidebar/Skill-hub.png'
import './userdashbord.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
function Changepassword() {
    const [password, setpassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
   
    // let navigate=useNavigate()
    // useEffect(() => {
    //     fetchblogs();
    //   }, []);
    //   const fetchblogs = async () => {
    //     const api = "http://localhost:5020/alllogin";
    //     const authToken =
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s";
      
    //     try {
    //       const response = await axios.get(api, {
    //         headers: {
    //           Authorization: `Bearer ${authToken}`,
    //         },
    //       });
    //       if (response.data && Array.isArray(response.data)) {
    //         if (response.data.length > 0) {
    //           const lastIndex = response.data.length - 1;
    //           const lastMobileEl = response.data[lastIndex].password;
    //           console.log("Mobile Number at the last index:", lastMobileEl);
    //           setpassword(lastMobileEl)
    
              
    //         } else {
    //           console.error("The array is empty.");
    //         }
    //       } else {
    //         console.error("API response does not contain a valid array.");
    //       }
    //       toast.success("Data fetched successfully", {
    //         position: "top-right",      
    //         hideProgressBar: false, 
    //         closeOnClick: true,     
    //         pauseOnHover: true,     
    //         draggable: true, 
    //         autoClose: 1000,
    //         theme: "colored", 
                  
    //       });
    //       setTimeout(function () {
    //         navigate("");
    //       }, 3000);
    //     } catch (error) {
    //       console.error("Error fetching blogs:", error);
    //       toast.error("Error fetching data");
    //     }
    //   };
      const handleChangePassword = async () => {
        const api = 'http://localhost:5020/login-change-password';
        const authToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTcyY2NiMzA5N2JjMTUwNzk2MDAxYyIsImlhdCI6MTcwMDI4NDQ4NSwiZXhwIjoxNzAwMzcwODg1fQ.1kDLxIGgj7_9snw7HmghhaAma5bzjvjWiV1v6Xj1mjM'; // Replace with your actual JWT token
    
        try {
          const response = await axios.post(
            api,
            { newPassword },
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
    
          if (response.data.success) {
            toast.success('Password changed successfully', {
              position: 'top-right',
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              autoClose: 1000,
              theme: 'colored',
            });
    
            // Redirect or perform any other action after successful password change
          } else {
            toast.error('Error changing password');
          }
        } catch (error) {
          console.error('Error changing password:', error);
          toast.error('Error changing password');
        }
      };
    
    return (
        <>
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
                                    <Link to="/userAssessment" style={{ textDecoration: "none" }}>  <a class="nav-link" href="#">Assessment</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/usersCourses" style={{ textDecoration: "none" }}> <a class="nav-link" href="#">Courses</a></Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Code</a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Userpratice" style={{ textDecoration: "none" }}> <a class="nav-link" href="#">Practice</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Usersblogs" style={{ textDecoration: "none" }}> <a class="nav-link" href="#">Blogs</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/dashbordhome" style={{ textDecoration: "none" }}>  <a class="nav-link" href="#">Dashboard</a></Link>
                                </li>
                                <li class="nav-item">
                                    <button className='logout'>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='changepassword '>
                    <h2 className='text-center'>Change Password ?</h2>
                    <label className='profilename'> Password<span style={{ color: "red", fontSize: "20px" }}>*</span></label><br />
                    <input className='input1 w-75' 
                     
                      />
                    {/* <button className='btn btn-primary mt-3' onClick={handleChangePassword}>
            Change Password
          </button> */}
                    <h6 className='detailsheading'>Password should contain:</h6>
                    <div className='dot'>
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Password Requirements:</h5>
                                    <ul>
                                        <li>Minimum 8 Characters</li>
                                        <li>1 Small Letter</li>
                                        <li>1 Capital Letter</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5>Additional Requirements:</h5>
                                    <ul>
                                        <li>1 Number</li>
                                        <li>1 Special Character</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

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
                            <p style={{ marginLeft: "82px" }}>
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
        </>
    )
}

export default Changepassword