import React, { useState,useEffect } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import "./App.css"; // You can create an App.css file for styling
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function Admin(){
    const [navItemsVisible, setNavItemsVisible] = useState(false);
    const [blogslist, setblogslist] = useState([]);

    const toggleNavItems = () => {
      setNavItemsVisible(!navItemsVisible);
    };


    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const validatePassword = (value) => {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
      
        if (!regex.test(value)) {
          setPasswordError("Password must contain at least one capital letter, one lowercase letter, one special character, and one number, and be at least 8 characters long");
        } else {
          setPasswordError("");
        }
      };
      const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
      };
   
      useEffect(() => {
        fetchblogs();
      });
    
      const fetchblogs = async () => {
        const api = " http://localhost:5020/alladmin";
        try {
          const response = await axios.get(api, {
           
          });
          setblogslist(response.data);
         
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
    
    return(
        <div className="d-flex flex-row">
             <div className="container">
      <div className={`nav-bar ${!navItemsVisible ? "hidden" : ""}`}>
        
        <div className="toggle-button" onClick={toggleNavItems}>
          
         <img src={logo} className='image1' />
         <FaBars />
        </div>
        {navItemsVisible && (
          <ul className="nav-list">
            <li className="list">
              <a href="/">Dash Board</a>
            </li>
            <li className="list">
              <a href="/about">Home page</a>
            </li> 
          </ul>
        )}
      </div>
     
             </div>
             <div className="admin">
                <div className="d-flex flex-row">
  <h3>Insitutions</h3>
  {/* <Link to="/crate"> <button className="creat">Create +</button></Link> */}
             <div className="edit">
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ marginLeft: "400px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
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
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                          <div class="container text-start">
          <div class="row">
            <div className="col-md-2"></div>
            <div class="col-md-7">
              <form class="p-3 ">
                <label for="" class="profilename">
                Institution
                </label>
                <input
                  type="text"
                  placeholder="Enter your full institution"
                  class="form-control"
                 
                />
                <div class="d-flex flex-row">
                  <div class="col-md-4">
                    <label for="" class="profilename">
                     Primary email
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter  Primary email"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-2"></div>
                  <div class="col-md-4">
                    <label for="" class="profilename">
                    Primary Count
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your  Primary count"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="d-flex flex-row">
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                    Secondary email
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Secondary email"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-2"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                    Secondary Count
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your  Secondary count"
                      class="form-control"
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
                />
                  <label for="" class="profilename">  City
                </label>
                <input
                  type="text"
                  placeholder="Enter your City"
                  class="form-control"
                />
               
               <label for="institution-code" class="profilename">
  Institution code</label><br/>
  <select name="sort-order" id="sort-order">
    <option value="asc">University</option>
    <option value="desc">INstitude</option>
    <option value="desc">Trinning</option>
    <option value="desc">NGO</option>
  </select>
<br/>
                 <label for="" class="profilename"> Institution Type</label><br/>
                 <select name="sort-order" id="sort-order">
    <option value="asc">School</option>
    <option value="desc">Collage</option>
    <option value="desc">Trinning</option>
    <option value="desc">NGO</option>
  </select>
                <br/>
                 <label for="" class="profilename">  Action plan </label><br/>
                 <select name="sort-order" id="sort-order">
    <option value="asc">Exam practice</option>
    <option value="desc">LMS</option>
    <option value="desc">College</option>
    <option value="desc">NGO</option>
  </select>
               <br/>
               <label htmlFor="password" className="loginemail">Password</label><br />
               <div className="input-container">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    id="password"
    className="logininput1"
    value={password}
    placeholder="Minimum 6 characters"
    onChange={handlePasswordChange}
  />
  <i className="password-toggle" onClick={togglePasswordVisibility}>
    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </i>
</div>

                 {passwordError && (
                      <span className="error mes">{passwordError}</span>
                    )}<br/>
                <button class="profilebutton">Add Details</button>
              </form>
            </div>
          </div>
        </div>
                          </div>
                           
                        </div>
                      </div>
                    </div>
                  </div>
   </div>
   <table className="table">
  <thead>
    <tr>
      <th>S.NO</th>
      <th>Name</th>
      <th>Email</th>
      <th>Head</th>
      <th>Users Count</th>
      <th>Code</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {blogslist.map((blog) => (
      <tr key={blog.sno}>
        <td>{blog.sno}</td>
        <td>{blog.name}</td>
        <td>{blog.email}</td>
        <td>{blog.head}</td>
        <td>{blog.userscount}</td>
        <td>{blog.code}</td>
        <td>
        <i className="" onClick={togglePasswordVisibility}>
    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </i><span class="material-symbols-outlined">
edit_square
</span><span class="material-symbols-outlined">
delete
</span>
        </td>
      </tr>
      
    ))}
  </tbody>
</table>


</div>

        </div>
    )
}
export default Admin;