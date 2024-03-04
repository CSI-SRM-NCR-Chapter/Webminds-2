import Image from "next/image";
import styles from "../../styles/discussion.module.css";
import discussion from "../../../public/discussionlogo.svg";

export default function DiscussionHeroSection() {
    return (
        <main className={styles.discussionherosection}>
            <div className={styles.discussionherocontent + " flex justify-center items-center flex-col text-white gap-8"}>
                <Image src={discussion} alt="Discussion" width={120} height={120} />
                <h1 className="text-8xl">Discussion</h1>
            </div>
        </main>
    )
}