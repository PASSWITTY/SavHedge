import React from 'react';
import project1 from '../assets/project1.png';

const portfolio = [
  {
    id: 1,
    head:'Classiforex',
    Text:'check out our short term investment opportunity in the name of classiforex',
    src: project1,
    style: 'shadow-[#9b5d16]'
  },
  {
    id: 2,
    head:'Classiforex',
    Text:'check out our short term investment opportunity in the name of classiforex',
    src: project1,
    style: 'shadow-[#9b5d16]'

  },
  {
    id: 3,
    head:'Classiforex',
    Text:'check out our short term investment opportunity in the name of classiforex',
    src: project1,
    style: 'shadow-[#9b5d16]'


  }

]

const Projects = () => {
  return (
    <div className='opacity-90 pt-10 mt-18 bg-red-100 pb-32'>
      <div className='flex justify-center mb-12 '>
        <h1 className='text-[#A66E0D] text-5xl font-bold'>
          Whats new?
        </h1>
      </div>
      <div className='md:ml-10 opacity-100 grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 mx-5'>
         {
           portfolio.map(({id,src,head, Text, style}) => (
            <div key={id} className={`w-80 h-[500px] flex flex-col text-center items-center text-bold shadow-md  rounded-lg ${style}`}>
              <h1 className='py-3'>{head}</h1>
              <img src={src} alt="myPhoto" className='w-64  h-40 rounded-md duration-200 hover:scale-105'/>
              <div className='flex mt-10 flex-col items-center justify-center'>
                <p className='text-center mb-6'>{Text}</p>
                <button className='w-1/2 px-6 py-3 m-4 bg-[#7BA276] duration-200 hover:scale-105'>Explore</button>
              </div>
            </div>

          ))
          }
        </div>
    </div>
  )
}

export default Projects;