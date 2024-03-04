import { ArrowRightCircleIcon } from 'lucide-react'
import React from 'react'

function SolvedQues() {
  return (
    <div className='h-[100vh] bg-white text-black font-aladin flex flex-col justify-around items-center my-20'>
      <p className='md:text-8xl text-6xl'>
        Solved Question
      </p>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
        Heap Problem 2
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
        Greedy Method
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
        Backtracking 1,0 
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
        Cookie & Jesse
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
      <div className='flex w-[80%] md:w-[60%] h-40 border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
        <p>
        Bubble Sort
        </p>
        <ArrowRightCircleIcon className='md:scale-[2.5] rotate-45'/>
      </div>
    </div>
  )
}

export default SolvedQues
