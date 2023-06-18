import React from 'react';
import './index.css';


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

function Greetings()
{
    return ( <h1>Hello, <span style= {greetingSyle}>{greetingMessage} </span></h1> );
}

export default Greetings;