import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Sidebar from '../sidebar/sidebar';
import './report.css'
function Paticipationreport() {
    const [blogslist, setblogslist] = useState([]);
    const [batchyear, setSelectedBatchYear] = useState("");
    const [instion, setinstion] = useState("");
    const [category, setcategory] = useState("");
    const [assessment, setassessment] = useState("");
    const [batch, setSelectedBatch] = useState("");
  
    useEffect(() => {
      fetchblogs();
    });
  
    const fetchblogs = async () => {
      const api = "http://localhost:5020/allpraticipation";
      try {
        const response = await axios.get(api);
        setblogslist(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
  
    const exportToExcel = () => {
      const dataToExport = blogslist;
      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";
  
      const ws = XLSX.utils.json_to_sheet(dataToExport);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, "praticipation_data" + fileExtension);
    };
  return (
    <div>
      <div className="d-flex flex-row">
      <Sidebar />
      </div>
      <div className="d-flex flex-row paticipationreport">
    <div className='card-container3'>
        <h1 className='profilename'>Praticipation Report</h1><br/>
         <label className='profilename'>Institution</label><br/>
         <select className="option" value={instion} onChange={(e) => setinstion(e.target.value)}>
  <option value="">Select Batch Year</option>
  {blogslist.map((blog)=>(
      <option key={blog.instion} value={blog.instion}>
     {blog.instion}
     
    </option>
   ))}
   </select><br/>
         <label className='profilename'>Category</label><br/>
        <select className="option" value={category} onChange={(e) => setcategory(e.target.value)}>
 <option value="">Select Batch Year</option>
{blogslist.map((blog)=>(
     <option key={blog.category} value={blog.category}>
     {blog.category}
     
    </option>
   ))}
  </select><br/>
        <label className='profilename'>Assessment</label><br/>
         <select className="option" value={assessment} onChange={(e) => setassessment(e.target.value)}>
 <option value="">Select Batch Year</option>
   {blogslist.map((blog)=>(
       <option key={blog.assessment} value={blog.assessment}>
      {blog.assessment}
     
    </option>
   ))}
   </select><br/>
        <label className='profilename'>Batch Year</label><br/>
        <select className="option" value={batchyear} onChange={(e) => setSelectedBatchYear(e.target.value)}>
 <option value="">Select Batch Year</option>
   {blogslist.map((blog)=>(
       <option key={blog.batchyear} value={blog.batchyear}>
      {blog.batchyear}
     
    </option>
   ))}
   </select><br/>
         <label className='profilename'>Batch</label><br/>
        <select className="option" value={batch} onChange={(e) => setSelectedBatch(e.target.value)}>
 <option value="">Select Batch Year</option>
 {blogslist.map((blog)=>(
      <option key={blog.batch} value={blog.batch}>
     {blog.batch}
     
    </option>
   ))}
   </select><br/>
         <button className="download"onClick={exportToExcel}>Download</button>
     </div>
     <div>
         <img className='paticipationimg'src="https://img.freepik.com/free-vector/flat-design-financial-consultancy-annual-report_23-2150838104.jpg?w=826&t=st=1701412988~exp=1701413588~hmac=631c82a9161804cb145dfae831fbc13565a82a0671d4b00e525bac3c41cdef03"/>
     </div>
 </div>

      
    </div>
  )
}

export default Paticipationreport




