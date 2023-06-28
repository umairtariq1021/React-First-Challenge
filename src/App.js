import React, {useState} from 'react';
// import Greetings from './Greetings';
// import {add,sub} from './Calculator';
// import NamesList from './NamesList';




const App = () =>{

  const state = useState();

  let currentTime = new Date().toLocaleTimeString();

//  const timeNow = currentTime.toLocalTimeString();
  const [count, setCount] = useState(currentTime);

  const fetchTime = () => {
    let currentTime = new Date().toLocaleTimeString();
    setCount(currentTime);
  };


  return(
    <>
      <h1>{currentTime}</h1>
      <button onClick={fetchTime}>Get Time</button>
    </>
  );
};

export default App;