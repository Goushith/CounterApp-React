import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0) //state - counter - To hold value

function increment(){
  setCounter(counter+1)
}


function decrement(){
  if(counter!=0)
  setCounter(counter-1)
  
}

function reset(){
  setCounter(0)
}

  return (
    <div className="App">

<nav class="navbar"  >
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1 text-dark">Counter Application</span>
  </div>
</nav>



      <header className="App-header">
       <h1>Your Turn 😉</h1>
       <h1>{counter}</h1>
      <div className='buttondiv'>
       <button className='button-33'  onClick={increment}>Addition</button> &nbsp;
       <button  className='button-34' onClick={decrement}>Subtract</button> &nbsp;
       <button  className='button-35' onClick={reset}>Reset</button>
       </div>
      </header>
      
    </div>
  );
}

export default App;
