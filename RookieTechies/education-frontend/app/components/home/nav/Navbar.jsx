'use client'

import Image from "next/image";
import NavbarButton from "./NavbarButton";
import { IoPerson } from "react-icons/io5";
import logo from "../../../../public/logo.svg";
import logodark from "../../../../public/logodark.svg";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { Tooltip, Button } from "@nextui-org/react";
import Link from "next/link";

export default function Navbar() {
    const { user, logOut } = UserAuth();
    const signOut = async () => {
        try {
            await logOut();
        }
        catch (error) {
            console.log(error);
        }
    }
    const path = usePathname();
    const [theme, setTheme] = useState(" text-white border-white hover:bg-white hover:text-black transition-all");
    const [bg, setBg] = useState();
    const [ourlogo, setOurLogo] = useState(logo);
    useEffect(() => {
        if (path === "/profile" || path === "/catalog" || path === "/courses") {
            setTheme(" text-black border-black hover:bg-black hover:text-white transition-all");
            setOurLogo(logodark);
            setBg(" bg-white");
        }
        else if (path === "/discussion") {
            setTheme(" text-white border-white hover:bg-white hover:text-black transition-all");
            setOurLogo(logo);
            setBg(" bg-[#0F3941]");
        }
        else {
            setTheme(" text-white border-white hover:bg-white hover:text-black transition-all");
            setOurLogo(logo);
            setBg(null);
        }
    }, [theme, bg, ourlogo, path])
    const navButtons = ["Home", "Courses", "Discussion", "Contact"];
    const navList = navButtons.map((button, key) => {
        return (
            <NavbarButton data={button} key={key} theme={theme} path={path} />
        )
    });
    return (
        <header className={"fixed t-0 flex justify-between w-full mx-auto h-[100px] items-center text-lg text-white z-50 " + bg}>
            <div className="flex justify-between w-11/12 mx-auto items-center text-lg text-white">
                <div className="flex w-8/12">
                    <Image src={ourlogo} alt="Logo" width={"50"} height={"50"} />
                    {navList}
                </div>
                <div className="flex items-center w-4/12 justify-end">
                    {(!user) ?
                        <NavbarButton data={"Sign In"} theme={theme} path={path} />
                        :
                        <Tooltip
                            content={
                                <div className="flex fle-col gap-4 px-1 py-2">
                                    <Link href="/profile" className="text-xl text-center">Profile</Link>
                                    <div onClick={signOut} className="text-xl text-center">Logout</div>
                                </div>
                            }
                        >
                            <button className={"rounded-full border-2 text-3xl p-3" + theme}>
                                <IoPerson />
                            </button>
                        </Tooltip>
                    }
                </div>
            </div>
        </header>
    )
}