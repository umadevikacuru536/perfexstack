
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
  {/* <form class="">
                            <label for="" class="profilename">
                              S.NO
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your full institution"
                              class="form-control"
                              onChange={(e) => setsno(e.target.value)}
                              value={sno}

                            />
                            <label for="" class="profilename">
                              Institution Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your full institution"
                              class="form-control"
                              onChange={(e) => setname(e.target.value)}
                              value={name}

                            />
                            <label for="" class="profilename">
                              Head Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your full institution"
                              class="form-control"
                              onChange={(e) => sethead(e.target.value)}
                              value={head}
                            />
                            <div class="d-flex flex-row">
                              <div class="col-md-6 aa">
                                <label for="" class="profilename">
                                  Primary email
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter  Primary email"
                                  class="form-control12"
                                  onChange={(e) => setemail(e.target.value)}
                                  value={email}
                                />
                              </div>
                      
                              <div class="col-md-4">
                                <label for="" class="profilename">
                                  Primary Contact
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter your  Primary count"
                                  class="form-control13"
                                  onChange={(e) => setprimarycontact(e.target.value)}
                                  value={primarycontact}
                                />
                              </div>
                            </div>
                            <div class="d-flex flex-row">
                              <div class="col-md-6 aa">
                                <label for="" class="profilename">
                                  Secondary email
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter Secondary email"
                                  class="form-control12"
                                  onChange={(e) => setsecondaryemail(e.target.value)}
                                  value={secondaryemail}
                                />
                              </div>
                              
                              <div class="col-md-4">
                                <label for="" class="profilename">
                                  Secondary Contact
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter your  Secondary count"
                                  class="form-control13"
                                  onChange={(e) => setsecondarycontact(e.target.value)}
                                  value={secondarycontact}
                                />
                              </div>
                            </div>
                            <label for="" class="profilename">
                              Address
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your Address"
                              class="form-control"
                              onChange={(e) => setaddress(e.target.value)}
                              value={address}
                            />
                            <label for="" class="profilename">  City Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your City"
                              class="form-control"
                              onChange={(e) => setcity(e.target.value)}
                              value={city}
                            />

                            <label for="institution-code" class="profilename">
                              Institution code</label><br />
                            <input
                              type="text"
                              placeholder="Enter your Code"
                              class="form-control"
                              onChange={(e) => setcode(e.target.value)}
                              value={code}
                            />
                            <br />

                            <label for="institution-code" class="profilename">
                              Userscount</label><br />
                            <input
                              type="text"
                              placeholder="Enter your Count"
                              class="form-control"
                              onChange={(e) => setuserscount(e.target.value)}
                              value={userscount}
                            />
                            <br />
                            <label for="" class="profilename"> Institution Type</label><br />
                            <select name="sort-order" id="sort-order"onChange={(e) => setInstitutionType(e.target.value)}
                              value={InstitutionType}>
                              <option value="asc">School</option>
                              <option value="desc">Collage</option>
                              <option value="desc">Trinning</option>
                              <option value="desc">NGO</option>
                            </select>
                            <br />
                            <label for="" class="profilename">  Access plan </label><br />
                            <select name="sort-order" id="sort-order"onChange={(e) => setAccessplan(e.target.value)}
                              value={Accessplan}>
                              <option value="asc">Exam practice</option>
                              <option value="desc">LMS</option>
                              <option value="desc">College</option>
                              <option value="desc">NGO</option>
                            </select>
                            <br />
                            <label htmlFor="password" className="loginemail">Password</label><br />
                            <div className="input-container">
                              <input
                                type="password"
                                name="password"
                                id="password"
                                className="logininput1"
                                onChange={(e) => setpassword(e.target.value)}
                                value={password}
                                placeholder="Minimum 6 characters"

                              />
                            
                            </div>

                          
                            <button class="profilebutton" onClick={onSubmitForm3}>Add Details</button>
                          </form> */}