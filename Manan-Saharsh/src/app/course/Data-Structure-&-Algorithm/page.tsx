import AboutCourse from '@/components/AboutCourse'
import Course from '@/components/Course'
import DSAhero from '@/components/DSAhero'
import { ProgressDemo } from '@/components/Progressbar'
import React from 'react'

function page() {
  return (
    <div>
      <DSAhero/>
      <ProgressDemo/>
      <Course/>
      <AboutCourse/>
    </div>
  )
}

export default page
