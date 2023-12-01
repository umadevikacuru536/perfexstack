import React from 'react'
import Sidebar from '../sidebar/sidebar'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Categories() {
  let navigate = useNavigate();
  const [isChecked, setChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);

    if (isChecked) {
      toast.success('enabled is ON');
    } else {
      toast.info('disabled is OFF');
    }
  };
  const [gettingId, setGettingId] = useState("")
  const [blogslist, setblogslist] = useState([]);
  const [individualInstitute, setIndividualInstitute] = useState({
    sno: "",
    name: "",
    description: "",
    tag: "",
    accesstype: "",
    accessplan: "",
    display: ""

  });
  const onSubmitForm = (e) => {
    e.preventDefault();
    const UserData = {
      sno: individualInstitute.sno,
      name: individualInstitute.name,
      description: individualInstitute.description,
      tag: individualInstitute.tag,
      accesstype: individualInstitute.accesstype,
      accessplan: individualInstitute.accessplan,
      display: individualInstitute.display,
    };
    console.log(UserData);
    console.log(`http://localhost:5020/updatecategoris/${gettingId}`);
    axios
      .put(`http://localhost:5020/updatecategoris/${gettingId}`, UserData)
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
            navigate("/admin");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the institute.");
        console.log(error.message);
      });
  }
const[apiStatus,setApiStatus]=useState("")
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
  const [examname, setexamname] = useState("")
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
        toast.success("deleted Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
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


  const update = async (id) => {
    console.log(id);
    setGettingId(id)
    try {
      const response = await axios.get(
        "http://localhost:5020/allindividualcategoris/" + id
      ); // Replace with your API endpoint
      setIndividualInstitute(response.data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }

  }


  return (
    <div>
      <div className="d-flex flex-row">
        <Sidebar />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className="card21">
                <div className="d-flex flex-row ">
                  <p className="assement">Categories</p>
                  <Link to="/categoriesadd"><button className="creat1">+ Create Categories</button></Link>
                </div>

                <div className="text-start m-4">
                  <label className="showname">Show</label><br />


                  <select className="show">
                    {blogslist.map((serialNo) => (
                      <option key={serialNo.id} value={serialNo.sno}>
                        {serialNo.sno}
                      </option>
                    ))}
                  </select>

                  <label className="seach" >Seach</label>
                  <input value={examname} className='p-2'
                    onChange={(e) => setexamname(e.target.value)} />
                  <button className="seachbut p-2" style={{ backgroundColor: "#ae1e97" }} onClick={searchBySkills}>seach</button>
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
                      blogslist.map((blog,index) => (
                        <tr key={blog.id}>
                          <td>{index+1}</td>
                          <td>{blog.name}</td>
                          <td>{blog.accesstype}</td>
                          <td>{blog.tag}</td>
                          <td>  
                        <div>
                        <span>
     
        <input type="checkbox" className="checkboxtype"checked={isChecked} onChange={handleCheckboxChange} />
      </span>
      <ToastContainer />
    </div>
                          </td>
                          <td>
                            <div className="A">
                              <Link to="/access"><button className='access'>Access</button></Link>
                              <span className="material-symbols-outlined editicon" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => update(blog._id)}>edit_square</span>


                              <div class="modal" id="myModal">
                                <div class="modal-dialog">
                                  <div class="modal-content" style={{ width: "40vw" }}>

                                    <div class="modal-header">
                                      <h4 class="modal-title">Modal Heading</h4>
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
                                          <label className="profilename1">Sno</label>
                                          <br />
                                          <input className="input" placeholder="select category"
                                            value={individualInstitute.sno}
                                            onChange={(e) =>
                                              setIndividualInstitute({
                                                ...individualInstitute,
                                                sno: e.target.value,
                                              })
                                            } />

                                          <label className="profilename1">Name</label>
                                          <br />
                                          <input className="input" placeholder="select category"
                                            value={individualInstitute.name}
                                            onChange={(e) =>
                                              setIndividualInstitute({
                                                ...individualInstitute,
                                                sno: e.target.value,
                                              })
                                            } />

                                          <label className="profilename1">Description</label>
                                          <br />
                                          <textarea rows="4" cols="50"
                                            value={individualInstitute.description}
                                            onChange={(e) =>
                                              setIndividualInstitute({
                                                ...individualInstitute,
                                                description: e.target.value,
                                              })
                                            } ></textarea> <br />
                                          <label className="profilename1">AccessType</label> <br />
                                          <select value={individualInstitute.accesstype}
                                            onChange={(e) =>
                                              setIndividualInstitute({
                                                ...individualInstitute,
                                                accesstype: e.target.value,
                                              })
                                            } >
                                            <option value="AccessType">AccessType</option>
                                            <option value="All">All</option>
                                            <option value="Restricted">Restricted</option>
                                          </select><br />
                                          <label className="profilename1">Tag</label> <br />
                                          <div className='dropdown dropend'>
                                            <select className="left-align-select" value={individualInstitute.tag}
                                              onChange={(e) =>
                                                setIndividualInstitute({
                                                  ...individualInstitute,
                                                  tag: e.target.value,
                                                })
                                              }>
                                              <option value="Physics">Physics</option>
                                              <option value="Police">Police</option>
                                              <option value="Programming">Programming</option>
                                              <option value="Railways">Railways</option>
                                              <option value="Screening Test">Screening Test</option>
                                              <option value="Software Testing">Software Testing</option>
                                              <option value="SSC">SSC</option>
                                              <option value="Teaching">Teaching</option>
                                              <option value="UPSC">UPSC</option>
                                              <option value="Verbal Communications">Verbal Communications</option>
                                              <option value="Web Development">Web Development</option>
                                            </select>

                                          </div>
                                          <label className="profilename1">Accessplan</label> <br />
                                          <select value={individualInstitute.display}
                                            onChange={(e) =>
                                              setIndividualInstitute({
                                                ...individualInstitute,
                                                display: e.target.value,
                                              })
                                            }>
                                            <option value="Accessplan">Accessplan</option>
                                            <option value="free">free</option>
                                            <option value="Retail">Retail</option>
                                          </select><br />
                                          <label className="profilename1">Display</label> <br />
                                          <select >
                                            <option >Status</option>
                                            <option >No</option>
                                            <option >Yes</option>
                                          </select><br />
                                        </div>
                                        <button className="creat12" onClick={onSubmitForm} >Submit</button>
                                      </form>
                                    </div>

                                  </div>
                                </div>
                              </div>
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
                              <span className="material-symbols-outlined delete" onClick={() => handleDelete(blog._id)}>delete</span>
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

export default Categories;
