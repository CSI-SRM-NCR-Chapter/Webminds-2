import ProgressBar from "./ProgressBar";

export default function ProgressSection() {
    return (
        <div className="w-10/12 mx-auto flex flex-col h-2/6 justify-center gap-2 my-8">
            <h4 className="text-3xl">Start where you left</h4>
            <p className="text-lg">Course Name</p>
            <ProgressBar />
            <p className="text-lg">Date</p>
        </div>
    )
}