import React from 'react'
import Sidebar from '../sidebar/sidebar'
import { Link } from 'react-router-dom';
import './assigned.css';
function  Schedule() {
  
  

  
  return (
    <div>
      <div className="d-flex flex-row">
        <Sidebar />
        <div className="card21">
          <div className="d-flex flex-row ">
            <p className="assement">Access</p>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Institute</th>
                <th>Batchyear</th>
                <th>Batch</th>
                <th>Access</th>
                <th>User Level Access</th>
                <th>Freeze Test</th>
                <th>Schedule</th>
              </tr>
            </thead>
            <tbody>
             
                  
                        <td>1</td>
                        <td>Corporate Office</td>
                        <td>2023</td>
                        <td>2023 10 Batch</td>
                        <td><span class="material-symbols-outlined" style={{background:"none",color:"blue"}}>toggle_on</span></td>
                        <td>No</td>
                        <td><span class="material-symbols-outlined" style={{background:"none"}}>toggle_off</span></td>
                <td>
                  <div style={{background:"none"}}>
                    <button className='timeschedule'>Time Schedule</button>
                    <span class="material-symbols-outlined groupicon">group</span>
                  </div></td>
                  
                  
           
            </tbody>

          </table>

        </div>
      </div>
    </div>
  )
}

export default Schedule;
