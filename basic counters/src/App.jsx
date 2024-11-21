import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  let add =()=>{
    if(count<20){
    setCount(count+1);
    }
  }
  let remove =()=>{
    if(count>0){
    setCount(count-1);
    }
  }

  return (
    <>
     <h1>Basic React First Counter</h1>

     <h2>Counter = {count}</h2>
     <button onClick={add}>Add Count</button>
     <button onClick={remove}>remove Count</button>
    </>
  )
}

export default App
