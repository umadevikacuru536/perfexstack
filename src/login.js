import React, { useState } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./img/6333204.jpg"
function About() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  let navigate = useNavigate();
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
  const usersData = {
    email: email,
    password:password
  };
  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (email && password!== "") {
      axios
        .post("http://localhost:5020/signup/", usersData)
        .then((response) => {
          if (response.status === 200) {
            let jwtToken = response.data.token;
            localStorage.setItem("token", jwtToken);

            toast.success("Registration Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });


            setTimeout(function () {
              navigate("/home");
            }, 3000);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("Login failed. Check your credentials.", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }else {
      toast.warning("Enter both email and password");
    }
  };
  return (
    <div className="">
      <div className="container5">
        <div className="row">
         
          <div className="col-12  col-md-4 remove ">
            <button className="img">
            <img
              src={img}
              alt=""
              className='image2'
            /></button>
          </div>
<div className="col-md-1"></div>
          <div className="col-12 col-md-6 card">
          <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                {/* Same as */}
                <ToastContainer />
                <form onSubmit={onSubmitBtn}>
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
                  value={password}
                   placeholder="Minimum 6 characters"
                   onChange={handlePasswordChange}
                /><br />
                 {passwordError && (
                      <span className="error mes">{passwordError}</span>
                    )}
                <input
                  type='checkbox'
                  className='checkbox'
                  onClick={togglePasswordVisibility} // Toggle password visibility
                />
              </div>
            <Link to="/forget"><p className="loginforgot">Forgot password?</p></Link>  
              <button className="loginbutton">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
