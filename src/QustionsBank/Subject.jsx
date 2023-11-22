import React from 'react'
import Sidebar from '../sidebar/sidebar'
import { Link } from 'react-router-dom';
import './subject.css'
function Subject() {
  return (
    <div>
          <div className="d-flex flex-row">
        <Sidebar />
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
    <div class="modal-content" style={{ width: "40vw" }}>

      <div class="modal-header">
        <h4 class="modal-title">Edit Subject</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
     
        <form >
        <label>Name</label><br/>
        <input/><br/>
        <label>Description</label><br/>
        <input/><br/>
        <label>Subject Tag</label><br/>
        <input/><br/>
        <p>Note:Updating Subject Tag will set all the Chapter Tags of Chapter Inside the Subject to others</p>
          <button className="creat12" >Update</button>
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
            <input  className='p-2' />
            <button className="seachbut p-2"style={{backgroundColor : "#ae1e97"}}>seach</button></div>
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
        <label>Name</label><br/>
        <input/><br/>
        <label>Description</label><br/>
        <input/><br/>
        <label>Subject Tag</label><br/>
        <input/><br/>
        <p>Note:Updating Subject Tag will set all the Chapter Tags of Chapter Inside the Subject to others</p>
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
        </div>
        
      </div>
        </div>
  )
}

export default Subject