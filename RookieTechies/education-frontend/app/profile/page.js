'use client'

import Image from "next/image";
import img from "../../public/signup.svg";
import ProfilePage from "../components/profile/ProfilePage";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "../styles/profile.module.css";
import Link from "next/link";

export default function Profile() {
  const { user } = UserAuth();
  const router = useRouter();
  return (
    (user && <ProfilePage />) ||
    <div className={"w-screen h-screen absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center flex-col gap-4 " + styles.not_login}>
      <h1 className="text-3xl text-center ">You are not Logged In!</h1>
      <Link href="/" className="text-3xl border-1 border-black p-2 rounded-xl">Home</Link>
    </div>
  );
}
