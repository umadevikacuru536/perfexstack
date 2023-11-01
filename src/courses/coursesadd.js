import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import sidebarData from "../SidebarData";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
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
    
    return(
        <div>
<div className="d-flex flex-row">
<IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
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
                            <h3>CREATE ASSESSMENT</h3>
                            <Link to="/courses"><button type="button" class="btn-close"></button></Link>
                        </div>
                        <div class="modal-body">
                            <div class="text-start">
    <from className="text-start">
    <label className="profilename">Tags</label><br/>
    <input placeholder="slect Relevant tags" className="input"/><br/>
    <label className="profilename">Cover letter</label><br/>
    <textarea id="w3review" name="w3review" rows="6" cols="70"></textarea><br/>
    <label className="profilename">Difficulty</label><br/>
     <select className="input" >
        <option >select the difficulty level</option>
        <option >Beginner</option>
        <option >Intermediate</option>
       <option >Adavanced</option>
     </select><br/>
     <label className="profilename">Subscription</label><br/>
     <select className="input" >
        <option >select Subscription</option>
        <option >Free</option>
        <option >Paid</option>
     </select><br/>
     <label className="profilename">About this learning path</label><br/>
     <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onReady={(editor) => {
          // You can use the editor instance here
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
     <label className="profilename">Author</label><br/>
     <input placeholder="Author" className="input" /><br/>
     
    <div className="d-flex flex-row">
        <div className="d-flex flex-column" style={{marginRight:"80px"}}>
      <label className="profilename">Hours</label><br/>
      {/* <select className="hours" value={selectedHours} onChange={handleHoursChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select> */}
      <input type="time" id="myTime" value="16"/>
      </div>
      <div className="d-flex flex-column">
      <label className="profilename">Minutes</label><br/>
      <select value={selectedMinutes} onChange={handleMinutesChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
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
       <input className="input" />
         <div>
          <label className="profilename">Requirements</label>
          <button className="ma">+Add</button>
          </div> 
          <input className="input" /> <br/>
          <button className="creat12">Create</button>
    </from>
    </div>
    </div>
</div>
</div>
    </div>
 
        </div>
    )
}
export default Coursesadd;