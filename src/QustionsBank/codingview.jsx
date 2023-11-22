import React from 'react'
import Sidebar from '../sidebar/sidebar'
import './subject.css'
function Codingview() {
  return (
    <>
    <Sidebar />
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 '>
         <div className='col-md-12'>
      <div className="card-container1">
        <h3 className='card2'>Filter Coding Questions:</h3>
        <hr className="line" />
        <div className="form-container">
          <div className="col-md-4">
            <label className="qustionlabel">Subject</label><br/>
            <select className="option12 w-100" >
              <option value="">Select Subject</option>
            
            </select>
          </div>
  
          <div className="col-md-4">
            <label className='qustionlabel'>Chapter</label><br/>
            <select className="option12 w-100" >
              <option value="">Select  Chapter</option>
            </select>
          </div>
          
         
          <div className="col-md-2">
          <div className='m-3'>
        <button className='bg-success text-white ' style={{marginLeft:"0px",padding:"10px",borderRadius:"10px"}}>Go</button>
          <button className='bg-white ' style={{marginLeft:"10px",padding:"10px",borderRadius:"10px",borderColor:"orangered"}} >Clear Filters</button>
          </div>
          </div>
          
        </div>
        
      </div>
      <div className="card-container1">
        <h3 className='card2'>Seach Coding Questions:</h3>
        <hr className="line" />
        <div className="form-container">
         
  
          <div className="col-md-12">
          <input className='w-25' style={{borderRadius:"10px",borderColor:"gray",height:"5vh"}}/>
          <button className='bg-primary text-white' style={{marginLeft:"10px",borderRadius:"10px",padding:"1vh"}}>Search</button>
          </div>
          
        </div>
        
      </div>
      </div>
      <div className='col-md-2'></div>
      <div className='col-md-12'>
      <div className="card-container2">
        <div className='card3'>
          <h3>Coding Questions Table</h3>
          <hr className="line" />
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>

                <th>S.NO</th>
                <th>ID</th>
                <th>MODULE</th>
                <th>CHAPTER</th>
                <th>TITLE</th>
                <th>VALIDATED</th>
                <th>Actions</th>
              </tr>
            </thead>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>

          </table>
        </div>
      </div>
      </div>
      </div>

        
      </div>

    </div></>
  )
}

export default Codingview