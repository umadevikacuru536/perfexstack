
import './assigned.css';
import Sidebar from '../sidebar/sidebar';
function AssessmentEye() {
    return (
        <>
            <Sidebar />
            <div className='container'>
          <div className='row'>
            <div className='eyecard shadow col-md-10 mt-3'>
            <div className=''>
                <p className='mcq'>Java MCQ Topwise<span> - Strings</span></p>
                <p className='real'>Realtime Users: <span>0</span></p>
                <div className='add'>
                    <div className="attempt">
                        <p className='attempts'>Total Attempts</p>
                        <p>9</p>
                    </div>
                    <div className="attempt1">
                        <p className='attempts'>Completed</p>
                        <p>6</p>
                    </div>
                    <div className="attempt1">
                        <p className='attempts'>In Progress</p>
                        <p>3</p>
                    </div>
                    <div className="attempt1">
                        <p className='attempts'>Qualified</p>
                        <p>3</p>
                    </div>
                    <div className="attempt">
                        <p className='attempts'>Not Qualified</p>
                        <p>3</p>
                    </div>
                    <div className="attempt1">
                        <p className='attempts'>Highest %</p>
                        <p>90</p>
                    </div>
                </div>
                <hr style={{marginRight:"5vh"}}/>
                <p className='action'>Actions</p>
                <div className='actions d-flex flex-row'>
                    
                    <div className='d-flex flex-row'>
                    <button className='donload'><span class="material-symbols-outlined">download</span> Download</button>
                        </div>
                        <div className='d-flex flex-row'>
                    <button  className='donload1'><span class="material-symbols-outlined">filter_alt</span>Surway Report</button>
                        </div>
                        <div className='d-flex flex-row'>
                    <button  className='donload2'><span class="material-symbols-outlined">autorenew</span>Auto Submit</button>
                        </div>
                </div>
                <div className='card-table-container'>
                    <h4 style={{ textAlign: "start", marginTop: "40px" }}>Student's Report</h4>
                    <table>
                        <tr className='table'>
                            <th>S.No</th>
                            <th>STUDENT NAME</th>
                            <th>EMAIL</th>
                            <th>HALL TICKET NUMBER</th>
                            <th>BATCH YEAR/NAME</th>
                            <th>MARKS</th>
                            <th>PERCENTAGE</th>
                            <th>COMPLETED</th>
                            <th>QUALIFIED</th>
                            <th>ATTEMPTS</th>
                            <th>TAB SWITCHES</th>
                            <th>COMPLETE ANALYSIS</th>
                        </tr><br />
                        <tr>
                            <td>1</td>
                            <td>Uma</td>
                            <td>uma@gmail.com</td>
                            <td>16F91A0501</td>
                            <td>2022_10_Batch_001 - 2022</td>
                            <td>20</td>
                            <td>90 %</td>
                            <td>Completed</td>
                            <td>Qualified</td>
                            <td>2</td>
                            <td>0</td>
                            <td className='view'><span class="material-symbols-outlined">visibility</span></td>
                        </tr><br />
                        <tr>
                            <td>2</td>
                            <td>Ramya</td>
                            <td>ramya@gmail.com</td>
                            <td>16F91A0502</td>
                            <td>2019_10_Batch_003 - 2019</td>
                            <td>15</td>
                            <td>85 %</td>
                            <td>Completed</td>
                            <td>Qualified</td>
                            <td>2</td>
                            <td>0</td>
                            <td className='view'><span class="material-symbols-outlined">visibility</span></td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default AssessmentEye;