import React from 'react'
import Sidebar from '../sidebar/sidebar'

function AssessmentReport() {
  return (
    <>
    <Sidebar/>
    <div className='container'>
          <div className='row'>
            <div className="col-md-12">
      <div className="main-container">
        
       
        <div className="card-container2 p-5">
          <div className='card3'>
          <h3>Accessment Reports</h3>
          <div className="text-start m-4">
        <label className="showname">Show</label><br/>
      
  
        <select className="show">

    <option>1</option>
    </select>

        <label className="seach ">Seach</label>
        <input  className='p-2'/>
                <button className="seachbut p-2 bg-primary" >seach</button>
      </div>
          </div>
         <div>
          <table className="table">
            <thead>
              <tr>
                <th>Sno</th>
                <th>CATEGORY</th>
                <th>ASSESSMENT</th>
                <th>ATTEMPTS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
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

export default AssessmentReport