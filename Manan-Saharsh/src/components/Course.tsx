import { ArrowRightCircleIcon, CheckCircle } from 'lucide-react'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function Discussion() {
    return (
        <div className='h-[100vh] bg-white text-black font-aladin flex flex-col justify-around items-center my-20'>
            <p className='md:text-8xl text-6xl'>
                Courses
            </p>
            <div className='flex w-[80%] md:w-[60%] min-h-40 h-fit border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
                <Accordion type="single" collapsible className='w-[95%]'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-4xl'>Week 1</AccordionTrigger>
                        <AccordionContent className='text-2xl'>
                            <ul>
                            <li>
                            Bubble Sort
                            </li>
                            <li>
                            Insertion Sort
                            </li>
                            <li>
                            Merge Sort
                            </li>
                            <li>
                            Space & Time Complexity
                            </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <CheckCircle className='md:scale-[2.5]  hover:text-blue-900 rounded-full' />
            </div>
            <div className='flex w-[80%] md:w-[60%] min-h-40 h-fit border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
            <Accordion type="single" collapsible className='w-[95%]'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-4xl'>Week 2</AccordionTrigger>
                        <AccordionContent className='text-2xl'>
                        <ul>
                            <li>
                            Bubble Sort
                            </li>
                            <li>
                            Insertion Sort
                            </li>
                            <li>
                            Merge Sort
                            </li>
                            <li>
                            Space & Time Complexity
                            </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <CheckCircle className='md:scale-[2.5]  hover:text-blue-900 rounded-full' />
            </div>
            <div className='flex w-[80%] md:w-[60%] min-h-40 h-fit border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
            <Accordion type="single" collapsible className='w-[95%]'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-4xl'>Week 3</AccordionTrigger>
                        <AccordionContent className='text-2xl'>
                        <ul>
                            <li>
                            Bubble Sort
                            </li>
                            <li>
                            Insertion Sort
                            </li>
                            <li>
                            Merge Sort
                            </li>
                            <li>
                            Space & Time Complexity
                            </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <CheckCircle className='md:scale-[2.5]  hover:text-blue-900 rounded-full' />
            </div>
            <div className='flex w-[80%] md:w-[60%] min-h-40 h-fit border-black rounded-2xl justify-between px-8 text-xl md:text-5xl items-center border-2 '>
            <Accordion type="single" collapsible className='w-[95%]'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-4xl'>Week 4</AccordionTrigger>
                        <AccordionContent className='text-2xl'>
                        <ul>
                            <li>
                            Bubble Sort
                            </li>
                            <li>
                            Insertion Sort
                            </li>
                            <li>
                            Merge Sort
                            </li>
                            <li>
                            Space & Time Complexity
                            </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <CheckCircle className='md:scale-[2.5]  hover:text-blue-900 rounded-full' />
            </div>
        </div>
    )
}

export default Discussion
