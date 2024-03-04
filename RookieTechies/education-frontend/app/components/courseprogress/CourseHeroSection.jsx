import coursestyles from '../../styles/course.module.css';
import Navbar from '../home/nav/Navbar';
import NavbarButton from '../home/nav/NavbarButton';
import Link from 'next/link';
import { IoArrowDownCircleOutline } from "react-icons/io5";

export default function CourseHeroSection() {
    return (
        <div className={coursestyles.coursehero_container}>
            <div className="w-[90%] mx-auto text-white flex h-[85%] flex-col justify-end gap-5">
                <h1 className={"text-[100px] leading-none !m-0 !p-0"}>Data Structure & Algorithm </h1>
                <p className="text-3xl">&quot;Welcome to our dynamic e-learning platform, your gateway to knowledge.&quot;</p>
            </div>
        </div>
    )
}