import React from 'react'
import { ProgressDemo } from './Progressbar'
import Options from './Options'
import Selectcourses from './Selectcourses'
import Interview from './Interview'


function Courses() {
  return (
    <div id='section1' className='bg-white  py-10 flex flex-col gap-20'>
      <ProgressDemo/>
      <Options/>
      <Selectcourses/>

    </div>
  )
}

export default Courses
