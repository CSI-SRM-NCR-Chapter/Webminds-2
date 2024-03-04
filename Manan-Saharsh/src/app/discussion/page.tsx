import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn, parseNameAndRegNum } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const tips = [
  { name: "Paro Shetty", avatar: "/person1.png", tip: "Confidence. It's essential to project confidence in your abilities and responses", bg: "bg-violet-600" },
  { name: "Rakesh Kumar", avatar: "/person2.png", tip: "How can I effectively prepare for common interview questions?", bg: "bg-white" },
  { name: "Paro Shetty", avatar: "/person1.png", tip: "Research typical questions, practice responses, and focus on highlighting relevant experiences.", bg: "bg-violet-600" },
  { name: "Rakesh Kumar", avatar: "/person2.png", tip: "Any tips for making a lasting impression on the interviewer?", bg: "bg-white" },
  { name: "Andy Bert", avatar: "/person1.png", tip: "Be authentic, engage actively, and demonstrate your enthusiasm for the role and company.", bg: "bg-yellow-400" },
  { name: "Rakesh Kumar", avatar: "/person2.png", tip: "I am deeply appreciative of your patience, understanding, and dedication to my development. Your mentorship has made a significant difference in my life, and I am honored to have had the opportunity to learn from someone as inspiring and knowledgeable as you.", bg: "bg-white" },
]
export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) redirect("/api/auth/signin")

  const userInfo = parseNameAndRegNum(session.user?.name)

  return <main className="pt-20 pb-4">
    {/* Hero Section */}
    <div className="bg-[url('/chat_bg.png')] bg-repeat-x h-[45rem]">
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-[50rem]">
          <AspectRatio ratio={1 / 1}>
            <Image src="/blob.svg" fill alt="" />
          </AspectRatio>
        </div>
        <div className="absolute flex items-center justify-center flex-col">
          <div className="w-[10rem]">
            <AspectRatio ratio={1 / 1}>
              <Image src="/msg.svg" alt="" fill />
            </AspectRatio>
          </div>
          <h1 className="text-center w-full text-8xl font-extrabold font-aladin text-white">Discussion</h1>
        </div>
      </div>
    </div>

    {/* Tips Section */}
    <div className="flex flex-col items-center p-14">
      <div className="space-y-10 text-center">
        <h2 className="text-8xl font-extrabold font-aladin">Interview Tips #101</h2>
        <h3 className="text-3xl font-semibold">Opened by {userInfo.name} on 28 Feb, 2024</h3>
      </div>
    </div>
    <ul className="space-y-4 px-7">
      {tips.map((tip, index) => (
        <li key={index}><TipBox data={tip} /></li>
      ))}
    </ul>

    <h3 className="text-6xl font-bold text-muted-foreground text-center p-5">Load More</h3>
  </main>
}

function TipBox({ data, className }: { data: { name: string, tip: string, avatar: string, bg: string }; className?: string }) {
  const textClass = data.bg === "bg-violet-600" ? "text-white" : "text-black";

  return <div className={cn("flex gap-6 p-5 rounded-[1.5rem] border border-black", className, textClass, data.bg)}>
    <div className="w-[80px]">
      <AspectRatio ratio={1 / 1}>
        <Image src={data.avatar} alt="" fill />
      </AspectRatio>
    </div>
    <div className="space-y-3 font-aladin">
      <p className="text-2xl font-bold">{data.name}</p>
      <p className="font-lg">{data.tip}</p>
    </div>
  </div>
}
