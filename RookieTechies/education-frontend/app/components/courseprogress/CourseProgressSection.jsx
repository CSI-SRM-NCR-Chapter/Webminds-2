import ProgressSection from "../home/progress/ProgressSection";
import WeekCard from "./WeekCard";

export default function CourseProgressSection() {
    const week = ["Week 1", "Week 2", "Week 3", "Week 4"];
    const weekList = week.map((data, index) => {
        return (<WeekCard key={index} data={data} link={""} />)
    });
    return (
        <div className="w-screen flex flex-col my-12 justify-evenly py-4 gap-5">
            <ProgressSection />
            <h1 className="text-8xl text-center">Course</h1>
            <div className="flex flex-col w-11/12 mx-auto gap-3">
                {weekList}
            </div>
        </div>
    )
}