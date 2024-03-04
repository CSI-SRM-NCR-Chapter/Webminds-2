"use client";

import classNames from "classnames";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRightIcon, HeartIcon } from "lucide-react";
import Link from "next/link";

function Selectcourses() {
	const [isCliked, setisClicked] = useState("Self Paced");
	const cardData1 = [
		{
			index: 1,
			name: "DSA to Development",
			fullname: "Data Structure and Algorithm to Development",
			type: isCliked,
			price: "₹1200.00",
			Link: "/course/DSA-to-Development"
		},
		{
			index: 2,
			name: "Course to Data Analyst",
			fullname: "Data Analysist Interview Full Course",
			type: isCliked,
			price: "₹1200.00",
			Link: "/course/Course-to-Data-Analyst"
		},
		{
			index: 3,
			name: "Data Structure & Algorithm",
			fullname:
				"'Welcome to our dynamic e-learning platform, your gateway to knowledge'.",
			type: isCliked,
			price: "₹1200.00",
			Link: "/course/Data-Structure-&-Algorithm"
		},
		{
			index: 4,
			name: "Data Structure and Algorithm to Development",
			fullname: "Data Structure and Algorithm to Development",
			type: isCliked,
			price: "₹1200.00",
			Link: "/course/Data-Structure-and-Algorithm-to-Development"
		},
	];

	return (
		<div className="flex flex-col justify-center p-4  min-h-[50vh] min-w-screen font-aladin">
			<div className="scale-[0.6] -translate-x-24 md:scale-100 md:translate-x-0 flex flex-row w-[100%] justify-between">
				<div className="flex px-[10vw] h-fit w-fit">
					<button
						className={classNames(
							"border-2 w-28 h-10 flex justify-center items-center rounded-full",
							{
								["bg-[#124752]  text-white"]: isCliked === " ",
							},
						)}
						onClick={() => setisClicked(" ")}
					>
						<div>
							<p>All Courses</p>
						</div>
					</button>
					<button
						className={classNames(
							"border-2 w-28 h-10 flex justify-center items-center rounded-full",
							{
								["bg-[#124752]  text-white"]: isCliked === "Self Paced",
							},
						)}
						onClick={() => setisClicked("Self Paced")}
					>
						<div>
							<p>Self Paced</p>
						</div>
					</button>
					<button
						className={classNames(
							"border-2 w-28 h-10 flex justify-center items-center rounded-full",
							{
								["bg-[#124752]  text-white"]: isCliked === "Programming",
							},
						)}
						onClick={() => setisClicked("Programming")}
					>
						<div>
							<p>Programming</p>
						</div>
					</button>
					<button
						className={classNames(
							"border-2 w-28 h-10 flex justify-center items-center rounded-full",
							{
								["bg-[#124752]  text-white"]: isCliked === "Popular",
							},
						)}
						onClick={() => setisClicked("Popular")}
					>
						<div>
							<p>Popular</p>
						</div>
					</button>
				</div>
				<div className="flex h-fit w-fit">
					<button
						className={classNames(
							"border-2 w-28 h-10 flex justify-center items-center rounded-full",
							{
								["bg-[#124752]  text-white"]: isCliked === "",
							},
						)}
						onClick={() => setisClicked("")}
					>
						<div>
							<p>See all</p>
						</div>
					</button>
				</div>
			</div>
			<div className="flex justify-center items-center p-6">
				<Carousel className="w-full max-w-[80%]">
					<CarouselContent className="-ml-1">
						{cardData1.map((_, index) => (
							<CarouselItem key={index} className="pl-1 md:basis-1/2">
								<div className="p-[1vw]">
									<Card>
										<CardContent className="flex justify-center items-center p-6 aspect-square">
											<div className="flex flex-col justify-between pb-32 w-full h-full text-white">
												<div className="flex justify-between w-full text-2xl">
													{_.name}
													<div className="flex justify-center items-center w-10 h-10 rounded-full shrink-0">
														<HeartIcon />
													</div>
												</div>
												<Link className="h-fit w-full   rounded-3xl backdrop-blur-[8px] font-catamaran" href={_.Link}>
													<div className="flex my-[1vw]">
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
															<ArrowRightIcon className="bg-black rounded-full scale-75 hover:scale-105 transition-all duration-500" />
														</div>
													</div>
												</Link>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}

export default Selectcourses;
