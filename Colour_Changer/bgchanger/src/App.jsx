import { useState } from 'react'

import './App.css'

function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap justify-center items-center inset-x-0 rounded-3xl text-white gap-3'>
            <button className='outline-none px-4' style={{backgroundColor: "red"}} onClick={()=> setColor("red") }>1</button>
            <button className='outline-none px-4' style={{backgroundColor: "black"}} onClick={()=> setColor("black")}>2</button>
            <button className='outline-none px-4' style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>3</button>
          </div>
      </div>
    </>
  )
}

export default App
