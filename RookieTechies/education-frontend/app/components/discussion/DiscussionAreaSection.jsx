import { Amaranth } from "next/font/google"
import DiscussionCard from "./DiscussionCard";

const amaranth = Amaranth({ subsets: ["latin"], weight: '400' });

export default function DiscussionAreaSection() {
    const text = ["Confidence. It's essential to project confidence in your abilities and responses", "How can I effectively prepare for common interview questions?", "Research typical questions, practice responses, and focus on highlighting relevant experiences.", "Any tips for making a lasting impression on the interviewer?", "Be authentic, engage actively, and demonstrate your enthusiasm for the role and company.", "I am deeply appreciative of your patience, understanding, and dedication to my development. Your mentorship has made a significant difference in my life, and I am honored to have had the opportunity to learn from someone as inspiring and knowledgeable as you."]
    const textList = text.map((text, index) => {
        return (
            <DiscussionCard key={index} user={Math.floor(Math.random() * 3)} text={text} />
        )
    });
    return (
        <div className="w-11/12 min-h-screen mx-auto pt-[50px] flex flex-col gap-4">
            <h1 className="text-6xl text-center">Discussion Area Topic</h1>
            <h3 className={"text-3xl text-center " + amaranth.className}>Discussion Area Opened By</h3>
            <div className="flex flex-col gap-4">
                {textList}
            </div>
            <p className="text-center text-4xl my-2">Load More</p>
        </div>
    )
}