import logo from '../assets/logo.svg'
import {RiFacebookCircleLine, RiTwitterLine, RiInstagramLine, RiCopyrightLine} from 'react-icons/Ri';
import {CiLinkedin} from 'react-icons/ci'
import back from '../assets/bg_footer.svg';



const footer = () => {
  return (
    <div style={{ backgroundImage: `url(${back})` }}
    className='flex flex-col bg-cover bg-center bg-no-repeat'>
      <div className='flex justify-between'>
        <div className='flex flex-col ml-5  '>
          <div className='flex '>
            <img src={logo} alt="logo" className='h-25 w-11'/>
            <h1 className='w-full text-3xl font-bold font-signature text-[#2A6C68]'>SAVHEDGE.</h1>
          </div>
          <p className='text-xl'>You Dream, We Deliver</p>
        </div>
        <div className='flex flex-col mr-7 '>
          <h1>Contact us</h1>
          <h1>Careers</h1>
          <h1>About us</h1>
          <h1>Projects</h1>
        </div>
      </div>
      <div className=' pb-10 pt-10'>
        <div className='flex justify-center gap-4'>
          <RiFacebookCircleLine />
          <RiTwitterLine />
          <RiInstagramLine />
          <CiLinkedin />
        </div>
        <div className='flex justify-center '>
          <RiCopyrightLine />
          <h1>2023 SAVHEDGE. All Rights Reserved</h1>
        </div>

      </div>
    </div>
  )
}

export default footer;