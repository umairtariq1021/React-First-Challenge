import React, {useState} from 'react';
// import TodoList from './TodoList';
// import Greetings from './Greetings';
// import {add,sub} from './Calculator';
// import NamesList from './NamesList';




const App = () =>{

  const state = useState();

  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  }

  const decrement = () =>{
    if(count < 1)
    {
      alert("Value Can't be less than 0");
    }
    else{
      setCount(count-1);
    }
  }

  // let currentTime = new Date().toLocaleTimeString();

//  const timeNow = currentTime.toLocalTimeString();
  // const [count, setCount] = useState(currentTime);

  // const fetchTime = () => {
  //   let currentTime = new Date().toLocaleTimeString();
  //   setCount(currentTime);
  // };

  // setInterval(fetchTime,1000);


  // const [inputValue, setInputValue] = useState("");
  // const [itemsList, setItemsList] = useState([]);

  // const getInputValue = (event) =>{

  //   setInputValue(event.target.value);
  // }

  // const addTodo = () => {
  //   setItemsList((oldItems) => {
  //     return[...oldItems, inputValue];
  //   })
  //   setInputValue("");
  // }

  // const deleteItem = (id) => {
  //   setItemsList((oldItems) => {
  //     return oldItems.filter((arrElem, index) => {
  //         return index !== id;
  //     });
  //   });
  // }


  return(
    <>
      <div className='main-div'>

      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
        {/* <div className='center-div'>
        <br />
        <h1>TODO List</h1> 
        <br />
        <input type='text' placeholder='Add an Item' value={inputValue} onChange={getInputValue} />
        <button onClick={addTodo}>+</button>

        <ol>
          
            {itemsList.map((itemVal, index) => {
              return <TodoList
                key = {index}
                text= {itemVal}
                id= {index}
                onSelect = {deleteItem}
              />;
            })}
        </ol>
        </div> */}

      </div>
      {/* <h1>{currentTime}</h1> */}
      {/* <button onClick={fetchTime}>Get Time</button> */}
    </>
  );
};

export default App;