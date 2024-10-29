import { useState } from 'react'

import './App.css'

function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap justify-center inset-x-0 rounded-3xl text-white gap-3'>
            <button className='outline-none px-4' style={{backgroundColor: "red"}} onClick={()=> setColor("red") }>Red</button>
            <button className='outline-none px-4' style={{backgroundColor: "black"}} onClick={()=> setColor("black")}>Black</button>
            <button className='outline-none px-4' style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>Blue</button>
          </div>
      </div>
    </>
  )
}

export default App
