import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom';


const FirstName = "Umair"; 
const LastName = "Tariq";
const date = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>{`Hello, My Nam is ${FirstName} ${LastName} `}</h1>

    <p>{`Today's Date is ${date}`}</p>
    <p>{`Current Time is ${currentTime}`}</p>
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
