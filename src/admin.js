import React, { useState, useEffect } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import "./App.css"; // You can create an App.css file for styling
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Eye from "./eye";
import { useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate()
  const [navItemsVisible, setNavItemsVisible] = useState(false);
  const [blogslist, setblogslist] = useState([]);
  const handleEmailSubmit = () => {
    // You can add validation here if needed
    console.log("Email:", email);
    navigate(`/detial?email=${email}`);
  };
  const toggleNavItems = () => {
    setNavItemsVisible(!navItemsVisible);
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    fetchblogs();
  });
  const [formData, setFormData] = useState({
    sno: "",
    name: "",
    email: "",
    head: "",
    secondaryemail: "",
    userscount: "",
    primarycontact: "",
    secondarycontact: "",
    address: "",
    city: "",
    password: "",
    code: ""
    // Add other form fields here
  });
  const [emailDetail, setEmailDetail] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send an HTTP request to update the MongoDB document
    axios
      .put(`http://localhost:5020/update-data/${email}`, formData)
      .then((response) => {
        if (response.data.success) {
          console.log("Data updated successfully");
        } else {
          console.error("Data update failed");
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const fetchblogs = async () => {
    const api = "http://localhost:5020/alladmin";
    try {
      const response = await axios.get(api, {

      });
      setblogslist(response.data);

    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const [sno, setsno] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [head, sethead] = useState("");
  const [secondaryemail, setsecondaryemail] = useState("");
  const [userscount, setuserscount] = useState("");
  const [primarycontact, setprimarycontact] = useState("");
  const [secondarycontact, setsecondarycontact] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [password, setpassword] = useState("");
  const [code, setcode] = useState("");

  const [data2, setdata2] = useState([]);

  const useData2 = {
    sno: sno,
    name: name,
    email: email,
    head: head,
    secondaryemail: secondaryemail,
    userscount: userscount,
    primarycontact: primarycontact,
    secondarycontact: secondarycontact,
    address: address,
    city: city,
    password: password,
    code: code
  };
  // const updatedData = {
  //   sno:"",
  //   name:"",
  //   email:"",
  //   head:"",
  //   secondaryemail:"",
  //   userscount:"",
  //   primarycontact:"",
  //   secondarycontact:"",
  //   address:"",
  //   city:"",
  //   password:"",
  //   code:""
  // };

  const onSubmitForm3 = (e) => {
    e.preventDefault();

    if (sno, name, email, head, secondaryemail, userscount, primarycontact, secondarycontact, address, city, password,
      code !== "") {
      axios
        .post("http://localhost:5020/admin", useData2)
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
  const [Error, setError] = useState("");

  const handleDelete = async (id) => {
    try {
      if (!id) {
        setError("Invalid ID provided for deletion.");
        return;
      }
      console.log("Deleting institute with ID:", id);
      const response = await axios.delete(
        " http://localhost:5020/deleteInstitute/" + id
      );
      if (response.status === 200) {
        alert("Success: Institute deleted");
        fetchblogs();

        // Update your state or fetch updated data as needed
        // For example, if addblogslist is updated from the server, you can update it here.

        const updatedListLength = blogslist.length - 1;
        console.log("Updated list length:", updatedListLength);
      } else {
        console.log(response.data);
        alert("Error: " + response.data);
        setError("An error occurred while deleting the institute.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the institute.");
    }
  };




  return (
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
          <h3>Institutions</h3>
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
                        <div class="col-md-7">
                          <form class="">
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
                              <div class="col-md-4">
                                <label for="" class="profilename">
                                  Primary email
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter  Primary email"
                                  class="form-control"
                                  onChange={(e) => setemail(e.target.value)}
                                  value={email}
                                />
                              </div>
                              <div class="col-md-2"></div>
                              <div class="col-md-4">
                                <label for="" class="profilename">
                                  Primary Contact
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter your  Primary count"
                                  class="form-control"
                                  onChange={(e) => setprimarycontact(e.target.value)}
                                  value={primarycontact}
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
                                  onChange={(e) => setsecondaryemail(e.target.value)}
                                  value={secondaryemail}
                                />
                              </div>
                              <div class="col-md-2"></div>
                              <div class="col-md-4">
                                <label for="" class="profileh5 mb-1">
                                  Secondary Contact
                                </label>
                                <br />
                                <input
                                  type="text"
                                  placeholder="Enter your  Secondary count"
                                  class="form-control"
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
                            <select name="sort-order" id="sort-order">
                              <option value="asc">School</option>
                              <option value="desc">Collage</option>
                              <option value="desc">Trinning</option>
                              <option value="desc">NGO</option>
                            </select>
                            <br />
                            <label for="" class="profilename">  Access plan </label><br />
                            <select name="sort-order" id="sort-order">
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
                              <i className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                              </i>
                            </div>

                            {/* {passwordError && (
                      <span className="error mes">{passwordError}</span>
                    )}<br/> */}
                            <button class="profilebutton" onClick={onSubmitForm3}>Add Details</button>
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
                  <div className="A">
                    <Link to={`/detial?email=${blog.email}`} className="fa-solid fa-eye " style={{ color: "black" }}></Link>
                    <span class="material-symbols-outlined" data-bs-toggle="modal"
                      data-bs-target="#myModal1" >edit_square</span>
                    <div class="modal" id="myModal1">
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
                                <div class="col-md-7">
                                  <form class="" onSubmit={handleSubmit}>
                                    <label for="" class="profilename">
                                      S.NO
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Enter your full institution"
                                      class="form-control"
                                      value={formData.sno}
                                      onChange={handleChange}

                                    />
                                    <label for="" class="profilename">
                                      Institution Name
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Enter your full institution"
                                      class="form-control"
                                      value={formData.name}
                                      onChange={handleChange}

                                    />
                                    <label for="" class="profilename">
                                      Head Name
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Enter your full institution"
                                      class="form-control"
                                      value={formData.head}
                                      onChange={handleChange}
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
                                          value={formData.email}
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div class="col-md-2"></div>
                                      <div class="col-md-4">
                                        <label for="" class="profilename">
                                          Primary Contact
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          placeholder="Enter your  Primary count"
                                          class="form-control"
                                          value={formData.primarycontact}
                                          onChange={handleChange}
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
                                          value={formData.secondaryemail}
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div class="col-md-2"></div>
                                      <div class="col-md-4">
                                        <label for="" class="profileh5 mb-1">
                                          Secondary Contact
                                        </label>
                                        <br />
                                        <input
                                          type="text"
                                          placeholder="Enter your  Secondary count"
                                          class="form-control"
                                          value={formData.secondarycontact}
                                          onChange={handleChange}
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
                                      value={formData.address}
                                      onChange={handleChange}
                                    />
                                    <label for="" class="profilename">  City Name
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Enter your City"
                                      class="form-control"
                                      value={formData.city}
                                      onChange={handleChange}
                                    />

                                    <label for="institution-code" class="profilename">
                                      Institution code</label><br />
                                    <input
                                      type="text"
                                      placeholder="Enter your Code"
                                      class="form-control"
                                      value={formData.code}
                                      onChange={handleChange}
                                    />
                                    <br />

                                    <label for="institution-code" class="profilename">
                                      Userscount</label><br />
                                    <input
                                      type="text"
                                      placeholder="Enter your Count"
                                      class="form-control"
                                      value={formData.userscount}
                                      onChange={handleChange}
                                    />
                                    <br />
                                    <label for="" class="profilename"> Institution Type</label><br />
                                    <select name="sort-order" id="sort-order" value={formData.InstitutionType}
                                      onChange={handleChange}>
                                      <option value="asc">School</option>
                                      <option value="desc">Collage</option>
                                      <option value="desc">Trinning</option>
                                      <option value="desc">NGO</option>
                                    </select>
                                    <br />
                                    <label for="" class="profilename">  Access plan </label><br />
                                    <select name="sort-order" id="sort-order" value={formData.Accessplan}
                                      onChange={handleChange}>
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
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Minimum 6 characters"

                                      />
                                      {/* <Link to={`/detial?email=${blog.email}`}><i className="password-toggle">
    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </i></Link>  */}
                                    </div>

                                    {/* {passwordError && (
                      <span className="error mes">{passwordError}</span>
                    )}<br/> */}
                                    <button class="profilebutton">Add Details</button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <span class="material-symbols-outlined" onClick={() => handleDelete(blog._id)}>delete</span>

                  </div>
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