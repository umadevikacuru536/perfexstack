import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";

const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />,
    cName: "nav-text"
  }
];

export default sidebarData;
// mport React, { useState } from "react";
// import logo from "../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg";
// import "./App.css"; // You can create an App.css file for styling
// import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
// import { Link } from "react-router-dom";

// function Assessment() {
//   const [navItemsVisible, setNavItemsVisible] = useState(false);

//   const toggleNavItems = () => {
//     setNavItemsVisible(!navItemsVisible);
//   };

//   return (
//     <div className="d-flex flex-row">
//       <div className="container">
//         <div className={`nav-bar ${!navItemsVisible ? "hidden" : ""}`}>
//           <div className="toggle-button" onClick={toggleNavItems}>
//             <img src={logo} className="image1" />
//             <FaBars />
//           </div>
//           {navItemsVisible && (
//             <ul className="nav-list">
                
//               <li className="list">
//                 <a href="/">Dash Board</a>
//               </li>
//               <li className="list">
//                 <a href="/about">Home page</a>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//       <div className="assessment">
//         <div className="d-flex flex-row">
//           <h2>Assessment List</h2>
//           <button data-bs-toggle="modal" data-bs-target="#myModal1">
//             +Crate Assessment
//           </button>
//           <div class="modal" id="myModal1">
//             <div class="modal-dialog">
//               <div class="modal-content">
//                 {/* <!-- Modal Header --> */}
//                 <div class="modal-header">
//                 <h3>CREATE ASSESSMENT</h3>
//                   <button
//                     type="button"
//                     class="btn-close"
//                     data-bs-dismiss="modal"
//                   ></button>
//                 </div>

//                 {/* <!-- Modal body --> */}
//                 <div class="modal-body ">
//                   <div class="container text-start">
//                     <div class="row">
//                         <from>
//                       <div class="col-md-7">
//                         <label>Category</label>
//                         <br />
//                         <select>
//                           <option>10</option>
//                           <option>20</option>
//                           <option>30</option>
//                           <option>40</option>
//                         </select>
//                         <div className="d-flex flex-row">
//                         <div className="col-md-2">
//                             <label>Assement Name</label><br/>
//                             <input placeholder="Enter assessment name"/>
//                         </div>
//                         <div className="col-md-2"></div>
//                         <div className="col-md-2">
//                             <label>No of Times</label><br/>
//                             <input placeholder="Enter Time"/>
//                         </div>
//                         <div className="col-md-2"></div>
//                         <div className="col-md-2">
//                             <label>Assement Password</label><br/>
//                             <input placeholder="Enter password"/>
//                         </div>
                       
//                         </div>
//                         <div className="d-flex flex-row">
//                         <div className="col-md-2">
//                             <label>Exame Type</label><br/>
//                             <input placeholder="Enter assessment name"/>
//                         </div>
//                         <div className="col-md-2"></div>
//                         <div className="col-md-2">
//                             <label>Cutoff Type</label><br/>
//                             <input placeholder="Enter Time"/>
//                         </div>
//                         <div className="col-md-2"></div>
//                         <div className="col-md-2">
//                             <label>Question Selection</label><br/>
//                             <input placeholder="Enter password"/>
//                         </div>
                       
//                         </div>
//                         <label>Assessment Report Options</label><br/>
//                         <div className="d-flex flex-row">
//                         <span><input type="checkbox"/>Show Reports </span>
//                         <span><input type="checkbox"/>Show Qualifying percentage </span>
//                         <span><input type="checkbox"/>Show Check answers </span><br/>
//                         <span><input type="checkbox"/>Show Chapter Wise Report </span>
//                         <span><input type="checkbox"/>Show Accuracy Report </span>
//                         <span><input type="checkbox"/>Show Leaderboard</span><br/>
//                         <span><input type="checkbox"/>Show Private Testcases Output </span>
//                         </div>
//                         <label>Assessment Flow</label>
//                         <div>
//                         <span><input type="radio"/>Non-Linear </span>
//                         <span><input type="radio"/>Linear </span>
//                         </div>
//                         <label>Assessment Adaptiveness</label><br/>
//                         <span><input type="radio"/>Non-Adaptive </span>
//                       </div>
//                       <button>Submit</button>
//                       </from>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="d-flex flex-row">
//           <p>Show</p>
//           <select>
//             <option>10</option>
//             <option>20</option>
//             <option>30</option>
//             <option>40</option>
//           </select>
//           <label>Seach</label>
//           <input />
//         </div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>S.NO</th>
//               <th>EXAM ID</th>
//               <th>EXAM SERIES</th>
//               <th>EXAM NAME </th>
//               <th>PASSWORD</th>
//               <th>QUES SELECTION</th>
//               <th>DISPLAY</th>
//               <th>ACTIONS</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Assessment;