import React, { useState } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import { Link } from "react-router-dom";

function About1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="container5">
        <div className="row">
          <div className='col-12 col-md-1'></div>
          <div className="col-12 col-md-4 remove mt-5">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
              alt=""
              className='image2'
            />
          </div>

          <div className="col-12 col-md-6 card">
            <form>
              <img src={logo} className='image' /><br />
              <div className='uma'>
                <label htmlFor="email" className="loginemail">Email ID</label><br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="logininput w-75"
                  placeholder="Enter your email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                /><br />
                <label htmlFor="password" className="loginemail">Password</label><br />
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type
                  name="password"
                  id="password"
                  className="logininput w-75"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /><br />
                  <label htmlFor="password" className="loginemail">confirm Password</label><br />
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type
                  name="password"
                  id="password"
                  className="logininput w-75"
                  placeholder="Enter your confirm  password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /><br />
                <input
                  type='checkbox'
                  className='checkbox'
                  onClick={togglePasswordVisibility} // Toggle password visibility
                />
              </div>
              <Link to="/"><button className="loginbutton">Sign In</button></Link>  
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
