
import React from 'react'
import { SliderDemo } from './Slider'
import { SelectDemo } from './Coursepace'
import { Search } from 'lucide-react'

function Options() {
  return (
    <div className='flex justify-center h-10 max-w-screen font-aladin'>
      <div className='flex w-[60%]'>
        <input type="text" placeholder='Search' className=' border-2 p-2 rounded-l-lg w-[80%] md:w-[30%]' />
        <SliderDemo/>
        <SelectDemo/>
        <div className='h-10 w-20 rounded-r-lg flex justify-center items-center text-white  bg-[#0F3941] hover:cursor-pointer'>
        <Search/>
        </div>
      </div>
    </div>
  )
}

export default Options
