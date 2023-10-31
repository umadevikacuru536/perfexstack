import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import "./App.css"; // You can create an App.css file for styling
const Detial = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const [password, setPassword] = useState("");
  const handleChangePassword = () => {
    // Send a POST request to your server to change the password
    axios
      .post('http://localhost:5020/change-password', {
        email: emailDetail.email, // Pass the user's email to identify the user
        password: password, // New password
      })
      .then((response) => {
        if (response.data) {
          alert("password update")
        console.log(response.data)
       
        } else {
          alert("Password change failed")
          console.error("Password change failed");
        }
      })
      .catch((error) => {
        console.error("Error changing password:", error);
      });
  };

  const [navItemsVisible, setNavItemsVisible] = useState(false);

  const toggleNavItems = () => {
    setNavItemsVisible(!navItemsVisible);
  };
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");

    const [emailDetail, setEmailDetail] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Make an API request to fetch the email details based on the emailId
        axios
            .get(`http://localhost:5020/alladmin/${email}`)
            .then((response) => {
                setEmailDetail(response.data);
                console.log(response.data)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching email detail:", error);
                setLoading(false);
            });
    }, [email]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!emailDetail) {
        return <div>Email not found</div>;
    }

    return (
      <div className="d-flex flex-row">
      <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            const { title, path, icon, cName } = item;
            return (
              <li key={index} className={cName}>
                <Link to={path}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
        <div className="eye">
          <div className="sri">
          <button className="card12">
            <h3 className="heading">Management</h3>
                      <div>
                 <FontAwesomeIcon className="emailicon" icon={faEnvelope} />
                  <span className="span"> : {emailDetail.email}</span>
            </div>
            <div>
              <FontAwesomeIcon className="emailicon" icon={faPhone} />
              <span className="span"> : {emailDetail.primarycontact}</span>
            </div>   
                      
           
          </button>
          <div className="card123">
        <label className="label">Change password</label><br/>
        <input
          type="text"
          placeholder="Enter new password"
          value={emailDetail.password}
          onChange={(e) =>
           setEmailDetail({
              ...emailDetail,
              password: e.target.value,
            })
          }
        /><br/>
        <button className="reset" onClick={handleChangePassword}>
          Reset
        </button>
      
      </div>
          </div>
          <button className="Pa">
             <form class="text-start">
                <label for="" class="profilename">
                S.NO
                </label>
                <input
                  type="text"
                  placeholder="Enter your full institution"
                  class="form-control"
                value={emailDetail.sno}
                 
                />
                 <label for="" class="profilename">
                Institution Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full institution"
                  class="form-control"
                
                  value={emailDetail.name}
                />
                 <label for="" class="profilename">
                Head Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full institution"
                  class="form-control"
                  value={emailDetail.head}
                />
                <div class="d-flex flex-row">
                  <div class="col-md-6 aaa">
                    <label for="" class="profilename">
                     Primary email
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter  Primary email"
                      class="form-control12"
                      value={emailDetail.email}
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
                      value={emailDetail.primarycontact}
                    />
                  </div>
                </div>
                <div class="d-flex flex-row">
                  <div class="col-md-6 aaa">
                    <label for="" class="profilename">
                    Secondary email
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Secondary email"
                      class="form-control12"
                      value={emailDetail.secondaryemail}
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
                      value={emailDetail.secondarycontact}
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
                  value={emailDetail.address}
                />
                  <label for="" class="profilename">  City Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your City"
                  class="form-control"
                  value={emailDetail.city}
                />
               
               <label for="institution-code" class="profilename">
  Institution code</label><br/>
  <input
                  type="text"
                  placeholder="Enter your Code"
                  class="form-control"
                  value={emailDetail.code}
                />
<br/>
   
<label for="institution-code" class="profilename">
  Userscount</label><br/>
  <input
                  type="text"
                  placeholder="Enter your Count"
                  class="form-control"
                  value={emailDetail.userscount}
                />
<br/>
                 <label for="" class="profilename"> Institution Type</label><br/>
                 <select name="sort-order" id="sort-order" value={emailDetail.InstitutionType}>
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
    type= "text"
    name="password"
    id="password"
    className="logininput1"
    value={emailDetail.password}
    placeholder="Minimum 6 characters"
    
  />

</div>

                 {/* {passwordError && (
                      <span className="error mes">{passwordError}</span>
                    )}<br/> */}
                <button class="profilebutton">Add Details</button>
              </form></button>
        </div>
        </div>
    );
};

export default Detial;
