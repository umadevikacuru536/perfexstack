import React from 'react'
import './userdashbord.css'
import logo1 from '../sidebar/Skill-hub.png'
function Practiceactivity() {
  return (
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
                          <a class="nav-link" href="#">Assessment</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Courses</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Code</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Practice</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Blogs</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Dashboard</a>
                      </li>
                      <li class="nav-item">
                          <button className='logout'>Logout</button>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <div className='scoll'>
      <h1 className='text-center'>Your Recent Practice</h1>
      <button className='assementbutton'>
          <div >
            <p>JAVA LAB ->> Right Angle Triangle Patterns</p>
         <h6>Right Angle Triangle Patterns Set - 1</h6>
          <p>Attempted on:Nov 15 2023, 10:44:39 AM</p>
          </div>
          <div>
              <button className='resume'>Resume Test</button>
          </div>
      </button>
      <button className='assementbutton'>
          <div >
        <p>JAVA LAB -.. Basic Number Programs</p>
          <h6>Basic Number Programs Set - 1</h6>
          <p>Attempted on:Nov 15 2023, 10:44:39 AM</p>
          </div>
          <div>
              <button className='resume'>Resume Test</button>
          </div>
      </button>
    
     
     
   
     
      </div>
      <footer class="container-fluid d-flex flex-row mt-5 bg-black">
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
            style={{ color: "white", margin: "10px" }}
          ></i>
          <span style={{ color: "white" }}>About us</span>
        </p>
        <p>
          <i
            class="fa-solid fa-greater-than"
            style={{ color: "white", margin: "10px" }}
          ></i>
          <span style={{ color: "white" }}>Services</span>
        </p>
        <p style={{marginLeft:"82px"}}>
          <i class="fa-solid fa-greater-than"
            style={{ color: "white", margin:"10px" }}
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
</div>
  )
}

export default Practiceactivity