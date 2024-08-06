// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import './index.css'


const alternatePhoto = '0M4A3098.jpg'
const handleClick = () => {
  setPhoto(alternatePhoto);
};
let curDate = new Date();
curDate=curDate.getHours();
 let greeting='';
 const cssStyle={
 }

if(curDate >=1 && curDate <12){
greeting='Good Morning';
cssStyle.color='green'
}else if(curDate >=12 && curDate < 17)
{
  greeting='Good Afternoon'
  cssStyle.color='Orange'
}else{
  greeting='Good Night'
  cssStyle.color='grey'
}


ReactDOM.render(
  <div>
    <h1>Hello! Welcome to my Website, My Name is Kundan Singh<span style={cssStyle}> {greeting} </span></h1>
    <img src="DSC00579.jpg" alt="My Photo" style={{ width: '100px', height: 'auto' }}/>
    <br/>
    <div>See My World ..<a href="#" onClick={handleClick}> Riya Singh</a></div>
  </div>,
  document.getElementById("root")
);
;
