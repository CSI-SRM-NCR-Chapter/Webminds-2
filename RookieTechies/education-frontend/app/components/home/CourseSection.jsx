import Carousel from "./Carousel";
import ProgressSection from "./progress/ProgressSection";
import FooterButton from "./nav/FooterButton";
import { BsSearch } from "react-icons/bs";

export default function CourseSection() {
    const courseButtons = ["All Courses", "Self Paced", "Programming", "Popular"];
    const courseList = courseButtons.map((button, key) => {
        return (
            <FooterButton data={button} key={key} />
        )
    });
    return (
        <div className="course min-h-screen w-screen">
            <ProgressSection />
            <div className="w-1/2 h-[80px] mx-auto flex m-2 mb-8 justify-center items-center border-1 border-black rounded-xl text-xl ">
                <div className="p-1 w-1/4 h-full border-r-1 border-black flex items-center">
                    <input type="search" placeholder="Search" className="h-full w-full focus-visible:outline-0 focus-visible:border-1 focus-visible:border-black focus-within:rounded-3xl"/>
                </div>
                <div className="flex h-full flex-col w-1/4 border-r-1 border-black p-1">
                    <label>Weeks</label>
                    <input type="search" placeholder="How many weeks" className="h-1/2 w-full focus-visible:outline-0 focus-visible:border-1 focus-visible:border-black focus-within:rounded-xl"/>
                </div>
                <div className="flex h-full flex-col w-1/4 border-r-1 border-black p-1">
                    <label>Type</label>
                    <input type="search" placeholder="Type of Course" className="h-1/2 w-full focus-visible:outline-0 focus-visible:border-1 focus-visible:border-black focus-within:rounded-xl" />
                </div>
                <button className="bg-[#0F3941] h-full w-1/4 text-center text-white flex justify-center items-center rounded-xl"><BsSearch /></button>
            </div>
            <div className="flex w-11/12 mx-auto justify-between items-center">
                <div className="flex w-8/12">
                    {courseList}
                </div>
                <FooterButton data={"See all"} />
            </div>
            <Carousel height="50vh" section="course" />
        </div>
    )
}