import React from 'react';
import './categoris.css';
import Sidebar from '../sidebar/sidebar';
import { useEffect, useState } from "react";
import axios from "axios";
function Access() {
  const [blogslist, setblogslist] = useState([]);
  const [batchyear, setSelectedBatchYear] = useState("");
  
  const [instion, setinstion] = useState("");
  const [batch, setSelectedBatch] = useState("");
  const [filteredBlogsList, setFilteredBlogsList] = useState(blogslist);
  useEffect(() => {
    fetchblogs();
  });

  const fetchblogs = async () => {
    const api = "http://localhost:5020/allpraticipation";
    try {
      const response = await axios.get(api);
      setblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const handleFilterData = () => {
    const filteredJobs = blogslist.filter(
      (blog) =>
        (!instion || blog.instion.toLowerCase().includes(instion.toLowerCase().trim())) &&
        (!batch || blog.batch.toLowerCase().includes(batch.toLowerCase().trim())) &&
        (!batchyear || blog.batchyear.toLowerCase().includes(batchyear.toLowerCase().trim()))
    );

    setFilteredBlogsList(filteredJobs);
  };
  return (
  <>
  <Sidebar/>
    <div className="bg-container ">
      <div className="card-container">
        <h3 className='card2'>Category Address</h3>
        <hr className="line" />
        <div className="form-container">
          <div className="form-group">
            <h5 className='head'>Institutions</h5>
            <select className="option1" value={instion} onChange={(e) => setinstion(e.target.value)}>
  <option value="">Select Batch Year</option>
  {blogslist.map((blog)=>(
      <option key={blog.instion} value={blog.instion}>
     {blog.instion}
     
    </option>
   ))}
   </select>
          </div>
          <div className="form-group">
            <h5 className='head'>Batch Years</h5>
            <select className="option1" value={batchyear} onChange={(e) => setSelectedBatchYear(e.target.value)}>
 <option value="">Select Batch Year</option>
   {blogslist.map((blog)=>(
       <option key={blog.batchyear} value={blog.batchyear}>
      {blog.batchyear}
     
    </option>
   ))}
   </select>
          </div>
          <div className="form-group">
            <h5 className='head'>Batches</h5>
            <select className="option1" value={batch} onChange={(e) => setSelectedBatch(e.target.value)}>
 <option value="">Select Batch Year</option>
 {blogslist.map((blog)=>(
      <option key={blog.batch} value={blog.batch}>
     {blog.batch}
     
    </option>
   ))}
   </select>
          </div>
        </div>
        <button type="submit" className="btn" onClick={handleFilterData}>
          Submit
        </button>
      </div>
     
      <div className="card-container2">
        <div className='card3'>
        <h3>Access Table</h3>
        <hr className="line" />
        </div>
       <div>
        <table className="table">
          <thead>
            <tr>
            
              <th>Institutions</th>
              <th>Batch Years</th>
              <th>Batches</th>
            </tr>
          </thead>
          {filteredBlogsList.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.instion}</td>
                <td>{blog.batchyear}</td>
                <td>{blog.batch}</td>
              </tr>

            ))}
        </table>
        </div>
        </div>  
    </div>
    </>
  );
}

export default Access;


