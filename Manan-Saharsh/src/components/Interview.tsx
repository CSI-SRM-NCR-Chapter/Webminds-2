import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { HeartIcon, ArrowRightIcon } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Card1 } from './ui/card1';
import Link from 'next/link';

function Interview() {
    const cardData1 = [
		{
			index: 1,
			name: "",
			fullname: "Data Structure and Algorithm to Development",
			type: "Ready for Interview",
			price: "₹1200.00",
			Link: "/course/card1"
		},
		{
			index: 2,
			name: "",
			fullname: "Data Analysist Interview Full Course",
			type: "Ready for Interview",
			price: "₹1200.00",
			Link: "/course/card2"
		},
		{
			index: 3,
			name: "",
			fullname:
				"'Welcome to our dynamic e-learning platform, your gateway to knowledge'.",
			type: "Ready for Interview",
			price: "₹1200.00",
			Link: "/course/card3"
		},
		{
			index: 4,
			name: "",
			fullname: "Data Structure and Algorithm to Development",
			type: "Ready for Interview",
			price: "₹1200.00",
			Link: "/course/card4"
		},
	];
  return (
    <div className='h-[100vh] bg-[#0F3941] flex flex-col justify-around items-center py-10 md:py-20 overflow-hidden'>
      <div className='flex flex-col md:flex-row w-[80%] justify-between'>
        <p className='text-white text-8xl font-aladin w-full'>
            Prepare for Interview.
        </p>
        <p className='text-white text-4xl font-aladin flex justify-center items-center  '>
        &quot;Unlock success: Elevate your interview skills with our comprehensive preparation.&quot;		
        </p>
      </div>
      <div className="flex h-full w-full justify-center items-center p-6 scale-110 \">
				<Carousel className="w-full max-w-[80%]">
					<CarouselContent className="-ml-1">
						{cardData1.map((_, index) => (
							<CarouselItem key={index} className="pl-1 md:basis-1/2">
								<div className="p-[1vw]">
									<Card1>
										<CardContent className="flex justify-center items-center p-6 aspect-square">
											<div className="flex flex-col justify-between pb-32 w-full h-full text-white">
												<div className="flex justify-between w-full text-2xl">
													{_.name}
													<div className="flex justify-center items-center w-10 h-10 rounded-full shrink-0">
														<HeartIcon />
													</div>
												</div>
												<div className="h-fit w-full   rounded-3xl backdrop-blur-[8px] font-catamaran text-black">
													<Link className="flex my-[1vw]" href={_.Link}>
														<div className="flex flex-col pl-2">
															<div className="text-sm font-semibold">
																{_.fullname}
															</div>
															<div className="text-xs font-normal">
																{_.type}
															</div>
															<div className="text-sm font-medium">
																{_.price}
															</div>
														</div>
														<div className="absolute right-2 bottom-5 bg-black rounded-full scale-125 hover:scale-[1.3] transition-all duration-500 cursor-pointer">
															<ArrowRightIcon className="bg-black text-white rounded-full scale-75 hover:scale-105 transition-all duration-500" />
														</div>
													</Link>
												</div>
											</div>
										</CardContent>
									</Card1>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
    </div>
  )
}

export default Interview
