
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "../SidebarData";
import { IconContext } from "react-icons";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from '../sidebar/sidebar'
function Courses() {
  const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const [blogslist, setblogslist] = useState([]);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
    const [navItemsVisible, setNavItemsVisible] = useState(false);

    const toggleNavItems = () => {
      setNavItemsVisible(!navItemsVisible);
    };
    useEffect(() => {
      fetchblogs();
    },[]);
    
    const chartbox =()=>{
      navigate("/chat")
    }
    const [examname,setexamname]=useState("")
    const searchBySkills = () => {
      const filteredBlogs = blogslist.filter(
        (blog) =>
          blog.author &&
          blog.author
            .toLowerCase()
            .includes(examname.toLowerCase().trim())
      );
      setblogslist(filteredBlogs);
    };
  
    const fetchblogs = async () => {
      const api = "http://localhost:5020/allcourses";
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
          <p className="assement">LEARNING PATH</p>
          <Link to="/coursesadd"><button className="creat1">+ Add Learning path</button></Link>
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
            <input value={examname} onChange={(e)=>setexamname(e.target.value)}/>
            <button onClick={searchBySkills} className="seachbut">seach</button>
          </div>
          <table className="table">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>NAME</th>
                  <th>TOPICS</th>
                  <th>LAST UPDATE </th>
                  <th>PUBLESH</th>
                  <th>SUBSCRIPTION</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
              {blogslist.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.sno}</td>
                <td>{blog.author}</td>
                <td>{blog.topic}</td>
                <td>{blog.lastupdate}</td>
                <td>{blog.learn}</td>
                <td>{blog.subscription}</td>
                <td>
                  <div className="A">
                    <span className="fa-solid fa-eye " ></span>
                 <span class="material-symbols-outlined editicon"
                       >edit_square</span> 
                    
                    <span class="material-symbols-outlined">delete</span>

                  </div>
                </td>
              </tr>

            ))}
              </tbody>
            </table>
    
          </div>
        </div>
            </div>
  )
}

export default Courses