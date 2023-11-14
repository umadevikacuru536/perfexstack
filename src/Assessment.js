import React, { useState } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import "./App.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
function Asssessment() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate()
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const [navItemsVisible, setNavItemsVisible] = useState(false);
  const [blogslist, setblogslist] = useState([]);
  const toggleNavItems = () => {
    setNavItemsVisible(!navItemsVisible);
  };
  useEffect(() => {
    fetchblogs();
  }, []);


  const [examname, setexamname] = useState("")
  const searchBySkills = () => {
    const filteredBlogs = blogslist.filter(
      (blog) =>
        blog.assessmentname &&
        blog.assessmentname
          .toLowerCase()
          .includes(examname.toLowerCase().trim())
    );
    setblogslist(filteredBlogs);
  };
  const fetchblogs = async () => {
    const api = " http://localhost:5020/allassessment";
    try {
      const response = await axios.get(api, {

      });
      setblogslist(response.data);


    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const chartbox = () => {
    navigate("/chat")
  }



  return (
    <div>
      <div className="d-flex flex-row">
        <Sidebar />
        <div className='container'>
          <div className='row'>
            <div className="col-md-12">
        <div className="card21 shadow">
          <div className="d-flex flex-row ">
            <p className="assement">Assessment List</p>
            <Link to="/assessmentadd"><button className="creat1">+ Create Assessment</button></Link>
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

            <label className="seach">Seach</label>
            <input value={examname} className="p-2"
              onChange={(e) => setexamname(e.target.value)} />
            <button onClick={searchBySkills} className="seachbut p-2" style={{backgroundColor : "#a509de"}}>seach</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>EXAM ID</th>
                <th>EXAM SERIES</th>
                <th>EXAM NAME </th>
                <th>PASSWORD</th>
                <th>QUES SELECTION</th>
                <th>DISPLAY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {blogslist.length > 0 ? (
                blogslist.map((blog) => (
                  <tr key={blog.id}>
                    <td>{blog.sno}</td>
                    <td>{blog.examid}</td>
                    <td>{blog.category}</td>
                    <td>{blog.assessmentname}</td>
                    <td>{blog.assessmentpassword}</td>
                    <td>{blog.questionselection}</td>
                    <td>{blog.assessmentreport}</td>
                    <td>
                      <div className="A">
                        <span className="fa-solid fa-eye eyeicon"></span>
                        <span className="material-symbols-outlined editicon1">edit_square</span>
                        <span className="material-symbols-outlined deleteicon">delete</span>
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
export default Asssessment;