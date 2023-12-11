import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import img1 from '../src/assets/img1.png'
import logotip from '../src/assets/logotip.png'
import apple from '../src/assets/apple 1.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* card1 */}
      <div className='header w-[100%] h-[80vh] border-solid  border-[2px] border-red-600  '>

        {/* card1_header */}
        <div className='w-[100%] h-[10vh] border-solid border-[2px] border-blue-900 flex justify-between  items-center' >
          <img src={logotip} className='w-[200px] ' />
          <p className='text-white'>Privacy Policy</p>
        </div>


        {/* card1_cards */}
        <div className='flex'>
          {/* card1_left */}
          <div className='w-[50%] h-[70vh] border-solid border-[2px] border-red-700'>
            <h1 className='font-mono text-[45px] text-white text-bold'>Why stay hungry when you can order from DialEats</h1>
            <p className='text-white'>Download the bella onoje’s food app now on</p>
            <div>
             <div></div>
            </div>
          </div>

          {/* card1_right */}
          <div className='w-[50%] h-[70vh] border-solid border-[2px] border-red-700'></div>
        </div>

      </div>

    </>
  )
}

export default App
