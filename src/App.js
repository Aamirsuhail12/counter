
import './App.css';
import {useState} from 'react';
function App() {
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
     <h1>{counter}</h1>
     <span>
      <button onClick={()=>setCounter(counter+1)}>Increment</button> 
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
      </span>
    </div>
  );
}

export default App;
