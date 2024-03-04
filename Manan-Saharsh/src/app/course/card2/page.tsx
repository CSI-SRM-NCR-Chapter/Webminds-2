import AboutCourse from '@/components/AboutCourse'
import CDSAherointer from '@/components/CDSAherointer'
import Course from '@/components/Course'
import DSATDhero from '@/components/DSATDhero'
import DSAhero from '@/components/DSAhero'
import { ProgressDemo } from '@/components/Progressbar'
import React from 'react'

function page() {
  return (
    <div>
      <CDSAherointer/>
      <ProgressDemo/>
      <Course/>
      <AboutCourse/>
    </div>
  )
}

export default page
  