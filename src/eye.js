import "./App.css"; 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from "react";
import axios from "axios";
function Eye() {
    const [appiled, setappiled] = useState([]);
    useEffect(() => {
      fetchblogs();
    }, []);
  
    const fetchblogs = async () => {
      const api = "http://localhost:5020/alladmin";

      try {
        const response = await axios.get(api, {
         
        });
        setappiled(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    const [password, setpassword] = useState("");
    const [passwordChanged, setPasswordChanged] = useState(false);
    const handleChangePassword = () => {
      // Send a POST request to your server to change the password
      axios
        .post('http://localhost:5020/change-password', {
          email: appiled.email, // Pass the user's email to identify the user
          password: password, // New password
        })
        .then((response) => {
          if (response.data.success) {
            setPasswordChanged(true);
          } else {
            console.error("Password change failed");
          }
        })
        .catch((error) => {
          console.error("Error changing password:", error);
        });
    };
    return (
      
        <div className="eye">
          <div className="sri">
          <button className="card12">
            <h3 className="heading">Management</h3>
            {appiled.map((blog) => (
                      <div>
                      <div>
              <FontAwesomeIcon className="emailicon" icon={faEnvelope} />
        <span>{blog.email}</span>
            </div>
            <div>
              <FontAwesomeIcon className="emailicon" icon={faPhone} />
              <span>{blog.primarycontact}</span>
            </div>   
                      </div>
                    ))}
           
          </button>
          <button className="card123">
         
            <label>Change password</label><br/>
            <input placeholder="enter change password"
             value={password}
             onChange={(e) => setpassword(e.target.value)}
            /><br/>
            <button className="reset" onClick={handleChangePassword}>
          Reset
        </button>
        {passwordChanged && <div>Password changed successfully</div>}
          </button>
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
                
                 
                />
                 <label for="" class="profilename">
                Institution Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full institution"
                  class="form-control"
                
                 
                />
                 <label for="" class="profilename">
                Head Name
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
                    Primary Contact
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
                    Secondary Contact
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
                  <label for="" class="profilename">  City Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your City"
                  class="form-control"
                  
                />
               
               <label for="institution-code" class="profilename">
  Institution code</label><br/>
  <input
                  type="text"
                  placeholder="Enter your Code"
                  class="form-control"
                 
                />
<br/>
   
<label for="institution-code" class="profilename">
  Userscount</label><br/>
  <input
                  type="text"
                  placeholder="Enter your Count"
                  class="form-control"
                 
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

    placeholder="Minimum 6 characters"
    
  />

</div>

                 {/* {passwordError && (
                      <span className="error mes">{passwordError}</span>
                    )}<br/> */}
                <button class="profilebutton">Add Details</button>
              </form></button>
        </div>
      
    );
  }
  
export default Eye;