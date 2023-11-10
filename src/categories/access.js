import React from 'react';
import './categoris.css';
import Sidebar from '../sidebar/sidebar';
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Access() {
  let navigate = useNavigate();
  const [blogslist, setblogslist] = useState([]);
  const [batchyear, setSelectedBatchYear] = useState("");
  const [gettingId, setGettingId] = useState("")
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

  const [individualInstitute, setIndividualInstitute] = useState({
    batch: ""
    

  });
  const onSubmitForm = (e) => {
    e.preventDefault();
    const UserData = {
      batch: individualInstitute.batch,
    };
    console.log(UserData);
    console.log(`http://localhost:5020/updatepraticipation/${gettingId}`);
    axios
      .put(`http://localhost:5020/updatepraticipation/${gettingId}`, UserData)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          toast.success("Update Successful", {
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
            navigate("");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the institute.");
        console.log(error.message);
      });
  }

  const handleFilterData = () => {
    const filteredJobs = blogslist.filter(
      (blog) =>
        (!instion || blog.instion.toLowerCase().includes(instion.toLowerCase().trim())) &&
        (!batch || blog.batch.toLowerCase().includes(batch.toLowerCase().trim())) &&
        (!batchyear || blog.batchyear.toLowerCase().includes(batchyear.toLowerCase().trim()))
    );

    setFilteredBlogsList(filteredJobs);
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
        "http://localhost:5020/deletpraticipation/" + id
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
 
  console.log(individualInstitute);


  const update = async (id)=>{
    console.log(id);
    setGettingId(id)
    try {
      const response = await axios.get(
        "http://localhost:5020/allindividualpraticipation/" + id
      ); // Replace with your API endpoint
      setIndividualInstitute(response.data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }

  }

  return (
    <>
      <Sidebar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 '>
           <div className='col-md-12'>
        <div className="card-container1">
          <h3 className='card2'>Category Access</h3>
          <hr className="line" />
          <div className="form-container">
            <div className="">
              <h5 className='head'>Institutions</h5>
              <select className="option1" value={instion} onChange={(e) => setinstion(e.target.value)}>
                <option value="">Select Batch Year</option>
                {blogslist.map((blog) => (
                  <option key={blog.instion} value={blog.instion}>
                    {blog.instion}

                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <h5 className='head'>Batch Years</h5>
              <select className="option1" value={batchyear} onChange={(e) => setSelectedBatchYear(e.target.value)}>
                <option value="">Select Batch Year</option>
                {blogslist.map((blog) => (
                  <option key={blog.batchyear} value={blog.batchyear}>
                    {blog.batchyear}

                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <h5 className='head'>Batches</h5>
              <select className="option1" value={batch} onChange={(e) => setSelectedBatch(e.target.value)}>
                <option value="">Select Batch Year</option>
                {blogslist.map((blog) => (
                  <option key={blog.batch} value={blog.batch}>
                    {blog.batch}

                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="bg-primary p-2 w-25 " style={{marginLeft:"450px",marginTop:"30px",color:"white",borderRadius:"10px"}} onClick={handleFilterData}>
            Submit
          </button>
        </div>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-12'>
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
                  <th>Actions</th>
                </tr>
              </thead>
              {filteredBlogsList.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.instion}</td>
                  <td>{blog.batchyear}</td>
                  <td>{blog.batch}</td>
                  <td>
                  <div className="A">
                        <span className="material-symbols-outlined editicon" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>update(blog._id)}>edit_square</span>


                        <div class="modal" id="myModal">
                          <div class="modal-dialog">
                            <div class="modal-content" style={{ width: "40vw" }}>

                              <div class="modal-header">
                                <h4 class="modal-title">Edit Categories Access</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                              </div>

                              <div class="modal-body">
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
                                <form >
                                  <div class="col-md-7">
                                    <label className="profilename1">Batches</label>
                                    <br />
                                    <input className="input" placeholder="select batches"
                                      value={individualInstitute.batch}
                                      onChange={(e) =>
                                        setIndividualInstitute({
                                          ...individualInstitute,
                                          batch: e.target.value,
                                        })
                                      }
                                       />
                                    
                                  </div>
                                  <button className="creat12"onClick={onSubmitForm} >Submit</button>
                                </form>
                              </div>

                            </div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined delete"onClick={() => handleDelete(blog._id)}>delete</span>
                      </div>
                  </td>
                </tr>

              ))}
            </table>
          </div>
        </div>
        </div>
        </div>

          
        </div>

      </div>
     
    </>
  );
}

export default Access;


