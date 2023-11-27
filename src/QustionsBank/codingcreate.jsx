import React from 'react'
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import './subject.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function Codingcreate() {
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
     <h3>CREATE CODING QUESTIONS</h3>
      <label className="qustionlabel">Subject<span className="star">*</span></label><br/>
      <select className="qustionselection">
          <option></option>
      </select><br/>
      <label className="qustionlabel">Chapters <span className="star">*</span></label><br/>
      <select className="qustionselection">
          <option></option>
      </select><br/>
    
      <label className="qustionlabel">Title <span className="star">*</span></label><br/>
      <input className="input" style={{height:"4vh"}}/><br/>
      <label className="qustionlabel">Programming Languages <span className="star">*</span></label><br/>
      <input className="input" style={{height:"4vh"}}/><br/>
      <label className="qustionlabel">Description <span className="star">*</span></label>
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
<label className="qustionlabel">Description Image <span className="star">*</span></label><br/>
<button className="choose"> Choose Image</button><br/>
<label className="qustionlabel">Constraints <span className="star">*</span></label>
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
<label className="qustionlabel">Constraints Image <span className="star">*</span></label><br/>
<button className="choose"> Choose Image</button><br/>
<label className="qustionlabel">Example <span className="star">*</span></label>
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
<label className="qustionlabel">Example Image <span className="star">*</span></label><br/>
<button className="choose"> Choose Image</button><br/>
<label className="qustionlabel">Explanation <span className="star">*</span></label>
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
<label className="qustionlabel">Explanation Image <span className="star">*</span></label><br/>
<button className="choose"> Choose Image</button><br/>
<button className="create"> Continue</button>
</div>
</div>
</div>
</div>
</div>
</>
  )
}

export default Codingcreate