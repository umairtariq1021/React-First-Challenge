import React from 'react';
// import Greetings from './Greetings';
import {add,sub} from './Calculator';
import NamesList from './NamesList';


function App()
{
  return (
    <>
    <NamesList   
      Name= "Umair"
     />
     <NamesList   
      Name= "Zubair"
     />
    {/* <ul>
      <li>Sum of two numbers is {add(4,5)}</li>
      <li>Sub of two numbers is {sub(6,5)}</li>
    </ul> */}
  </>
  );
  
}

export default App;