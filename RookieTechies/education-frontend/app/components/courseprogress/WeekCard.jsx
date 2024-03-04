import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function WeekCard({ data, link }) {
    return (
        <div className="flex justify-between items-center p-8 border-1 border-black rounded-lg">
            <div>
                <h2 className="text-3xl">{data}</h2>
                <span>{(link) ? "Opened By" : ""}</span>
            </div>
            <IoMdCheckmarkCircleOutline className="text-6xl" />
        </div>
    )
}