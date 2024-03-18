import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Homework from './Homework';
import Syllabus from './Syllabus';
import Chat_Option from './Chat_Option';
import Attendence from './Attendence';
import Video_Lecture from './Video_Lecture';
import Paper from './Paper';
import Calender from './Calender';
import Feedback from './Feedback';
import Reports from './Reports';
import Results from './Results';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Conteners() {
    // return (
root.render(
    <div class="content">
    <div class="con">
  <React.StrictMode>
    <App />
    <Homework />
    <Syllabus />
    <Chat_Option />
    <Attendence />
    <Video_Lecture />
    <Paper />
    <Calender />
    <Feedback />
    <Reports />
    <Results />
  </React.StrictMode>
  </div>
  </div>
);
}
export default Conteners;



