"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export function ProgressDemo() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
const yyyy = today.getFullYear();   

const formattedDate = `${mm}/${dd}/${yyyy}`;
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="justify-center flex flex-col md:px-32 px-12 w-full font-aladin" >
        <div className="md:text-3xl text-2xl text-black text-start w-[60%]"> <p className="">Start where you left</p></div>
        <div className="text-lg text-black  text-start w-[60%]"> <p className="w-full">DSA to Developer</p></div>
        <div className="flex justify-center items-center gap-10">

        <Progress value={30} className="w-[97%] bg-white border-2 border-black  scale- relative" />
        <Link href={""}>
        <ArrowRightCircle className="text-black scale-150"/>
        </Link>
        </div>
        <div className="text-md  text-black text-start w-[60%]"> <p className="">{formattedDate}</p></div>
    </div>
  )
}
