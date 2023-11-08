import React, { useState, useEffect } from "react";
import logo from '../src/img/_94715d91-9ccb-448a-a29a-a52b3610949f.jpeg';
import "./App.css"; // You can create an App.css file for styling
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "./SidebarData";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
function Admin() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const navigate = useNavigate()
  const [blogslist, setblogslist] = useState([]);
  const handleEmailSubmit = () => {
    // You can add validation here if needed
    console.log("Email:", email);
    navigate(`/detial?email=${email}`);
  };
 

  useEffect(() => {
    fetchblogs();
  });
  



  const fetchblogs = async () => {
    const api = "http://localhost:5020/alladmin";
    try {
      const response = await axios.get(api, {

      });
      setblogslist(response.data);

    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const [sno, setsno] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [head, sethead] = useState("");
  const [secondaryemail, setsecondaryemail] = useState("");
  const [userscount, setuserscount] = useState("");
  const [primarycontact, setprimarycontact] = useState("");
  const [secondarycontact, setsecondarycontact] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [password, setpassword] = useState("");
  const [code, setcode] = useState("");
  const [InstitutionType, setInstitutionType] = useState("");
  const [Accessplan, setAccessplan] = useState("");

  const [data2, setdata2] = useState([]);

  const useData2 = {
    sno: sno,
    name: name,
    email: email,
    head: head,
    secondaryemail: secondaryemail,
    userscount: userscount,
    primarycontact: primarycontact,
    secondarycontact: secondarycontact,
    address: address,
    city: city,
    password: password,
    code: code,
    InstitutionType: InstitutionType,
    Accessplan: Accessplan
  };
  const chartbox =()=>{
    navigate("/chat")
  }

  const onSubmitForm3 = (e) => {
    e.preventDefault();

    if (sno, name, email, head, secondaryemail, userscount, primarycontact, secondarycontact, address, city, password,
    code,InstitutionType,Accessplan !== "") {
      axios
        .post("http://localhost:5020/admin", useData2)
        .then((response) => {
          setdata2(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
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
        " http://localhost:5020/deleteInstitute/" + id
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
    <div className="d-flex flex-row">
  <Sidebar/>
  
    <div className="d-flex flex-row">
      <div className="admin">
        <div className="d-flex flex-row">
          <h3 className="institu">Institutions</h3>
          {/* <Link to="/crate"> <button className="creat">Create +</button></Link> */}
          <div className="edit">
            {" "}
           <Link to="/adminadd"> <i
              type="button"
              class="material-symbols-outlined text-start"
              style={{ marginLeft: "400px" }}
            >
              edit_square
            </i></Link>
           
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Head</th>
              <th>Users Count</th>
              <th>Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogslist.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.sno}</td>
                <td>{blog.name}</td>
                <td>{blog.email}</td>
                <td>{blog.head}</td>
                <td>{blog.userscount}</td>
                <td>{blog.code}</td>
                <td>
                  <div className="A">
                    <Link to={`/detial?email=${blog.email}`} className="fa-solid fa-eye " ></Link>
                   <Link to={`/Update/${blog.email}`}><span class="material-symbols-outlined editicon"
                       >edit_square</span></Link> 

                    <span class="material-symbols-outlined" onClick={() => handleDelete(blog._id)}>delete</span>

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
export default Admin;