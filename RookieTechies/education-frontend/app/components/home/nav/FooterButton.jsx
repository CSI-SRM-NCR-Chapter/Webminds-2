import Link from "next/link";


export default function FooterButton({ data }) {
    return (
        <Link className={(data === "All Courses") ? "text-2xl flex justify-center items-center rounded-3xl w-2/12 border-[1px] border-black px-4 py-2 bg-[#124752] text-white transition-all" : "text-2xl flex justify-center items-center rounded-3xl w-2/12 border-[1px] border-black px-4 py-2 hover:bg-[#124752] hover:text-white transition-all"} href={`/${data.lower}`}>
            {data}
        </Link>
    )
}