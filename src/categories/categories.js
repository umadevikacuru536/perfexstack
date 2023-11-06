import React from 'react'
import Sidebar from '../sidebar/sidebar'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function Categories() {
  const [blogslist, setblogslist] = useState([]);

  useEffect(() => {
    fetchblogs();
  },[]);
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
  const [examname,setexamname]=useState("")
  const searchBySkills = () => {
    const filteredBlogs = blogslist.filter(
      (blog) =>
        blog.name &&
        blog.name
          .toLowerCase()
          .includes(examname.toLowerCase().trim())
    );
    setblogslist(filteredBlogs);
  };
  const [Error, setError] = useState("");

  const handleDelete = async (id) => {
    try {
      if (!id) {
        setError("Invalid ID provided for deletion.");
        return;
      }
      console.log("Deleting institute with ID:", id);
      const response = await axios.delete(
        " http://localhost:5020/deletcategoris/" + id
      );
      if (response.status === 200) {
        alert("Success: Institute deleted");
        fetchblogs();

        // Update your state or fetch updated data as needed
        // For example, if addblogslist is updated from the server, you can update it here.

        const updatedListLength = blogslist.length - 1;
        console.log("Updated list length:", updatedListLength);
      } else {
        console.log(response.data);
        alert("Error: " + response.data);
        setError("An error occurred while deleting the institute.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the institute.");
    }
  };
  return (
    <div>
        <div className="d-flex flex-row">
    <Sidebar/>
    <div className="card21">
        <div className="d-flex flex-row ">
      <p className="assement">Categories</p>
      <Link to="/categoriesadd"><button className="creat1">+ Create Categories</button></Link>
      </div>
     
      <div className="text-start m-4">
        <label className="showname">Show</label><br/>
      
  
        <select className="show">
  {blogslist.map((serialNo) => (
    <option key={serialNo.id} value={serialNo.sno}>
      {serialNo.sno}
    </option>
  ))}
</select>

        <label className="seach">Seach</label>
        <input value={examname}
                onChange={(e) => setexamname(e.target.value)} />
                <button className="seachbut" onClick={searchBySkills}>seach</button>
      </div>
      <table className="table">
          <thead>
            <tr>
            <th>S.NO</th>
<th>Categories</th>
<th>AccessType</th>
<th>Assessment </th>
<th>DISPLAY</th>
<th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
  {blogslist.length > 0 ? (
    blogslist.map((blog) => (
      <tr key={blog.id}>
        <td>{blog.sno}</td>
        <td>{blog.name}</td>
        <td>{blog.accesstype}</td>
        <td>{blog.tag}</td>
        <td>{blog.display}</td>
        <td>
          <div className="A">
            <span className="fa-solid fa-eye"></span>
            <span className="material-symbols-outlined editicon" >edit_square</span>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>


<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        Modal body..
      </div>

     
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
            <span className="material-symbols-outlined" onClick={() => handleDelete(blog._id)}>delete</span>
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

export default Categories;
