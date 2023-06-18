import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <>

    <h1>First Challenge</h1>
    <p>Top 5 Amazon Web series</p>
    <ol>
      <li>Mirzapur</li>
      <li>Breath</li>
      <li>Panchayat</li>
      <li>Farzi</li>
      <li>Hostel Daze</li>
    </ol>
    </>
  ,
  
  document.getElementById("root"));
