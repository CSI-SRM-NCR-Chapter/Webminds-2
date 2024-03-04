import { Amaranth } from "next/font/google";
import Carousel from "./Carousel";

const amaranth = Amaranth({ subsets: ["latin"], weight: '400' });

export default function InterviewSection() {
    return (
        <div className="interview h-[80vh] w-screen bg-[#124752] flex flex-col justify-evenly">
            <div className="flex justify-between w-11/12 mx-auto">
                <h2 className="text-6xl text-white">Prepare for Interview</h2>
                <span className={"text-2xl !w-5/12 text-white " + amaranth.className}>&quot;Unlock success: Elevate your interview skills with our comprehensive preparation.&quot;</span>
            </div>
            <Carousel height="70%" section="interview"/>
        </div >
    )
}