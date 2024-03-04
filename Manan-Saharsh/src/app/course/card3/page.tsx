import AboutCourse from '@/components/AboutCourse'
import Course from '@/components/Course'
import DSATDhero from '@/components/DSATDhero'
import DSAhero from '@/components/DSAhero'
import DSAheroiner from '@/components/DSAheroiner'
import { ProgressDemo } from '@/components/Progressbar'
import React from 'react'

function page() {
  return (
    <div>
      <DSAheroiner/>
      <ProgressDemo/>
      <Course/>
      <AboutCourse/>
    </div>
  )
}

export default page
  