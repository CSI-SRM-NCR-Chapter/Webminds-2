"use client";
import classNames from "classnames";
import { ChevronLeft, Menu, User } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MobileSignIn({ session, userInfo }: { session: Session | null, userInfo: { name: string, regNum: string } | null }) {
  const [isOpen, setisOpen] = useState(false);
  const wrapperclasses = classNames(
    "flex flex-col fixed top-0 w-[70%]  h-screen text-white bg-gradient-to-b from-[#0F4551] to-[#0c0c0c] py-10 px-10 gap-24 transition-all duration-500 z-10",
    {
      ["translate-x-0 opacity-100"]: isOpen,
      ["-translate-x-full opacity-0"]: !isOpen,
    },
  );
  return (
    <section className="md:hidden">
      <div className="p-4 bg-[#304c58]">
        <Menu className="text-white" onClick={() => setisOpen(!isOpen)} />
        <ChevronLeft
          className={classNames(
            "fixed right-[32%] text-white top-[45%] z-50 scale-150 transition-all delay-700",
            {
              ["hidden -translate-x-full"]: !isOpen,
              ["block translate-x-0"]: isOpen,
            },
          )}
          onClick={() => setisOpen(!isOpen)}
        />
      </div>
      <div className={wrapperclasses}>
        <div className="flex flex-col gap-10 justify-center items-center w-full">
          <Link href={""}>
            <Image
              src={"/logo.svg"}
              alt={""}
              width={100}
              height={100}
              className=""
            />
          </Link>
          {session ? (
            <Link href="/dashboard" className="flex gap-3 items-center">
              <div className="relative w-[40px] aspect-square overflow-hidden rounded-full">
                <Image src={session.user!.image as string} alt="" fill />
              </div>
              <p>{userInfo?.name}</p>
            </Link>
          ) : (
            <Link
              href="/api/auth/signin"
              className="flex gap-3 items-center"
            >
              <User className="scale-150" />
              <p>Sign In</p>
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-10">
          <Link
            href={""}
            className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
          >
            {" "}
            <p>Home</p>{" "}
          </Link>
          <Link
            href={""}
            className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
          >
            {" "}
            <p>Contact</p>{" "}
          </Link>
          <Link
            href={"/discussion"}
            className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
          >
            {" "}
            <p>Discussion</p>{" "}
          </Link>
          <Link
            href={""}
            className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
          >
            {" "}
            <p>Courses</p>{" "}
          </Link>
          {session && (
            <Link
              href="/api/auth/signout"
              className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
            >
              {" "}
              <p>Sign Out</p>{" "}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
