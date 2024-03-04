import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { MobileSignIn } from "./Mobile_Sign_In";
import { User } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { parseNameAndRegNum } from "@/lib/utils";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const userInfo = parseNameAndRegNum(session?.user?.name)

  return (
    <nav className="font-catamaran">
      <section
        className={classNames(
          "fixed text-white bg-gradient-to-b from-[#0F4551] to-[#0c0c0c]  min-w-full hidden md:flex justify-between items-center w-full p-10 h-20 z-10 duration-300",
        )}
      >
        <div className="flex gap-2 justify-evenly items-center h-full w-fit">
          <Link href="/">
            <div className="flex relative justify-center items-center p-1 w-12 h-12 bg-cover rounded-full border-2 border-white   ">
              <Image
                src={"/logo.svg"}
                alt={""}
                width={42}
                height={42}
                className="transition-all duration-500 hover:scale-110"
              />
            </div>
          </Link>
          <Link href="/">
            <div className="flex justify-center items-center w-24 h-11 rounded-3xl border-2 border-white hover:text-black hover:bg-white">
              <p className="transition-all duration-500 hover:scale-110">
                Home
              </p>
            </div>
          </Link>
          <Link href={""}>
            <div className="flex justify-center items-center w-24 h-11 rounded-3xl border-2 border-white hover:text-black hover:bg-white">
              <p className="transition-all duration-500 hover:scale-110">
                Contact
              </p>
            </div>
          </Link>
          <Link href={"/discussion"}>
            <div className="flex justify-center items-center w-24 h-11 rounded-3xl border-2 border-white hover:text-black hover:bg-white">
              <p className="transition-all duration-500 hover:scale-110">
                Discussion
              </p>
            </div>
          </Link>
          <Link href={""}>
            <div className="flex justify-center items-center w-24 h-11 rounded-3xl border-2 border-white hover:text-black hover:bg-white">
              <p className="transition-all duration-500 hover:scale-110">
                Courses
              </p>
            </div>
          </Link>
        </div>
        <div className="flex gap-2 justify-evenly items-center h-full w-fit">
          {session ? (
            <Link href="/dashboard">
              <div className="flex justify-center items-center p-2 rounded-3xl border-2 border-white  hover:text-black hover:bg-white">
                <p className="transition-all duration-500 hover:scale-110 ">
                  {userInfo?.name}
                </p>
              </div>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <div className="flex justify-center items-center p-2 rounded-3xl border-2 border-white hover:text-black hover:bg-white">
                <p className="transition-all duration-500 hover:scale-110">
                  Sign In
                </p>
              </div>
            </Link>
          )}
          <div className="flex overflow-hidden relative justify-center items-center w-16 h-16 rounded-full border-2 border-white cursor-pointer  hover:text-black hover:bg-white">
            <Popover>
              <PopoverTrigger disabled={!session}>
                {session ? (
                  <Image src={session.user?.image as string} alt="" fill />
                ) : (
                  <User className="transition-all duration-500 scale-150 hover:scale-[1.75]" />
                )}
              </PopoverTrigger>
              <PopoverContent sideOffset={3} className="p-0 mt-3 w-fit">
                <Link
                  className={buttonVariants()}
                  href="/api/auth/signout"
                >
                  Sign out
                </Link>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>
      <MobileSignIn session={session} userInfo={userInfo} />
    </nav>
  );
}
