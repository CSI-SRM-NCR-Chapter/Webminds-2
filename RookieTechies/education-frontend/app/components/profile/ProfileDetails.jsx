import { Amaranth } from 'next/font/google';
import profilestar from "../../../public/profilestar.svg";
import profilephoto from "../../../public/profilephoto.svg";
import Image from 'next/image';
import { UserAuth } from '@/app/context/AuthContext';

const amaranth = Amaranth({ subsets: ["latin"], weight: '400' });

export default function ProfileDetails() {
    const {user} = UserAuth();
    return (
        <div className={" w-full p-4 flex justify-end items-center"}>
            <div className="w-7/12 bg-[#0F3941] p-8 rounded-2xl text-white flex justify-between">
                <div>
                    <h3 className={amaranth.className + " uppercase text-lg"}>Welcome</h3>
                    <h2 className={amaranth.className + " text-xl"}>{user.displayName}</h2>
                    <h3 className={amaranth.className + " uppercase text-md"}>{user.email}</h3>
                    <h3 className={amaranth.className + " uppercase text-md"}>College Name</h3>
                </div>
                <div className='flex flex-col justify-between'>
                    <Image src={profilephoto} alt="profilephoto" width={"50"} height={"50"} />
                    <Image src={profilestar} alt="profilestar" width={"120"} height={"60"} />
                </div>
            </div>
        </div>
    )
}