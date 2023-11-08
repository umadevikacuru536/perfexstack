import React from 'react'
import Sidebar from '../sidebar/sidebar'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function  AssignedAssessment() {
  let navigate = useNavigate();

  const [blogslist, setblogslist] = useState([]);
  

  useEffect(() => {
    fetchblogs();
  }, []);
  const fetchblogs = async () => {
    const api = "http://localhost:5020/allcategoris";
    try {
      const response = await axios.get(api, {

      });
      setblogslist(response.data);


    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  return (
    <div>
      <div className="d-flex flex-row">
        <Sidebar />
        <div className="card21">
          <div className="d-flex flex-row ">
            <p className="assement">Access</p>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>CATEGORY</th>
                <th>ASSESSMENT</th>
                <th>ATTEMPTS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {blogslist.length > 0 ? (
                blogslist.map((blog) => (
                  <tr key={blog.id}>
                    <td>{blog.sno}</td>
                    <td>{blog.name}</td>
                    <td>{blog.tag}</td>
                    <td>{blog.attempts}</td>
                    <td>
                      <div className="A">
                     <Link to="/assingedeye"> <span className="fa-solid fa-eye eyeicon"></span></Link>
                     
                      <Link to="/schedule"><span class="material-symbols-outlined scheduleicon">schedule</span></Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="18">No data available</td>
                </tr>
              )}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  )
}

export default AssignedAssessment;
