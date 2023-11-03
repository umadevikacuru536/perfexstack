import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "../SidebarData";
import axios from "axios";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./course.css";
function Coursesadd(){
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
    const [editorData, setEditorData] = useState('');
    const [selectedHours, setSelectedHours] = useState('1');
  const [selectedMinutes, setSelectedMinutes] = useState('1');
  const [selectedImage, setSelectedImage] = useState('');

  const handleHoursChange = (e) => {
    setSelectedHours(e.target.value);
  };

  const handleMinutesChange = (e) => {
    setSelectedMinutes(e.target.value);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage1] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
// const imgs = document.getElementById("img").style.display="none"
    if (file) {
      const allowedFormats = [
        "image/png", "image/jpeg", "image/gif",
      ];
      const maxSize = 8 * 1024 * 1024; // 2MB
// const file1 = document.getElementById("file").style.display="none"
      if (allowedFormats.includes(file.type) && file.size <= maxSize) {
        setSelectedFile(file);
        setErrorMessage1("");
        
      } else {
        setSelectedFile(null);
        setErrorMessage1("Invalid file format or size exceeds 2MB.");
      }
    }
  };
    const [navItemsVisible, setNavItemsVisible] = useState(false);

    const toggleNavItems = () => {
      setNavItemsVisible(!navItemsVisible);
    };
    function myFunction() {
      document.getElementById("myTime").stepUp();
    }
    const [sno, setsno] = useState("");
    const [author, setauthor] = useState("");
    const [topic, settopic] = useState("");
    const [lastupdate, setlastupdate] = useState("");
    const [aboutlearning, setaboutlearning] = useState("");
    const [subscription, setsubscription] = useState("");
    const [learn, setlearn] = useState("");
    const [requirement, setrequirement] = useState("");
    const [difficulty, setdifficulty] = useState("");
    const [coverletter, setcoverletter] = useState("");
   
    const chartbox =()=>{
      navigate("/chat")
    }
    const navigate = useNavigate();
    const useData2 = {
      sno:sno,
        author: author,
        topic: topic,
        lastupdate: lastupdate,
        aboutlearning: aboutlearning,
        subscription: subscription,
        learn: learn,
        requirement: requirement,
        difficulty: difficulty,
        coverletter:coverletter
    };

    const onSubmitForm3 = (e) => {
        e.preventDefault();

        if (sno,author, topic, lastupdate, aboutlearning, subscription, learn, requirement, difficulty,coverletter !== "") {
            axios
                .post("http://localhost:5020/courses", useData2)
                .then((response) => {
                    if (response.status === 200) {
                        let jwtToken = response.data.token;
                        localStorage.setItem("token", jwtToken);

                        toast.success("Registration Successfull", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        navigate("/courses");
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                    toast.error("Registration Failed");
                });
        } else {
            toast.warning("Enter the Required Details");
        }
    }

   
    return(
        <div>
<div className="d-flex flex-row">
<IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
        <img src="https://cdn-icons-png.flaticon.com/512/2899/2899298.png" className="chartbox" onClick={chartbox}/>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            const { title, path, icon, cName } = item;
            return (
              <li key={index} className={cName}>
                <Link to={path}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
    <div class="coursers ">
                    <div class="modal-content">
                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h3>CREATE Courses</h3>
                            <Link to="/courses"><button type="button" class="btn-close"></button></Link>
                        </div>
                        <div class="modal-body">
                            <div class="text-start">
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
    <form className="text-start">
    <label className="profilename">sno</label><br/>
    <input placeholder="slect Relevant tags" className="input" onChange={(e) => setsno(e.target.value)} value={sno}/><br/>
    <label className="profilename">Tags</label><br/>
    <input placeholder="slect Relevant tags" className="input" onChange={(e) => settopic(e.target.value)} value={topic}/><br/>
    <label className="profilename">Cover letter</label><br/>
    <textarea id="w3review" name="w3review" rows="6" cols="70"onChange={(e) => setcoverletter(e.target.value)} value={coverletter} ></textarea><br/>
    <label className="profilename">Difficulty</label><br/>
     <select className="input"onChange={(e) => setdifficulty(e.target.value)} name={difficulty}>
        <option  >select the difficulty level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
       <option value="Adavanced">Adavanced</option>
     </select><br/>
     <label className="profilename">Subscription</label><br/>
     <select className="input" onChange={(e) => setsubscription(e.target.value)} value={topic} name={subscription}>
        <option >select Subscription</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
     </select><br/>
     <label className="profilename">About this learning path</label><br/>
     <CKEditor 
        editor={ClassicEditor}
      
        data={editorData}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setaboutlearning(data);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
       value={aboutlearning }/>
     <label className="profilename">Author</label><br/>
     <input placeholder="Author" className="input" onChange={(e) => setauthor(e.target.value)} value={author}/><br/>
     
    <div className="d-flex flex-row">
        <div className="d-flex flex-column" style={{marginRight:"80px"}}>
      <label className="profilename">Hours</label><br/>
      <input type="time" id="myTime" onChange={(e) => setlastupdate(e.target.value)} value={lastupdate}/>
      </div>
      <div className="d-flex flex-column" style={{marginLeft:"70px"}}>
      <label className="profilename">Learning Image</label><br/>
      <input
                  id="file"
                    type="file"
                    accept="image/png,image/jpeg,image/gif"
                    onClick={handleFileChange}
       />
        {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )}
                  {selectedFile && (
                    <div>
                     
                      <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Image"class="rounded-circle" 
            style={{ maxWidth: '100%', maxHeight: '200px',borderRadius:"10px" }}
          />
                    </div>
                  )}
       </div>     
    </div>
    <div>
        <label className="profilename">What you'll learn</label>
        <button className="ma">+Add</button>
       </div>
       <input className="input" onChange={(e) => setlearn(e.target.value)} value={learn}/>
         <div>
          <label className="profilename">Requirements</label>
          <button className="ma">+Add</button>
          </div> 
          <input className="input" onChange={(e) => setrequirement(e.target.value)} value={requirement} /> <br/>
          <button className="creat12" onClick={onSubmitForm3}>Create</button>
    </form>
    </div>
    </div>
</div>
</div>
    </div>
 
        </div>
    )
}
export default Coursesadd;