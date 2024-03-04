import { getServerSession } from "next-auth"
import { parseNameAndRegNum } from "@/lib/utils"
import { redirect } from "next/navigation"
import Image from "next/image"
import StarRating from "@/components/StarRating"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default async function Profile() {
  const session = await getServerSession(authOptions)

  if (!session) redirect("/api/auth/signin")

  const userInfo = parseNameAndRegNum(session?.user?.name)

  return <div className="pt-20">
    {/* Profile Box */}
    <div className="flex my-4 ml-auto mr-10 rounded-lg justify-between w-[55rem] items-center p-5 bg-primary text-primary-foreground">
      <div className="space-y-5">
        <p className="font-inter">WELCOME</p>
        <div className="space-y-1">
          <p className="text-xl font-bold">{userInfo?.name}</p>
          <p>Delhi, NCR Campus</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <Image src={session.user?.image as string} alt="img" height={50} width={50} className="rounded-full" />
        <StarRating />
      </div>
    </div>

    {/* Progess Box */}
    <div className="container">
      <div className="w-[80rem]">
        <div className="w-[80rem] h-[15rem] relative">
          <Image src="/progress.png" alt="img" fill />
        </div>
        <ul className="flex font-catamaran font-semibold justify-evenly w-full">
          {months.map(month => (
            <li key={month}>{month}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
}
