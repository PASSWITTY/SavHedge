import  {useState} from 'react'
import Typed from 'react-typed';
import development from '../assets/development.png';
import quotation from '../assets/quotation.png';
import { Link } from 'react-router-dom';
import About from '../pages/About';



const Options = () => {

  const [currentDiv, setCurrentDiv] = useState('investment');


  const handleClick = (divId) => {
    setCurrentDiv(divId);
  };

  let fixedSectionClasses = 'bg-gradient-to-r from-[#9b5d16] via-[#ebb679] to-[#7c4a12] border-b-2 border-[#f5f5f5]';
  if (currentDiv === 'investment') {
    fixedSectionClasses = 'bg-gradient-to-r from-[#9b5d16] via-[#ebb679] to-[#7c4a12]';
     
  } else if (currentDiv === 'incubation') {
    fixedSectionClasses = 'bg-gradient-to-r from-green-800 via-green-400 to-green-950 ';
    
  } else if (currentDiv === 'development') {
    fixedSectionClasses = ' bg-gradient-to-r from-[#067187] via-[#FDE2ED] to-[#F6ACC5] ';
    
  }


  return (
    <div className='opacity-90'>
      <div id="fixed-section" className={`flex flex-row h-11 items-center w-full ${fixedSectionClasses}`}>
        <h2 onClick={() => handleClick('investment')}
         className={`ml-2 cursor-pointer font-2xl text-[#823E15] font-bold hover:scale-110 transition ease-in-out duration-200 
         ${currentDiv === 'investment'? 'border-b-2 border-[#f5f5f5': ''}`}>Investment</h2>
        <h2 onClick={() => handleClick('incubation')}
         className={`mx-4 cursor-pointer text-[#823E15] font-2xl font-bold hover:scale-110 transition ease-in-out duration-200
          ${currentDiv === 'incubation'? 'border-b-2 border-[#f5f5f5': ''}`}>Incubation</h2>
        <h2 onClick={() => handleClick('development')} 
        className={`font-2xl cursor-pointer text-[#823E15] font-bold hover:scale-110 transition ease-in-out duration-200 
        ${currentDiv === 'development'? 'border-b-2 border-[#f5f5f5': ''}`}>Development</h2>
      </div>
      <div id="investment" style={{ display: currentDiv === 'investment' ? 'block' : 'none' }}>
      
        <div className='flex flex-row h-96 '>
          <div id='help2' className='bg-[#ba701b] flex flex-col justify-center w-3/12 items-center '>   
            <p className='p-4'>
              Check opportunities
            </p>
            <Typed
            className=' md:pl-4 pl-2'
              strings={['Buy shares?', 'Short term investment?','Bite at the apple']}
              typeSpeed={180}
              backSpeed={200}
              loop
            />  

          </div>
          <div className='bg-[#3e2509] flex flex-col items-center  justify-center  w-5/12'>
            <img src={quotation} alt="photo" className='w-16 h-16 pt-2' />
            <p className='text-white font-bold text-xl tracking-widest leading-10 text-center py-6 px-5'>
            We are proud to announce the availability of multiple opportunities ranging from employment to investment and incubation
            </p>
            <Link to={About}>
            <button className=' text-[#000000] w-fit px-6 py-2 my-2  flex items-center font-bold rounded-md bg-[#7BA276]'>Try Out</button>
            </Link>
          </div>
          <div id='help' className='  w-4/12   bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${development})` }}>
            

          </div>
        </div>
      
      </div>
      <div id="incubation" style={{ display: currentDiv === 'incubation' ? 'block' : 'none' }}>
        <div className='flex flex-row h-96 '>
          <div id='help2' className='bg-green-400 flex flex-col justify-center w-3/12 items-center '>   
            <p className='p-4'>
                Check opportunities
            </p>
            <Typed
            className=' md:pl-4 pl-2'
              strings={['Buy shares?', 'Short term investment?','Bite at the apple']}
              typeSpeed={180}
              backSpeed={200}
              loop
            />

          </div>
          <div className='bg-green-800 flex flex-col items-center  justify-center  w-5/12'>
            <img src={quotation} alt="photo" className='w-16 h-16 pt-2' />
            <p className='text-white font-bold text-xl tracking-widest leading-10 text-center py-6 px-5'>
            We are proud to announce the availability of multiple opportunities ranging from employment to investment and incubation
            </p>

            <button className=' text-[#000000] w-fit px-6 py-2 my-2  flex items-center font-bold rounded-md bg-[#7BA276]'>Try Out</button>
          </div>
          <div id='help' className='  w-4/12   bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${development})` }}>
            

          </div>
        </div>
      </div>
      <div id="development" style={{ display: currentDiv === 'development' ? 'block' : 'none' }}>
        <div className='flex flex-row h-96 '>
        <div id='help2' className='bg-[#67A3D9] flex flex-col justify-center w-3/12 items-center '>   
          <p className='p-4'>
            Check opportunities
          </p>
          <Typed
          className=' md:pl-4 pl-2'
            strings={['Buy shares?', 'Short term investment?','Bite at the apple']}
            typeSpeed={180}
            backSpeed={200}
            loop
          />

        </div>
        <div className='bg-[#067187] flex flex-col items-center  justify-center  w-5/12'>
          <img src={quotation} alt="photo" className='w-16 h-16 pt-2' />
          <p className='text-white font-bold text-xl tracking-widest leading-10 text-center py-6 px-5'>
          We are proud to announce the availability of multiple opportunities ranging from employment to investment and incubation
          </p>
          <button className=' text-[#000000] w-fit px-6 py-2 my-2  flex items-center font-bold rounded-md bg-[#7BA276]'>Try Out</button>
        </div>
        <div id='help' className='  w-4/12   bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${development})` }}>
          

        </div>
        </div>
      </div>
    </div>

  );
};

export default Options;

