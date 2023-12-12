import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import img1 from '../src/assets/img1.png'
import logotip from '../src/assets/logotip.png'
import apple from '../src/assets/apple 1.png'
import playmarket from '../src/assets/google-play 1.png'
import phoneLeft from '../src/assets/Rectangle4 1.png'
import phoneRight from '../src/assets/Rectangle6 1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* card1 */}
      <div className='header w-[100%] h-[80vh] border-solid  border-[2px] border-red-600  '>

        {/* card1_header */}
        <div className='w-[100%] h-[10vh] border-solid border-[2px] border-blue-900 flex justify-between  items-center' >
          <img src={logotip} className='w-[200px] ml-[10px]' />
          <p className='text-white mr-[10px]'>Privacy Policy</p>
        </div>


        {/* card1_cards */}
        <div className='flex'>
          {/* card1_left */}
          <div className='w-[50%] h-[70vh] border-solid border-[2px] border-red-700 flex justify-center  flex-col'>
            <h1 className='text-[45px] text-white font-bold ml-[15px]'>Why stay hungry when you can order from DialEats</h1>
            <p className='text-[#F6F6F6] m-[15px]'>Download the bella onoje’s food app now on</p>

            <div className='btns flex ml-[15px]'>
              <button className='w-[250px] h-[9vh] text-[white] border-solid border-[2px] border-red-800 flex items-center justify-around bg-red-700 rounded-[30px] m-[5px]'>
                <img src={apple} />
                <div>
                  <p>Download on the</p>
                  <h3 className='font-bold text-[20px]'>App Store</h3>
                </div>
              </button>

              <button className='w-[250px] h-[9vh] text-[white] border-solid border-[2px] border-white-800 flex items-center justify-around bg-transparent rounded-[30px] m-[5px]'>
                <img src={playmarket} />
                <div>
                  <p>Andriod App On</p>
                  <h3 className='font-bold text-[20px]'>Google Play</h3>
                </div>
              </button>
            </div>

          </div>

          {/* card1_right */}
          <div className='w-[50%] h-[70vh] border-solid border-[2px] border-red-700'>

            <div className='flex justify-center w-[100%] border-[2px] border-solid border-red-600 h-[85vh] '>
              <img src={phoneLeft} className='w-[60%] h-[100vh]' />
              <img src={phoneRight} className='w-[40%] h-[80vh] ' />
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
