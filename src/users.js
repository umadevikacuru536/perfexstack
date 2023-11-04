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
import Eye from "./eye";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
function Users({  onDelete }){
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

    const [navItemsVisible, setNavItemsVisible] = useState(false);
    const [blogslist, setblogslist] = useState([]);
  const [selectbatchyear, setSelectedBatchYear] = useState("");
  const [selectbatch, setSelectedBatch] = useState("");
  const [filteredBlogsList, setFilteredBlogsList] = useState(blogslist);
  // // Function to handle the "Go" button click and filter data
  // const handleFilterData = () => {
  //   // Filter data based on selected values
  //   const filteredData = blogslist.filter((blog) => {
  //     return (
  //       (!name || blog.value === name) &&
  //       (!selectbatchyear || blog.selectbatchyear === selectbatchyear) &&
  //       (!selectbatch || blog.selectbatch === selectbatch)
  //     );
  //   });

  //   // Use the filtered data as needed
  //   console.log(filteredData);
  // };
  const handleFilterData = () => {
    const filteredJobs = blogslist.filter(
      (blog) =>
        (!name || blog.name.toLowerCase().includes(name.toLowerCase().trim())) &&
        (!selectbatchyear || blog.selectbatchyear.toLowerCase().includes(selectbatchyear.toLowerCase().trim())) &&
        (!selectbatch || blog.selectbatch.toLowerCase().includes(selectbatch.toLowerCase().trim()))
    );

    setFilteredBlogsList(filteredJobs);
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
       sno:""
    
        // Add other form fields here
      });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        sno:sno,
        name:name,
        email:email,
        head:head,
        secondaryemail:secondaryemail,
        userscount:userscount,
        primarycontact:primarycontact,
        secondarycontact:secondarycontact,
        address:address,
        city:city,
        password:password,
        code:code
      };
      const updatedData = {
        sno:"",
        name:"",
        email:"",
        head:"",
        secondaryemail:"",
        userscount:"",
        primarycontact:"",
        secondarycontact:"",
        address:"",
        city:"",
        password:"",
        code:""
      };
      console.log(updatedData);
      const onSubmitForm3 = (e) => {
        e.preventDefault();
    
        if ( sno,name,email,head,secondaryemail,userscount,primarycontact,secondarycontact,address,city,password,
    code!== "") {
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
      const [Error,setError] = useState("");

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
      
      const handleUpdate = async (id, updatedData) => {
        try {
          if (!id) {
            setError("Invalid ID provided for update.");
            return;
          }
          
          console.log("Updating institute with ID:", id);
          
          const response = await axios.put(
            `http://localhost:5020/updateInstitute/${id}`,
            updatedData
          );
          
          if (response.status === 200) {
            alert("Success: Institute updated");
            fetchblogs()// Fetch updated data
          
            // You can also update the local state with the updated data
            const updatedList = blogslist.map(institute => {
              if (institute.id === id) {
                return { ...institute, ...updatedData };
              } else {
                return institute;
              }
            });
            setblogslist(updatedList);
          } else {
            console.log(response.data);
            alert("Error: " + response.data);
            setError("An error occurred while updating the institute.");
          }
        } catch (error) {
          console.error(error);
          setError("An error occurred while updating the institute.");
        }
      };
      
      
      
    return(
        <div className="d-flex flex-row">
        <Sidebar/>
             <div className="admin">
                <div className="d-flex flex-row">
              <h5>Filter Users</h5>
             
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
  Institution code</label><br/>
  <input
                  type="text"
                  placeholder="Enter your Code"
                  class="form-control"
                  onChange={(e) => setcode(e.target.value)}
                  value={code}
                />
<br/>
   
<label for="institution-code" class="profilename">
  Userscount</label><br/>
  <input
                  type="text"
                  placeholder="Enter your Count"
                  class="form-control"
                  onChange={(e) => setuserscount(e.target.value)}
                  value={userscount}
                />
<br/>
                 <label for="" class="profilename"> Institution Type</label><br/>
                 <select name="sort-order" id="sort-order">
    <option value="asc">School</option>
    <option value="desc">Collage</option>
    <option value="desc">Trinning</option>
    <option value="desc">NGO</option>
  </select>
                <br/>
                 <label for="" class="profilename">  Access plan </label><br/>
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
    type= "password"
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
                  </div><br/>
                  
   </div>
   <div className="filter">    
   <select className="option" value={name} onChange={(e) => setname(e.target.value)}>
<option value="">Select Option</option>
  {blogslist.map((blog)=>(
    <option key={blog.value} value={blog.value}>
    {blog.name}
  </option>
  
  ))}
  
</select>
<select className="option" value={selectbatchyear} onChange={(e) => setSelectedBatchYear(e.target.value)}>
<option value="">Select Batch Year</option>
  {blogslist.map((blog)=>(
     <option key={blog.selectbatchyear} value={blog.selectbatchyear}>
     {blog.selectbatchyear}
   </option>
  
  ))}
  
</select>
<select className="option" value={selectbatch} onChange={(e) => setSelectedBatch(e.target.value)}>
<option value="">Select Batch</option>
  {blogslist.map((blog)=>(
    <option key={blog.selectbatch} value={blog.selectbatch}>
    {blog.selectbatch}
  </option>
  
  ))}
  
</select>
                <button className="filterbutton" onClick={handleFilterData}>Go</button>

              </div>
            
   <table className="table">
  <thead>
    <tr>
      <th>S.NO</th>
      <th>Name</th>
      <th>Email</th>
      <th>Register No</th>
      <th>Mobile No</th>
      <th>Status</th>
      <th>Expiry date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  
  {filteredBlogsList.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.sno}</td>
                <td>{blog.name}</td>
                <td>{blog.email}</td>
                <td>{blog.code}</td>
                <td>{blog.primarycontact}</td>
                <td>{blog.status}</td>
                <td>{blog.expirydate}</td>
                <td>
                  <div className="A">
                    <Link to={`/detial?email=${blog.email}`} className="fa-solid fa-eye " ></Link>
                   <Link to={`/Update/${blog.email}`}><span class="material-symbols-outlined editicon"
                       >edit_square</span></Link> 
                    
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
export default Users;