import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import './subject.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function McqCreat() {
    const [editorData, setEditorData] = useState('');
    const [selectedQuestionType, setSelectedQuestionType] = useState('');
  
    const handleQuestionTypeChange = (e) => {
      setSelectedQuestionType(e.target.value);
    };
  
    return (
      <div>
        <div className="d-flex flex-row">
          <Sidebar />
          <div className="container subjectcard">
            <div className="row">
              <div className="col-md-12">
                <div className="card213 text-start">
                  <h3 className="">CREATE QUESTION</h3>
                  <div>
                  <label className="showname">Select Question Type</label>
                  <br />
                  <select className="qustionselection" value={selectedQuestionType} onChange={handleQuestionTypeChange}>
                    <option>---select Question Type ---</option>
                    <option value="single">Single correct option</option>
                    <option value="multi">Multi correct option</option>
                    <option value="partial">Multi correct option with partial marking</option>
                    <option value="fill">Fill in the blanks</option>
                    <option value="trueFalse">True or false</option>
                    <option value="writing">Writing</option>
                    <option value="speaking">Speaking</option>
                  </select>
                  </div>
                  {selectedQuestionType === 'single' && <SingleOptionForm />}
                  {selectedQuestionType === 'multi' && <MultiOptionForm />}
                  {selectedQuestionType === 'partial' && <PartialMarkingForm />}
                  {/* Add similar conditions for other question types */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Separate components for different question types
  const SingleOptionForm = () => {
    return (
      <div>
        {/* Render the form for single correct option questions */}
       <p>Note:<span style={{fontSize:"17px",fontWeight:"bold"}}> Single Option Question </span>will have a minumum of 3 options and a maximum of 5 options One of the option will be the correct answer for this type of Question</p>
        {/* Add the form fields for single option questions */}
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
  <label className="qustionlabel">Option1 <span className="star">*</span></label>
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
        className="editor-container"
        rows="60" cols="70"
  />
  <label className="qustionlabel">Option 1 Image <span className="star">*</span></label><br/>
  <div>
    <button className="choose"> Choose Image</button>
    <button className="deleteoption"> Delete Option</button>
  </div>
  <button className="insert">Insert Image</button><br/>
  <label className="qustionlabel">Option2 <span className="star">*</span></label><br/>
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
        className="editor-container"
        rows="60" cols="70"
  />
  <label className="qustionlabel">Option 2 Image <span className="star">*</span> </label><br/>
  <div>
    <button className="choose"> Choose Image</button>
    <button className="deleteoption"> Delete Option</button>
  </div>
  <button  className="insert">Insert Image</button><br/>
  <label className="qustionlabel">Option3 <span className="star">*</span></label>
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
        className="editor-container"
        rows="60" cols="70"
  />
  <label className="qustionlabel">Option 3 Image<span className="star">*</span> </label><br/>
  <div>
    <button className="choose"> Choose Image</button>
    <button className="deleteoption"> Delete Option</button>
  </div>
  <button  className="insert">Insert Image</button><br/>
  <button className="add w-100"> Add Option</button><br/>
  <label className="qustionlabel"> Correct Answer <span className="star">*</span></label><br/>
  <select className="qustionselection">
    <option>--select option --</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select><br/>
  <label className="qustionlabel">Explanation <span className="star">*</span></label><br/>
  
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
        className="editor-container"
        rows="60" cols="70"
  />
  <label className="qustionlabel"> Explanation Image <span className="star">*</span></label><br/>

<button className="choose "> Choose Image</button><br/>
<button  className="insert "> Insert Image</button><br/>
<button className="create"> Create</button>
  </div>
    
    );
  };
  
  const MultiOptionForm = () => {
    return (
      <div>
        {/* Render the form for multi correct option questions */}
        <label className="qustionlabel">Multi Option Form</label>
        {/* Add the form fields for multi option questions */}
      </div>
    );
  };
  
  const PartialMarkingForm = () => {
    return (
      <div>
        {/* Render the form for multi correct option with partial marking questions */}
        <label>Partial Marking Form</label>
        {/* Add the form fields for partial marking questions */}
      </div>
    );
  };
  

  
  export default McqCreat;