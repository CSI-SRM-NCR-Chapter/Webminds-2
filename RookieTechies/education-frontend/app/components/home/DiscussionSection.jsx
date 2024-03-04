import DisQuesCard from "./homecards/DisQuesCard"

export default function DiscussionSection() {
    const disccussion = ["Data Structure Question Number 26", "Web Development React.js", "Interview Tips #101", "Data Analysist week 2 problem 3"];
    const disccussionList = disccussion.map((data, index) => {
        return (<DisQuesCard key={index} data={data} link={""} />)
    });
    return (
        <div className="h-screen justify-evenly flex flex-col w-11/12 mx-auto">
            <h1 className="text-8xl text-center">Disccussion</h1>
            <div className="flex flex-col w-full mx-auto gap-3">
                {disccussionList}
            </div>
        </div>
    )
}