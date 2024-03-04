'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import pic1 from "../../../public/discussionuser1.svg";
import pic2 from "../../../public/discussionuser2.svg";
import pic3 from "../../../public/discussionuser3.svg";

export default function DiscussionCard({ user, text }) {
    const [bg, setBg] = useState();
    const backgroundColors = [
        'bg-[#F0E68C]', // Khaki
        'bg-[#ADD8E6]', // Light Blue
        'bg-[#FFDAB9]', // Peach Puff
        'bg-[#98FB98]', // Pale Green
        'bg-[#F5F5DC]', // Beige
        'bg-[#E0FFFF]', // Light Cyan
        'bg-[#D3D3D3]', // Light Grey
        'bg-[#FFB6C1]', // Light Pink
        'bg-[#FFA07A]', // Light Salmon
        'bg-[#B0E0E6]'  // Powder Blue
    ];
    const data = [{ "name": " Paro Shetty", "img": pic1 }, { "name": "Rohan Sharma", "img": pic2 }, { "name": "Riya Singh", "img": pic3 }]

    useEffect(() => {
        setBg(backgroundColors[Math.floor(Math.random() * backgroundColors.length)]);
    }, [bg, backgroundColors])
    return (
        <div className={"flex gap-8 items-center p-4 border-1 border-black rounded-lg " + bg} >
            <Image src={data[user]["img"]} alt="user" width={120} height={120} />
            <div className="w-10/12">
                <h2 className="text-3xl">{data[user]["name"]}</h2>
                <p className="text-xl">{(text) ? text : ""}</p>
            </div>
        </div>
    )
}