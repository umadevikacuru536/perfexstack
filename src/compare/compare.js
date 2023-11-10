import React, { useState } from 'react';
import './compare.css';
import Sidebar from '../sidebar/sidebar';

function Compare() {
  const [showContainer5, setShowContainer5] = useState(false);

  const handleCompare = () => {
    setShowContainer5(!showContainer5);
  };

  return (
    <>
    <div className='d-flex flex-row'>
        <Sidebar/>
    </div>
    <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
    <div className=''>
    <div className="bg-container">
      <div className="card-container">
        <h3 className='card2'>Compare</h3>
        <hr className="line" />
        <div className="form-container">
          <div className="form-group">
            <select className="options">
            <option value="Option 2">--select assessment--</option>
              <option value="Option 1">String</option>
              <option value="Option 2">Operators</option>
              <option value="Option 3">datatypes&variable</option>
              <option value="Option 1">Array</option>
              <option value="Option 2">Inhritance</option>
              <option value="Option 3">Exceptions</option>
              <option value="Option 1">Interface</option>
              <option value="Option 2">Abstract Class</option>
              <option value="Option 3">mock test1</option>
              <option value="Option 3">mock test2</option>
              <option value="Option 3">mock test3</option>
              <option value="Option 3">mock test4</option>


            </select>
            <h5 className='head'>Assessment</h5>
          </div>
          <div className="form-group">
            <select className="options ">
            <option value="Option 2">--select Institute---</option>
              <option value="Option 1">corporate office</option>
              
             
            </select>
            <h5 className='head'>Institutions</h5>
          </div>
        </div>
        <button type="submit" className="bg-primary p-2 w-25" style={{borderRadius:"10px",marginLeft:"400px" ,marginTop:"100px",color:"white"}} onClick={handleCompare}>
          Compare
        </button>
      </div>

      {showContainer5 && (
        <div className="container5">
          <div className="row">
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4>Attempts</h4>
          <i class="fa-solid fa-bars"></i> 
        </div>
        <div className='d-flex flex-row'>
        <div className='d-flex flex-column'>
          <span className='num'>16</span>
          <span className='num'>17</span>
          <span className='num'>8</span>
          <span className='num'>4</span>
          <span className='num'>0</span>
        </div>
        <div className='container-btn'>
          <button className='container-btn1' ></button>
        </div>
        </div>
      </div>
      <div className="card-body">
          <p className="card-title">Corporate Office</p>
        </div>
    </div>

    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4>Avg Accuracy</h4>
          <i class="fa-solid fa-bars"></i> 
        </div>
        <div className='d-flex flex-row'>
        <div className='d-flex flex-column'>
        <span className='num2'>60</span>
          <span className='num2'>50</span>
          <span className='num2'>40</span>
          <span className='num2'>30</span>
          <span className='num2'>20</span>
          <span className='num2'>10</span>
          <span className='num2'>0</span>
        </div>
        <div className='container-btn'>
          <button className='container-btn3'></button>
        </div>
        </div>
      
      </div>
      <div className="card-body">
          <p className="card-title">Corporate Office</p>
        </div>
    </div>
    <div className="col-md-6 mb-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4>Avg Percentage</h4>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className='d-flex flex-row'>
        <div className='d-flex flex-column'>
        <span className='num2'>60</span>
          <span className='num2'>50</span>
          <span className='num2'>40</span>
          <span className='num2'>30</span>
          <span className='num2'>20</span>
          <span className='num2'>10</span>
          <span className='num2'>0</span>
        </div>
        <div className='container-btn'>
          <button className='container-btn2' ></button>
        </div>
        </div>
      </div>
      <div className="card-body">
          <p className="card-title">Corporate Office</p>
        </div>
    </div>
  </div>


        </div>
      )}
      
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Compare;