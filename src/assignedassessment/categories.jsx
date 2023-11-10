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
function AssignedCategories() {
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
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
            

              <div className="card21">
          <div className="d-flex flex-row ">
            <p className="assement">Access</p>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Categories</th>
                <th>Assessments</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {blogslist.length > 0 ? (
                blogslist.map((blog) => (
                  <tr key={blog.id}>
                    <td>{blog.sno}</td>
                    <td>{blog.name}</td>
                    <td>{blog.name}</td>
                    <td>
                      <div className="A">
                        <Link to="/access"><button className='access p-2 bg-primary'>Access</button></Link>
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

        </div>
       
      </div>
    </div>
  )
}

export default AssignedCategories;
