import { useState } from 'react';
import Navbar from '../scenes/Navbar';
import Footer from '../scenes/footer';
import Background from '../assets/background.svg';
//import Scroll1 from './assets/scrollbg1.svg';
//import Scroll from './assets/scroll.svg';
//import Scroll2 from './assets/scrollbg2.svg';
//import { useNavigate } from "react-router-dom";





const About = () => {

  const [currentDiv, setCurrentDiv] = useState('investment');

  const handleClick = (divId) => {
    setCurrentDiv(divId);
  };
  //const navigate = useNavigate();

  const fixedSectionClasses = {
    investment: 'bg-gradient-to-r from-[#9b5d16] via-[#ebb679] to-[#7c4a12]',
    incubation: 'bg-gradient-to-r from-green-800 via-green-400 to-green-950',
    development: 'bg-gradient-to-r from-[#067187] via-[#FDE2ED] to-[#F6ACC5]',
  }; 
  const fixedDiv = {
    investment: 'bg-[#9b5d16] ',
    incubation: 'bg-green-800 ',
    development:'bg-[#067187]',
  };
  const scroll = {
    backgroundImage: `url('./assets/scroll.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };
  const scroll1 = {
    backgroundImage: `url('./assets/scrollbg1.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };
  const scroll2 = {
    backgroundImage: `url('./assets/scrollbg2.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };


  return (
    <div className=' w-screen opacity-90 bg-red-100'>
      <div className=' w-4/5 mx-auto  bg-center bg-no-repeat '
      style={{ backgroundImage: `url(${Background})` }} >
          <Navbar />
          <div className=" opacity-90">
            <div
            id="fixed-section"
            className={`flex flex-row h-11 items-center w-full border-b-2 border-[#f5f5f5] ${fixedSectionClasses[currentDiv]}`}
            >
              <h2
              onClick={() => handleClick('investment')}
              className={`ml-2 cursor-pointer font-2xl text-[#823E15] font-bold hover:scale-110 transition ease-in-out duration-200 ${
                currentDiv === 'investment' ? 'border-b-2 border-[#f5f5f5]' : ''
              }`}
              >
              Investment
              </h2>
              <h2
                onClick={() => handleClick('incubation')}
                className={`mx-4 cursor-pointer text-[#823E15] font-2xl font-bold hover:scale-110 transition ease-in-out duration-200
                ${currentDiv === 'incubation' ? 'border-b-2 border-[#f5f5f5]' : ''}`}
              >
                Incubation
              </h2>
              <h2
                onClick={() => handleClick('development')}
                className={`font-2xl cursor-pointer text-[#823E15] font-bold hover:scale-110 transition ease-in-out duration-200 ${
                  currentDiv === 'development' ? 'border-b-2 border-[#f5f5f5]' : ''
                }`}
              >
                Development
              </h2>
              <h2
              
              className='font-2xl ml-4 cursor-pointer text-[#823E15] font-bold hover:scale-110 transition ease-in-out duration-200'
              >
                Home
              </h2>
            </div>
            <div  className='Opacity-90 flex flex-col justify-between text-[#A66E0D]  bg-red-50 h-24'>
              <h1 className=' text-center  text-4xl font-bold'>
                About Us
              </h1>
              <h3 className='ml-3 text-xl pb-2 text-medium italic'>
                Development and Security
              </h3>
            </div>
           
          </div>
          <div 
          className={` flex flex-col ${fixedDiv[currentDiv]}`}>
            <div className='h-32 mx-8 my-5 bg-red-100'>
              <h1 className=' text-center text-[#823E15] text-3xl font-bold'>
                Who Are We?
              </h1>
              <div 
              className='h-fill'
              style={scroll}>
                <p className='text-center'> <span className='text-[#FE4B00]'>Savhedge solutions </span>is a limited company based in Kenya that boasts</p>
                <p className='text-center'>in merging technology and entrepreneurship in the most novel of ways. </p>

              </div>
            </div>
            <div className='h-96 mx-8 my-5 bg-red-100'>
              <h1 className=' text-center text-[#823E15] text-3xl font-bold'>
                What are We Limited To?
              </h1>
              <div className='h-fill' style={scroll2} >
               
              </div>
            </div>
            <div className='h-96 mx-8 my-5 bg-red-100'>
              <h1 className=' text-center text-[#823E15] text-3xl font-bold'>
                Are We Legal?
              </h1>
              <div className='h-fill flex flex-row justify-evenly' >
                <div>
                  <h1 className='text-[#FE4B00]'>Our Licenses</h1>
                  <div className='border-2 h-fill border-[#FE4B00]'>

                  </div>
                </div> 
                <div>
                  <h1 className='text-[#FE4B00]'>Our Licenses</h1>
                  <div className='border-2 h-fill border-[#FE4B00]'>

                  </div>
                </div> 
                <div>
                  <h1 className='text-[#FE4B00]'>Our Licenses</h1>
                  <div className='border-2 h-fill border-[#FE4B00]'>

                  </div>
                </div>
                
               
              </div>
            </div>
          </div>
          <Footer />
         
      </div>
    </div>
  )
}

export default About