import DisQuesCard from "../home/homecards/DisQuesCard";

export default function SolvedQuestionSection() {
    const question = ["Heap", "Greedy Method", "Backtracking", "Cookie & Jesse", "Bubble Sort"];
    const questionList = question.map((data, index) => {
        return (<DisQuesCard key={index} data={data} link={""} />)
    });
    return (
        <div className="min-h-screen justify-evenly flex flex-col w-11/12 mx-auto pt-[50px]">
            <h1 className="text-6xl text-center">Solved Question</h1>
            <div className="flex flex-col w-full mx-auto gap-3">
                {questionList}
            </div>
            <p className="text-center text-4xl my-4">Load More</p>
        </div>
    )
}