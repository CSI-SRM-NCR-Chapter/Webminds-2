'use client'

import Image from "next/image";
import logo from "../../../../public/footerlogo.svg";
import styles from "../../../styles/home.module.css";
import FooterButton from "./FooterButton";
import divider from "../../../../public/divider.svg";
import { usePathname } from "next/navigation";

export default function Footer() {
    const footButtons = ["Instagram", "Twitter", "Linkedin", "Whatsapp", "Pinterest"];
    const footList = footButtons.map((button, key) => {
        return (
            <FooterButton data={button} key={key} />
        )
    });

    const path = usePathname();
    return (
        (path === "/signin" || path === "/signup") ?
            <></> :
            < footer className={styles.footer_container} >
                <div>
                    <Image src={logo} alt="logo" style={{ margin: "0 auto !important" }} width={"80vw"} height={"50px"} />
                    <h2 className="text-7xl text-white text-center">Join the Community!</h2>
                </div>
                <div>
                    <p className="text-xl text-white text-center">Subscribe to The Education to receive monthly tips,offers & more</p>
                    <div className="h-[200px] w-11/12 mx-auto bg-white flex justify-evenly flex-col items-center my-5 p-5 rounded-3xl">
                        <div className="w-8/12 flex justify-center border-black border-[1px] rounded-full ">
                            {footList}
                        </div>
                        <Image src={divider} alt="divider" width={"80vw"} height={"50px"} />
                        <p className="text-black">©2024, All Right Reserved.</p>
                    </div>
                </div>
            </footer >
    )
}