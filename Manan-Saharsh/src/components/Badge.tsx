import Image from 'next/image'
import React from 'react'

function Badge() {
  return (
    <div className='flex flex-col justify-around h-[40vh] items-center p-5'>
        <p className='text-5xl'>
            Badges
        </p>
    <div className='flex w-[80%] justify-around items-center'>
    <div className='flex flex-col justify-around items-center gap-10'>
            <div className='bg-[#0F3941] w-40 h-40 rounded-full flex justify-center items-center'>
                <Image src={'/streak.svg'} alt={''} width={80} height={80}/>
            </div>
            <div className='font-bold text-xl'>
                Monthly Streak
            </div>
        </div>
        <div className='flex flex-col justify-around items-center gap-10'>
            <div className='bg-[#0F3941] w-40 h-40 rounded-full flex justify-center items-center'>
            <Image src={'/contest.svg'} alt={''} width={80} height={80}/>
            </div>
            <div className='font-bold text-xl'>
                Contest #2
            </div>
        </div>
        <div className='flex flex-col justify-around items-center gap-10'>
            <div className='bg-[#0F3941] w-40 h-40 rounded-full flex justify-center items-center'>
            <Image src={'/performer.svg'} alt={''} width={80} height={80}/>
            </div>
            <div className='font-bold text-xl'>
                Performer of the week
            </div>
        </div>
    </div>
    </div>
  )
}

export default Badge
