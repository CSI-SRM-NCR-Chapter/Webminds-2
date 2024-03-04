import homestyles from '../../styles/home.module.css';
import Navbar from './nav/Navbar';
import NavbarButton from './nav/NavbarButton';
import Link from 'next/link';
import { IoArrowDownCircleOutline } from "react-icons/io5";

export default function HeroSection() {
    return (
        <div className={homestyles.homehero_container}>
            <div className="w-full text-white flex h-[95%] flex-col justify-end">
                <div className={homestyles.hero_content}>
                    <p className="text-4xl">Online</p>
                    <h1 className={"text-[300px] leading-none !m-0 !p-0"}>Eduction</h1>
                    <p className="text-right text-2xl">&quot;Welcome to our dynamic e-learning platform, your gateway to knowledge.&quot;</p>
                </div>
                <div className="w-9/12 mx-auto flex justify-between items-center">
                    <h3 className="text-4xl">Learn . Implement . Repeat</h3>
                    <button className={"text-xl rounded-3xl w-3/12 border-2 border-white px-4 py-5 hover:text-black hover:bg-white transition-all"}>
                        <Link href={`/${"courseprogress"}`}>
                            Data Structure & Algorithm
                        </Link>
                    </button>
                </div>
            </div>
            <p className={homestyles.heroscroller + " text-white text-8xl font-thin"}><IoArrowDownCircleOutline /></p>
        </div>
    )
}