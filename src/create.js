import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import { useState } from "react";


function Profile() {
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
  return (
      <div>
        <div class="container">
          <div class="row">
            <div className="col-md-2"></div>
            <div class="col-md-7">
              <form class="profilecard1 p-3 ">
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
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type
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
                 {passwordError && (
                      <span className="error mes">{passwordError}</span>
                    )}<br/>
                <button class=" mt-4  profilebutton1">Update Details</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Profile;



