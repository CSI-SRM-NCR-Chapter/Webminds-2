import styles from "../../../styles/home.module.css";
import { FaRegHeart } from "react-icons/fa";
import star from "../../../../public/star.svg";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Interview({ data }) {
    return (
        <div className={styles.interviewcard + " min-w-[300px] w-[45vw] h-5/6 flex flex-col justify-between rounded-lg p-4 my-4"}>
            <div className="flex justify-end w-11/12 mx-auto">
                <button className={"w-[40px] h-[40px] rounded-full flex justify-center items-center bg-black hover:bg-rose-500"}>
                    <FaRegHeart className="text-white" />
                </button>
            </div>
            <div className={"flex justify-between items-center w-11/12 p-4 h-[40%] mx-auto rounded-lg " + styles.interviewcard_content}>
                <div>
                    <h4 className="text-2xl">{data["courseName"]}</h4>
                    <h5 className="text-xl">{data["courseType"]}</h5>
                    <h4 className="text-2xl">{data["price"]}</h4>
                </div>
                <FaCircleArrowRight className="!text-4xl hover:!text-7xl !text-black transition-all" />
            </div>
        </div>
    )
}