import { Amaranth } from "next/font/google"
import mentor from "../../../public/mentor.svg"
import Image from "next/image";

const amaranth = Amaranth({ subsets: ["latin"], weight: '400' });

export default function AboutCourseSection() {
    return (
        <div className="bg-[#124752] w-screen text-white p-8">
            <div className="w-10/12 mx-auto flex flex-col gap-8 justify-evenly">
                <h2 className="text-7xl text-center">About the course</h2>
                <p className={"text-2xl text-center " + amaranth.className}>&quot;Over four weeks, our Data Structures and Algorithms  course will equip you with essential problem-solving techniques and algorithmic thinking. Dive into key concepts, practice with real-world examples, and enhance your coding proficiency. Get ready to conquer coding challenges and excel in your programming journey.&quot;</p>
                <h2 className="text-7xl text-center">Meet the Mentor</h2>
                <div className="flex w-full items-center justify-evenly">
                    <p className={"text-2xl text-center font-semibold " + amaranth.className}>&quot;<span className="text-3xl text-bold">Madhubala Sharma</span>, our esteemed mentor with over a decade of experience in software development and mentoring. With a passion for guiding aspiring developers, Madhubala brings a wealth of expertise in programming languages, problem-solving, and career advancement. Join us as we embark on a transformative learning journey under her mentorship.&quot;</p>
                    <Image src={mentor} alt="mentor" className="w-[200px] h-[200px] mx-auto" />
                </div>
            </div>
        </div>
    )
}