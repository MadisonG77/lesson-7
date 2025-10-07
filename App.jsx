import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom';

function App() { 

 return ( 

   <div> 

     <h1>Welcome to the Counter App</h1> 

     <Counter /> 

   </div> 

 ); 

} 

 

function Counter({ title }) { 
  const [count, setCount] = useState(0); 

  const handleIncrease = () => { 
    setCount(count + 1); // Increase count
  };

  const handleReset = () => {
    setCount(0); 
  };

  return ( 

   <div> 
      <h2>{title}</h2> 
      <p>Count: {count}</p> 

      <button onClick={handleIncrease}>Increase</button> 
      <button onClick={handleReset}>Reset</button> 
    </div> 
  ); 
} 

export default App;

 

