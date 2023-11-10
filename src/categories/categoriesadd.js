import React from 'react'
import Sidebar from '../sidebar/sidebar';
import { Link } from 'react-router-dom';
import './categoris.css';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
function Categoriesadd() {
    const [sno, setsno] = useState("");
    const [name, setname] = useState("");
    const [tag, settag] = useState("");
    const [accesstype, setaccesstype] = useState("");
    const [accessplan, setaccessplan] = useState("");
    const [display, setdisplay] = useState("");
    const [description, setdescription] = useState("");


    const [data2, setdata2] = useState([]);
    let navigate= useNavigate();
    const useData2 = {
        sno: sno,
        name: name,
        description: description,
        tag: tag,
        accesstype: accesstype,
        accessplan: accessplan,
        display: display

    };
    const onSubmitForm3 = (e) => {
        e.preventDefault();

        if (sno, name, description, tag, accesstype, accessplan, display !== "") {
            axios
                .post("http://localhost:5020/categoris", useData2)
                .then((response) => {
                    setdata2(response.data);

                    console.log(response.data);
                    toast.success("Add Categories Successfully");
                    setTimeout(function () {
                        navigate("/assessment/categories");
                      }, 3000);
                })
                
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            toast.warning("Enter the Required Details");
        }
    };
    return (
        <div>
            <div className="d-flex flex-row">
                <Sidebar />
                <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
                <div className="ram">
                    <div class="modal-dialog99">
                        <div class="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div class="modal-header">
                                <h3>CREATE Categories</h3>
                                <Link to="/assessment"><button type="button" class="btn-close"></button></Link>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div class="modal-body">
                                <div class="text-start">
                                    <div class="row">
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
                                        <form>
                                            <div class="col-md-7">
                                                <label className="profilename1">Sno</label>
                                                <br />
                                                <input className="p-2 w-100"style={{borderRadius:"10px",borderColor:"gray"}}  placeholder="select category" onChange={(e) => setsno(e.target.value)}
                                                    value={sno} /><br/>

                                                <label className="profilename1">Name</label>
                                                <br />
                                                <input className="p-2 w-100" style={{borderRadius:"10px",borderColor:"gray"}} placeholder="select category" onChange={(e) => setname(e.target.value)}
                                                    value={name} /><br/>

                                                <label className="profilename1">Description</label>
                                                <br />
                                                <textarea rows="4" cols="80" style={{borderRadius:"10px",borderColor:"gray"}}  onChange={(e) => setdescription(e.target.value)}
                                                    value={description} ></textarea> <br />
                                                <label className="profilename1">AccessType</label> <br />
                                                <select className='p-2 w-100' style={{borderRadius:"10px",borderColor:"gray"}} onChange={(e) => setaccesstype(e.target.value)}>
                                                    <option value="AccessType">AccessType</option>
                                                    <option value="All">All</option>
                                                    <option value="Restricted">Restricted</option>
                                                </select><br />
                                                <label className="profilename1">Tag</label> <br />
                                                <div className='dropdown dropend'>
                                                    <select  onChange={(e) => settag(e.target.value)} className="p-2 w-100"style={{borderRadius:"10px",borderColor:"gray"}} >
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
                                                <select onChange={(e) => setaccessplan(e.target.value)}style={{borderRadius:"10px",borderColor:"gray"}} className='p-2 w-100'>
                                                    <option value="Accessplan">Accessplan</option>
                                                    <option value="free">free</option>
                                                    <option value="Retail">Retail</option>
                                                </select><br />
                                                <label className="profilename1">Display</label> <br />
                                                <select onChange={(e) => setdisplay(e.target.value)}style={{borderRadius:"10px",borderColor:"gray"}} className='p-2 w-100'>
                                                    <option value="Status">Status</option>
                                                    <option value="No">No</option>
                                                    <option value="Yes">Yes</option>
                                                </select><br />
                                            </div>
                                            <button className="creat12" onClick={onSubmitForm3}>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
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

export default Categoriesadd