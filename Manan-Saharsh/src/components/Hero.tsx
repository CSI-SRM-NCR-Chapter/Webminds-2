import { ArrowDownIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='bg-[url(/herobg.svg)] bg-[cover] h-[100vh]  text-white font-aladin'>
            <div className=  'flex flex-col gap-32 md:gap-0 h-full w-full justify-center md:px-44 py-20 md:py-60 pr-8 md:pr-0 z-10'>
                <div className='flex flex-col px-[10%] w-full gap-8 md:gap-16'>
                    <div className='flex justify-start'><p className='text-4xl md:text-[5.25rem] font-bold'>Online</p></div>
                    <div className='flex justify-center'><p className='text-7xl md:text-[14em] font-bold font-aladin'>Education</p></div>
                    <div className='flex  justify-end'><p className='text md:text-[26.25px] md:font-[700]'>&apos;Welcome to our dynamic e-learning platform, your gateway to knowledge.&apos;</p></div>
                </div>
                <div className='px-2 flex flex-col'>

                <div className='flex justify-end'>
                <Link className='border-white border-2 flex justify-center items-center md:w-20 md:h-20 w-10 h-10 rounded-full hover:text-black hover:bg-white' href={'#section1'}>
                    <ArrowDownIcon className=' md:scale-150'/>
                </Link>
                </div>
                <div className='px-10'>
                    <p className='text-2xl md:text-[3.25rem] md:font-[700]'>Learn  .  Implement . Repeat</p>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Hero
