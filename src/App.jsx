
import './App.css'

import img1 from '../src/assets/img1.png'
import logotip from '../src/assets/logotip.png'
import apple from '../src/assets/apple 1.png'
import playmarket from '../src/assets/google-play 1.png'
import phoneLeft from '../src/assets/Rectangle4 1.png'
import phoneRight from '../src/assets/Rectangle6 1.png'
import card2_inner1 from '../src/assets/i (1).png'
import card2_inner2 from '../src/assets/i (2).png'
import card2_inner3 from '../src/assets/i (3).png'
import card2_inner4 from '../src/assets/i (4).png'
import card3 from '../src/assets/card3.png'
import card4 from '../src/assets/card4.png'
import card5Img1 from '../src/assets/card5Img1.png'
import card5Img2 from '../src/assets/card5Img2.png'
import card5Img3 from '../src/assets/card5Img3.png'
import card8 from '../src/assets/card8.png'
import logotipFooter from '../src/assets/logotipfooter.png'
import iconsfooter from '../src/assets/iconsfooter.png'

function App() {
   return (
    <>

      {/* card1 */}
      <div className='header w-[100%] h-[80vh]'>

        {/* card1_header */}
        <div className='w-[100%] h-[10vh]  flex justify-between  items-center' >
          <img src={logotip} className='w-[200px] ml-[10px]' />
          <p className=' mr-[10px] text-white'>Privacy Policy</p>
        </div>


        {/* card1_cards */}
        <div className='flex'>
          {/* card1_left */}
          <div className='w-[50%] h-[70vh]  flex justify-center  flex-col'>
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
          <div className='w-[50%] h-[70vh]'>
            <div className='flex justify-center w-[100%]  h-[85vh] '>
              <img src={phoneLeft} className='w-[60%] h-[100vh]' />
              <img src={phoneRight} className='w-[40%] h-[80vh] ' />
            </div>

          </div>
        </div>
      </div>


      <div className='container flex flex-col items-center'>
        {/* card2_________ */}
        <div className='w-[95%] h-[40vh] mt-[110px] flex justify-around items-center'>
          <div className='card2_inner1 w-[22%] h-[35vh] rounded-[12px] flex flex-col justify-end items-center'><p className='text-white'>Harere</p></div>
          <div className='card2_inner2 w-[22%] h-[35vh] rounded-[12px] flex flex-col justify-end items-center'><p className='text-white'>Buluwayo</p></div>
          <div className='card2_inner3 w-[22%] h-[35vh] rounded-[12px] flex flex-col justify-end items-center'><p className='text-white'>Mature</p></div>
          <div className='card2_inner4 w-[22%] h-[35vh] rounded-[12px] flex flex-col justify-end items-center'><p className='text-white'>Chinhoyi</p></div>
        </div>



        {/* card3__________ */}

        <div className='w-[95%] h-[94vh]  mt-[30px]'>
          <h1 className='text-center font-bold text-[50px] m-[10px]'>How app the works</h1>

          <div className='flex'>
            <div className='w-[50%] h-[80vh]  flex justify-center items-center'>
              <img src={card3} />
            </div>

            <div className='w-[50%] h-[80vh]  flex flex-col justify-center'>
              <h1 className=' text-red-500 font-bold m-[20px] text-[30px]'>Create an account</h1>
              <h1 className='text-[30px] font-bold m-[20px]'>Create/login to an existing <br />
                account to get started</h1>
              <p className='text-[#737373] ml-[30px]'>An account is created with your email  <br />
                and a desired password</p>
            </div>

          </div>

        </div>

        {/* card4__________ */}

        <div className='w-[95%] h-[85vh] mt-[30px]'>

          <div className='flex justify-center'>


            <div className='w-[40%] h-[80vh]  flex flex-col justify-center'>
              <h1 className=' text-red-500 font-bold m-[20px] text-[30px]'>Explore varieties</h1>
              <h1 className='text-[30px] font-bold m-[20px]'>Shop for your favorites <br />
                meal as e dey hot.</h1>
              <p className='text-[#737373] ml-[30px]'>An account is created with your email  <br />
                and a desired password</p>
            </div>

            <div className='w-[40%] h-[80vh] flex justify-center items-center'>
              <img src={card4} />
            </div>
          </div>
        </div>



        {/* card5___________ */}
        <div className='w-[85%] h-[78vh]'>
          <h1 className='text-center font-bold text-[30px] m-[10px]'>What others are saying</h1>
          <div className='flex justify-between'>

            <div className='w-[30%] h-[65vh] border-[2px] border-solid border-grey-600 flex flex-col justify-evenly items-center '>
              <p className='text-[#737373] text-[20px]  p-[25px] leading-8'>
                Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!
              </p>
              <img src={card5Img1} />
              <h1 className='text-red-500 font-bold text-[26px]'>Happy User</h1>
              <p className='text-[#455880] text-[18px] font-bold'>tempy.club</p>
            </div>

            <div className='w-[30%] h-[65vh] border-[2px] border-solid border-grey-600 flex flex-col justify-evenly items-center'>
              <p className='text-[#737373] text-[20px]  p-[25px] leading-8'>
                Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!
              </p>
              <img src={card5Img2} />
              <h1 className='text-red-500 font-bold text-[26px]'>Happy User</h1>
              <p className='text-[#455880] text-[18px] font-bold'>tempy.club</p>
            </div>

            <div className='w-[30%] h-[65vh] border-[2px] border-solid border-grey-600 flex flex-col justify-evenly items-center'>
              <p className='text-[#737373] text-[20px]  p-[25px] leading-8'>
                Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!
              </p>
              <img src={card5Img3} />
              <h1 className='text-red-500 font-bold text-[26px]'>Happy User</h1>
              <p className='text-[#455880] text-[18px] font-bold'>tempy.club</p>
            </div>
          </div>
        </div>
      </div>

      {/* card6____*/}
      <div className='card6 w-[100%] h-[60vh] flex justify-center items-center'>
        <div className='w-[50%] h-[60vh]  flex flex-col justify-evenly items-center'>
          <h1 className='text-white font-bold text-[40px]'>Contac Us</h1>
          <p className='text-[#FFFFFF] text-[18px] font-serif'>Available on your favorite store. Start your premium experience now</p>

          <div className='flex'>
            <input placeholder='Email' className='w-[280px] h-[6vh] bg-transparent border-[2px] border-solid border-white p-[4px]' />
            <button className='w-[150px] h-[6vh] bg-red-700 text-white rounded-[18px] ml-[5px]'>Contact Me</button>
          </div>


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
      </div>

      {/* card7______ */}
      <div className='w-[85%] h-[80vh]  m-auto'>
        <h1 className='font-bold text-[36px] text-center m-[20px]'>FAQ</h1>
        <div className='w-[100%] h-[70vh]  flex flex-wrap justify-between'>

          <div className='w-[45%] h-[32vh] border-solid border-[2px] border-grey-400 flex  items-start'>
            <img src={card8} className='m-[10px]' />
            <div className='w-[100%] h-[32vh] flex flex-col justify-evenly'>
              <h1 className='font-bold text-[25px]'>How to add a booking Source</h1>
              <p className='text-[#737373]'>Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the
                1500s,</p>
              <h3 className='text-red-500 font-bold'>READ MORE</h3>
            </div>
          </div>

          <div className='w-[45%] h-[32vh] border-solid border-[2px] border-grey-400 flex  items-start'>
            <img src={card8} className='m-[10px]' />
            <div className='w-[100%] h-[32vh] flex flex-col justify-evenly'>
              <h1 className='font-bold text-[25px]'>How to add a booking Source</h1>
              <p className='text-[#737373]'>Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the
                1500s,</p>
              <h3 className='text-red-500 font-bold'>READ MORE</h3>
            </div>
          </div>

          <div className='w-[45%] h-[32vh] border-solid border-[2px] border-grey-400 flex  items-start'>
            <img src={card8} className='m-[10px]' />
            <div className='w-[100%] h-[32vh] flex flex-col justify-evenly'>
              <h1 className='font-bold text-[25px]'>How to add a booking Source</h1>
              <p className='text-[#737373]'>Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the
                1500s,</p>
              <h3 className='text-red-500 font-bold'>READ MORE</h3>
            </div>
          </div>
          <div className='w-[45%] h-[32vh] border-solid border-[2px] border-grey-400 flex  items-start'>
            <img src={card8} className='m-[10px]' />
            <div className='w-[100%] h-[32vh] flex flex-col justify-evenly'>
              <h1 className='font-bold text-[25px]'>How to add a booking Source</h1>
              <p className='text-[#737373]'>Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the
                1500s,</p>
              <h3 className='text-red-500 font-bold'>READ MORE</h3>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className='w-[100%] h-[15vh] bg-[#252B42] flex justify-between items-center'>
        <img src={logotipFooter} className='ml-[18px]' />
        <h3 className='text-white'>Copywright 2021 Dialeats.com </h3>
        <img src={iconsfooter} className='mr-[18px]' />
      </div>


    </>
  )
}

export default App
