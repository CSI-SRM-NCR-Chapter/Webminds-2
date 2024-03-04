'use client'

import streak from "../../../public/streak.svg";
import contest from "../../../public/contest.svg";
import performer from "../../../public/performer.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function BadgeCard({ data }) {
    const [img, setImg] = useState();
    useEffect(() => {
        if (data === "streak") {
            setImg(streak);
        }
        else if (data === "contest") {
            setImg(contest);
        }
        else if (data === "performer") {
            setImg(performer);
        }
    }, [data, img])
    return (
        <div className="w-[300px] h-[300px] flex justify-center items-center flex-col gap-2">
            <div className="bg-[#0F3941] !w-[220px] !h-[220px] rounded-full flex justify-center items-center">
                {(img) ?
                    <Image src={img} alt={data} width={"100"} height={"100"} /> : <p className="text-white">Loading..</p>}
            </div>
            <p className="text-2xl text-black">{data}</p>
        </div>
    )
}