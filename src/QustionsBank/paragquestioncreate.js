import React from 'react'
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import './subject.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function Paragquestioncreate() {
    const [editorData, setEditorData] = useState('');
    const [selectedQuestionType, setSelectedQuestionType] = useState('');
  
    const handleQuestionTypeChange = (e) => {
      setSelectedQuestionType(e.target.value);
    };
  return (
    <>
      <div className="d-flex flex-row">
          <Sidebar />
          <div className="container subjectcard">
            <div className="row">
              <div className="col-md-12">
                <div className="card213 text-start">
       <h3>CREATE PARAGRAPH</h3>
        <label className="qustionlabel">Subject<span className="star">*</span></label><br/>
        <select className="qustionselection">
            <option></option>
        </select><br/>
        <label className="qustionlabel">Chapters <span className="star">*</span></label><br/>
        <select className="qustionselection">
            <option></option>
        </select><br/>
        <label className="qustionlabel">Diffculty <span className="star">*</span></label><br/>
        <div className="d-flex flex-row">
        <div className="d-flex flex-row col-md-4">
        <input type="radio"/>
        <p className="m-2">Easy</p>
        </div>
        <div className="d-flex flex-row col-md-4">
        <input type="radio"/>
        <p className="m-2">Medium</p>
        </div>
        <div className="d-flex flex-row col-md-4">
        <input type="radio"/>
        <p className="m-2">Difficulty</p>
        </div>
        </div>
        <label className="qustionlabel">Reference <span className="star">*</span></label><br/>
        <input/><br/>
        <label className="qustionlabel">Question <span className="star">*</span></label>
        <CKEditor 
        editor={ClassicEditor}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
       
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
        
  />
  <label className="qustionlabel">Question Image <span className="star">*</span></label><br/>
  <button className="choose"> Choose Image</button><br/>
  <button className="insert"> Insert Image
  <span className="span1"></span><span className="span1"></span></button><br/>
 
  
<button className="create"> Create</button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </>
  )
}

export default Paragquestioncreate