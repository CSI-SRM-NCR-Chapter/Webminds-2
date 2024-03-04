import Image from 'next/image'
import React from 'react'

function AboutCourse() {
  return (
    <div className='py-5 px-52 flex flex-col bg-[#0F3941] text-white font-aladin items-center justify-around gap-20'>
        <p className='text-6xl'>About the course</p>
        <p className='text-2xl text-center'>&apos;Over four weeks, our Data Structures and Algorithms  course will equip you with essential problem-solving techniques and algorithmic thinking. Dive into key concepts, practice with real-world examples, and enhance your coding proficiency. Get ready to conquer coding challenges and excel in your programming journey.&apos;</p>
        <p className='text-6xl'>Meet the Mentor</p>
        <div className='flex justify-around px-96 gap-5'>
        <p className='text-2xl text-center w-fit'>&apos;Madhubala Sharma, our esteemed mentor with over a decade of experience in software development and mentoring. With a passion for guiding aspiring developers, Madhubala brings a wealth of expertise in programming languages, problem-solving, and career advancement. Join us as we embark on a transformative learning journey under her mentorship.&apos;</p>
        <Image src={'/madhubala.svg'} alt={''} width={200} height={200}/>
        </div>
    </div>
  )
}

export default AboutCourse
