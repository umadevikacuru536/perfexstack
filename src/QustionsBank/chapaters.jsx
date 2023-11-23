import React from 'react'
import Sidebar from '../sidebar/sidebar'
import { Link } from 'react-router-dom';
import './subject.css'
function Chapaters() {
    return (
        <>
            <Sidebar />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <div className='col-md-12'>
                            <div className="card-container1">
                                <h3 className='card2'>Filter Modules:</h3>
                                <hr className="line" />
                                <div className="form-container">
                                    <div className="">
                                        <h1 className='head'>Select Module</h1>
                                        <select className="option1" >
                                            <option value="">Select module</option>

                                            <option >


                                            </option>

                                        </select>
                                       
                                        <button className='bg-success text-white ' style={{marginLeft:"300px",padding:"10px",borderRadius:"10px"}}>Go</button>
                                        <button className='bg-white ' style={{marginLeft:"10px",padding:"10px",borderRadius:"10px",borderColor:"orangered"}} >Clear Filter</button>
                                        <button className='bg-primary text-white' style={{marginLeft:"10px",padding:"10px",borderRadius:"10px"}}>Get All Chapters</button>
                                      
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-2'></div>
                        <div className='col-md-12'>
                            <div className="card21">
                                <div className="d-flex flex-row ">
                                    <p className="assement">CHAPTERS</p>
                                    <button className="creat1" data-bs-toggle="modal" data-bs-target="#myModal11" >+ Create Chapters</button>
                                    <div class="modal" id="myModal11">
                                        <div class="modal-dialog">
                                            <div class="modal-content text-start " style={{ width: "40vw" }}>

                                                <div class="modal-header">
                                                    <h4 class="modal-title">Add Chapters</h4>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                <div class="modal-body">

                                                    <form >
                                                        <label>Name</label><br />
                                                        <input className='input' style={{height:"4vh"}}/><br />
                                                        <label>Description</label><br />
                                                        <input className='input'  style={{height:"4vh"}}/><br />
                                                        <label>Subject</label><br />
                                                        <input  className='input'  style={{height:"4vh"}}/><br />
                                                        <label>Chapter tag</label><br />
                                                        <p>Note:Updating Chapter Tag will set all the Chapter Tags of Chapter Inside the Subject to others</p>
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
                                            <th>MODULE</th>
                                            <th>CHAPTERS NAME</th>
                                            <th>TAG</th>
                                            <th> QUESTIONS</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><div>
                                            <span className="material-symbols-outlined editicon" data-bs-toggle="modal" data-bs-target="#myModal" >edit_square</span>


                                            <div class="modal" id="myModal">
                                                <div class="modal-dialog">
                                                    <div class="modal-content" style={{ width: "40vw" }}>

                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Edit Subject</h4>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        <div class="modal-body">

                                                            <form >
                                                                <label>Name</label><br />
                                                                <input className='input'  style={{height:"4vh"}}/><br />
                                                                <label>Description</label><br />
                                                                <input className='input'  style={{height:"4vh"}}/><br />
                                                                <label>Subject </label><br />
                                                                <input className='input'  style={{height:"4vh"}}/><br />
                                                                <label>Chapter Tag </label><br />
                                                                <p>Note:Updating Chapter Tag will set all the Chapter Tags of Chapter Inside the Subject to others</p>
                                                                <button className="creat12" >Update</button>
                                                            </form>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <span className="material-symbols-outlined delete" >delete</span>
                                        </div></td>
                                    </tbody>

                                </table>

                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Chapaters