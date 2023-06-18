import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// const FirstName = "Umair"; 
// const LastName = "Tariq";
// const date = new Date().toLocaleDateString();
const currentTime = new Date().getHours();

let greetingMessage = "";
const greetingSyle = {}; 

if(currentTime >= 1 && currentTime < 12 ){
  greetingMessage = "Good Morning";
  greetingSyle.color = 'green';
}else if(currentTime >= 12 && currentTime < 19){
  greetingMessage = "Good Afternoon";
  greetingSyle.color = 'orange';
}else{
  greetingMessage = "Good Night";
  greetingSyle.color = 'black';
}
// currentTime = currentTime

ReactDOM.render(
  <>
    <div>
      <h1>Hello, <span style= {greetingSyle}>{greetingMessage} </span></h1>
    </div>
{/* 
    <p>{`Today's Date is ${date}`}</p>
    <p>{`Current Time is ${currentTime}`}</p> */}
    {/* <p>{`Top ${Numb} ${platForm} Web series`}</p> */}
    {/* <ol>
      <li>Mirzapur</li>
      <li>Breath</li>
      <li>Panchayat</li>
      <li>Farzi</li>
      <li>Hostel Daze</li>
    </ol> */}
    </>
  ,
  
  document.getElementById("root"));
