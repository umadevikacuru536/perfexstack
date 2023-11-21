import React from 'react'
import Sidebar from '../sidebar/sidebar'
import './subject.css'
function Meqview() {
  return (
    <>
    <Sidebar />
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 '>
         <div className='col-md-12'>
      <div className="card-container1">
        <h3 className='card2'>Filter Text Questions:</h3>
        <hr className="line" />
        <div className="form-container">
          <div className="col-md-2">
            <label className="qustionlabel">Module</label><br/>
            <select className="option12" >
              <option value="">Select Batch Module</option>
            
            </select>
          </div>
  
          <div className="col-md-2">
            <label className='qustionlabel'>Chapter</label><br/>
            <select className="option12" >
              <option value="">Select Batch Chapter</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className='qustionlabel'>Difficulty</label><br/>
            <select className="option12" >
              <option value="">Select Batch Difficulty</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className='qustionlabel'>Reference</label><br/>
            <select className="option12" >
              <option value="">Select Batch Reference</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className='qustionlabel'>Question Type</label><br/>
            <select className="option12" >
              <option value="">Select Batch Question Type</option>
            </select>
          </div>
          
        </div>
        <div className='m-3'>
        <button className='bg-success text-white ' style={{marginLeft:"500px",padding:"10px",borderRadius:"10px"}}>Go</button>
          <button className='bg-white ' style={{marginLeft:"10px",padding:"10px",borderRadius:"10px",borderColor:"orangered"}} >Clear Filters</button>
          </div>
      </div>
      </div>
      <div className='col-md-2'></div>
      <div className='col-md-12'>
      <div className="card-container2">
        <div className='card3'>
          <h3>Question Table</h3>
          <hr className="line" />
        </div>
        <div>
        <div className="text-start m-4">
                                    <label className="showname">Show</label><br />


                                    <select className="show">
                                        <option>0</option>
                                    </select>
                                    <div style={{marginLeft:"800px"}}>
                                       
                                        <input className='p-2' />
                                        <button className="seachbut p-2" style={{ backgroundColor: "#ae1e97" }}>seach</button></div>
                                </div>
          <table className="table">
            <thead>
              <tr>

                <th>S.NO</th>
                <th>ID</th>
                <th>MODULE</th>
                <th>CHAPTER</th>
                <th>QUESTION</th>
                <th>DIFFICULTY</th>
                <th>QUSTION TYPE</th>
                <th>REFERENCE</th>
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
<td></td>
<td></td>
          </table>
        </div>
      </div>
      </div>
      </div>

        
      </div>

    </div>
   
  </>
  )
}

export default Meqview