import { ArrowRightCircleIcon } from 'lucide-react'
import React from 'react'

function Discussion() {
  return (
    <div className='h-[100vh] bg-white text-black font-aladin flex flex-col justify-around items-center'>
      <p className='md:text-8xl text-6xl'>
        Discussion
      </p>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
            Data Structure Question Number 26
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
        Web Development React.js
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
        Interview Tips #101 
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
        Data Analysist week 2 problem 3
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
    </div>
  )
}

export default Discussion
