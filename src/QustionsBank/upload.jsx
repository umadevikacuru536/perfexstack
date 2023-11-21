import React from 'react'
import Sidebar from '../sidebar/sidebar'
import './subject.css'
function Upload() {
  return (
    <>
    <Sidebar />
    <div className='container'>
      <div className='row'>
       
         <div className='col-md-12'>
      <div className="card-container1">
        <div className='d-flex flex-row'>
        <h3 className='card2'>Upload Questions</h3>
        <button className='downloadbtn'><span class="material-symbols-outlined">download</span> Download Format</button>
        </div>
        <hr className="line" />
        <div className="form-container">
          <div className="col-md-6">
            <label className="qustionlabel">Subject</label><br/>
            <select className="option1" >
              <option value="">Select Batch Subject</option>
            
            </select>
          </div>
  
          <div className="col-md-6">
            <label className='qustionlabel'>Chapter</label><br/>
            <select className="option1" >
              <option value="">Select Batch Chapter</option>
            </select>
          </div>
          <div className="">
            <label className='qustionlabel'>Question file</label><br/>
  
            <button className="option1" style={{backgroundColor:"white"}}>Choose File</button>
          </div>
         
          
          
        </div>
        <button className='upload'>Upload Questions</button>
      </div>
      </div>
   

        
      </div>

    </div>
   
  </>
  )
}

export default Upload