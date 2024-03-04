import CourseSection from "./CourseSection";
import DiscussionSection from "./DiscussionSection";
import HeroSection from "./HeroSection";
import InterviewSection from "./InterviewSection";
import { Amaranth } from "next/font/google";
import Footer from "./nav/Footer";

const amaranth = Amaranth({ subsets: ["latin"], weight: '400' });

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <CourseSection />
            <InterviewSection />
            <DiscussionSection />
        </>
    )
}