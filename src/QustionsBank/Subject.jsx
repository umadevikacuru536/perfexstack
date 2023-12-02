import React from 'react'
import './subject.css'
import "../sidebar/sidebar.css" // Ensure the correct CSS file is imported
import { Link, useNavigate } from 'react-router-dom';
import logo from '../sidebar/Skill-hub.png';
import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function Subject() {
  const [isActive, setIsActive] = useState(false);
  const [blogslist, setblogslist] = useState([]);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const onClicklogout = () => {
    Cookies.remove('token')
    navigate("/")
  }
  const token = Cookies.get('token');
  useEffect(() => {

    if (token == undefined) {
      navigate("/")
    }
  }, []);


  let navigate = useNavigate()


  const [userSubfolderVisible1, setUserSubfolderVisible1] = useState(false);
  const [userSubfolderVisible2, setUserSubfolderVisible2] = useState(false);
  const [userSubfolderVisible3, setUserSubfolderVisible3] = useState(false);
  const [userSubfolderVisible4, setUserSubfolderVisible4] = useState(false);
  const [userSubfolderVisible5, setUserSubfolderVisible5] = useState(false);
  const [userSubfolderVisible6, setUserSubfolderVisible6] = useState(false);
  const toggleUserSubfolder1 = () => {
    setUserSubfolderVisible1(!userSubfolderVisible1);
  };
  const toggleUserSubfolder2 = () => {
    setUserSubfolderVisible2(!userSubfolderVisible2);
  };
  const toggleUserSubfolder3 = () => {
    setUserSubfolderVisible3(!userSubfolderVisible3);
  };
  const toggleUserSubfolder4 = () => {
    setUserSubfolderVisible4(!userSubfolderVisible4);
  };
  const toggleUserSubfolder5 = () => {
    setUserSubfolderVisible5(!userSubfolderVisible5);
  };
  const toggleUserSubfolder6 = () => {
    setUserSubfolderVisible6(!userSubfolderVisible6);
  };
  const [showassign, setShow] = useState(false);
  const showAssign = () => {
    setShow(!showassign)
  }
  useEffect(() => {
    fetchblogs();
  }, []);
  const fetchblogs = async () => {
    const api = "http://localhost:5020/allsubjects";
    try {
      const response = await axios.get(api, {

      });
      setblogslist(response.data);


    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const [gettingId, setGettingId] = useState("")
  const [error, setError] = useState("")
  const [individualInstitute, setIndividualInstitute] = useState({
    name: "",
    Tag: "",
    totalqustions: "",
    Description: ""


  });
  const onSubmitForm = (e) => {
    e.preventDefault();
    const UserData = {
      name: individualInstitute.name,
      Tag: individualInstitute.Tag,
      totalqustions: individualInstitute.totalqustions,
      Description: individualInstitute.Description,

    };
    console.log(UserData);
    console.log(`http://localhost:5020/updatesubjects/${gettingId}`);
    axios
      .put(`http://localhost:5020/updatesubjects/${gettingId}`, UserData)
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
            // navigate("/admin");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while updating the institute.");
        console.log(error.message);
      });
  }
  const [Chapters, setChapters] = useState('')
  const [name, setname] = useState('')
  const [Tag, setTag] = useState('')
  const [totalqustions, settotalqustions] = useState('')
  const useData2 = {
    Chapters: Chapters,
    name: name,
    Tag: Tag,
    totalqustions: totalqustions
  }
  const [data2, setdata2] = useState("")
  const onSubmitForm3 = (e) => {
    e.preventDefault();

    if (Chapters, name, Tag, totalqustions !== "") {
      axios
        .post("http://localhost:5020/subjects", useData2)
        .then((response) => {
          setdata2(response.data);

          console.log(response.data);
          toast.success("Add Subjects Successfully");
          setTimeout(function () {
            // navigate("/assessment/categories");
          }, 3000);
        })

        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  const update = async (id) => {
    console.log(id);
    setGettingId(id)
    try {
      const response = await axios.get(
        "http://localhost:5020/allindividualsubject/" + id
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
      <header>
        <div className="toggle" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h3 style={{ textShadow: "2px 2px 4px white", fontSize: "40px", marginTop: "10px" }}>Skill<span className='sidebarlogo'>Hub</span></h3>
        <a href="#">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </a>
      </header>
      <nav className={`sidebar_menu ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <a className="toggle" onClick={handleToggle}>
              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <h3 style={{ textShadow: "2px 2px 4px white", fontSize: "40px", marginTop: "10px" }}>Skill<span className='sidebarlogo'>Hub</span></h3>
            </a>
          </li>
          <li>
            <Link to="/sidebar">
              <span class="material-symbols-outlined icon">dashboard</span>
              <span className="Item_Name">Dashboard</span>
            </Link>

          </li>
          <li>
            <a href="#">
              <span class="material-symbols-outlined icon">home</span>
              <span className="title">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="material-symbols-outlined icon">group</span>
              <span className="title">Users</span>
            </a>
          </li>
          <li onClick={toggleUserSubfolder3}>
            <a href="#" >
              <span className="material-symbols-outlined icon">stacks</span>
              <span className="title">Self Created QB</span>
            </a>

          </li>
          {userSubfolderVisible3 && (
            <ul className='subfolders'>
              <li>
                <Link to="/Subject">
                  <div className='d-flex flex-row'>
                    <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                    <a href="#">Subjects</a>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Chapaters">
                  <div className='d-flex flex-row'>
                    <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                    <a href="#">Chapters</a>
                  </div></Link>
              </li>
              <li onClick={toggleUserSubfolder4}>
                <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px", color: "white" }}>fiber_manual_record</span>
                  <a href="#">MCQ Questions</a>
                </div>
              </li>
              {userSubfolderVisible4 && (
                <ul className="subfolders">
                  <li>
                    <Link to="/McqCreat">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Create</a>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Meqview">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">View</a>
                      </div></Link>
                  </li>
                  <li>
                    <Link to="/Upload">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Upload</a>
                      </div></Link>
                  </li>
                </ul>
              )}
              <li onClick={toggleUserSubfolder5}>
                <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px", color: "white" }}>fiber_manual_record</span>
                  <a href="#"> Parag MCQ Questions</a>
                </div>
              </li>

              {userSubfolderVisible5 && (
                <ul className="subfolders">
                  <li>
                    <Link to="/Paragquestioncreate">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Create</a>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Paragview">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">View</a>
                      </div></Link>
                  </li>
                </ul>
              )}

              <li onClick={toggleUserSubfolder6}>
                <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px", color: "white" }}>fiber_manual_record</span>
                  <a href="#"> Coding Questions</a>
                </div>
              </li>
              {userSubfolderVisible6 && (
                <ul className="subfolders">
                  <li>
                    <Link to="/Codingcreate">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Create</a>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Codingview
               ">
                      <div className='d-flex flex-row'>
                        <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">View</a>
                      </div></Link>
                  </li>

                </ul>
              )}
            </ul>
          )}

          <li>
            <Link to="/Assignedqb">
              <a href="#" >
                <span class="material-symbols-outlined icon">search</span>
                <span className=" title">Assigned QB</span>
              </a>
            </Link>
          </li>
          <li onClick={showAssign} >
            <a href="#">
              <span className="material-symbols-outlined icon">folder</span>
              <span className=" title" >Assessment</span>
            </a>

            <li>
              {showassign && (
                <ul className="subfolders">
                  <li>
                    <Link to="/assessment/categories">
                      <div className='d-flex flex-row'>
                        <span className="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Categories</a>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/assessment">
                      <div className='d-flex flex-row'>
                        <span className="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                        <a href="#">Assessments</a>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

          </li>

          <li onClick={toggleUserSubfolder1}>
            <a href="#">
              <span className="material-symbols-outlined icon">folder</span>
              <span className="Menu_btn">Reports</span>

            </a>
          </li>
          {userSubfolderVisible1 && (
            <ul className="subfolders">
              <li>
                <Link to="/assessmentreport"> <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Assessment Report</a>
                </div></Link>
              </li>
              <li>
                <Link to="/paticipation"> <div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Participation Report</a>
                </div></Link>
              </li>
            </ul>
          )}



          <li onClick={toggleUserSubfolder2}>
            <a href="#">
              <span class="material-symbols-outlined icon">group</span>
              <span className="Item_Name">Assigned Assessments</span>

            </a>
          </li>
          {userSubfolderVisible2 && (
            <ul className='subfolders'>
              <li>
                <Link to="/assingedcategories"><div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Categories</a>
                </div> </Link>
              </li>
              <li>
                <Link to="/assingesassessment"><div className='d-flex flex-row'>
                  <span class="material-symbols-outlined p-2" style={{ fontSize: "25px" }}>fiber_manual_record</span>
                  <a href="#">Assessments</a>
                </div> </Link>
              </li>
            </ul>
          )}


          <li>
            <Link to="/compare">
              <span class="material-symbols-outlined icon">repeat</span>
              <span className="title">Compare</span>
            </Link>

          </li>

          <li>
            <a href="#">
              <span className="icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
              <span className="title" onClick={onClicklogout}>Log Out</span>
            </a>
          </li>
        </ul>

      </nav>
      <div
        className={`content-container ${isActive ? "shifted-content" : ""}`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
            <div class="box">
          <div class="content">
            <div className="">
              <div className="d-flex flex-row ">
                <p className="assement">Subjects</p>
                <button className="creat1" data-bs-toggle="modal" data-bs-target="#myModal11" >+ Create Subjects</button>
                <div class="modal" id="myModal11">
                  <div class="modal-dialog">
                    <div class="modal-content text-start" style={{ width: "40vw" }}>

                      <div class="modal-header">
                        <h4 class="modal-title">Add Subject</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                      </div>

                      <div class="modal-body">
                        <ToastContainer
                          position="top-right"
                          autoClose={1000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="colored"
                        />
                        <form onSubmit={onSubmitForm3} >
                          <label>Name</label><br />
                          <input className='input' style={{ height: "4vh" }} onChange={(e) => setname(e.target.value)}
                            value={name} /><br />
                          <label>Description</label><br />
                          <input className='input' style={{ height: "4vh" }} onChange={(e) => setChapters(e.target.value)}
                            value={Chapters} /><br />
                          <label>Subject Tag</label><br />
                          <input className='input' style={{ height: "4vh" }} onChange={(e) => setTag(e.target.value)}
                            value={Tag} /><br />
                          <label>Totalqustions</label><br />
                          <input className='input' style={{ height: "4vh" }} onChange={(e) => settotalqustions(e.target.value)}
                            value={totalqustions} /><br />
                          <p>Note:Updating Subject Tag will set all the Chapter Tags of Chapter Inside the Subject to others</p>
                          <button className="creat12" >ADD</button>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              <div className="text-start m-4">
                <label className="showname">Show</label><br />


                <select className="show">
                  <option>1</option>
                </select>
                <div>
                  <label className="seach" >Seach</label>
                  <input className='p-2' />
                  <button className="seachbut p-2" style={{ backgroundColor: "#ae1e97" }}>seach</button></div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>NAME</th>
                    <th>TAG</th>
                    <th>CHAPTERS </th>
                    <th>TOTAL QUESTIONS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {blogslist.length > 0 ? (
                    blogslist.map((blog, index) => (
                      <tr key={blog.id}>
                        <td>{index + 1}</td>
                        <td>{blog.name}</td>
                        <td>{blog.Tag}</td>
                        <td>{blog.Chapters}</td>
                        <td>{blog.totalqustions}</td>
                        <td><div>
                          <span className="material-symbols-outlined editicon" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => update(blog._id)} >edit_square</span>


                          <div class="modal" id="myModal">
                            <div class="modal-dialog">
                              <div class="modal-content" style={{ width: "40vw" }}>

                                <div class="modal-header">
                                  <h4 class="modal-title">Edit Subject</h4>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div class="modal-body">

                                  <form>
                                    <label>Name</label><br />
                                    <input className='input' value={individualInstitute.name}
                                      onChange={(e) =>
                                        setIndividualInstitute({
                                          ...individualInstitute,
                                          name: e.target.value,
                                        })} style={{ height: "4vh" }} /><br />
                                    <label>Description</label><br />
                                    <input className='input' style={{ height: "4vh" }} value={individualInstitute.Description}
                                      onChange={(e) =>
                                        setIndividualInstitute({
                                          ...individualInstitute,
                                          Description: e.target.value,
                                        })} /><br />
                                    <label>Subject Tag</label><br />
                                    <input className='input' style={{ height: "4vh" }} value={individualInstitute.Tag}
                                      onChange={(e) =>
                                        setIndividualInstitute({
                                          ...individualInstitute,
                                          Tag: e.target.value,
                                        })} /><br />
                                    <label>Subject Tag</label><br />
                                    <input className='input' style={{ height: "4vh" }} value={individualInstitute.totalqustions}
                                      onChange={(e) =>
                                        setIndividualInstitute({
                                          ...individualInstitute,
                                          totalqustions: e.target.value,
                                        })} /><br />
                                    <p>Note:Updating Subject Tag will set all the Chapter Tags of Chapter Inside the Subject to others</p>
                                    <button className="creat12" onClick={onSubmitForm} >Update</button>
                                  </form>
                                </div>

                              </div>
                            </div>
                          </div>

                          <span className="material-symbols-outlined delete" >delete</span>
                        </div></td>
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
      

      </div>




    </div>
  )
}

export default Subject