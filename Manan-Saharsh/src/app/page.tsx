import Courses from "@/components/Courses";
import Discussion from "@/components/Discussion";
import Hero from "@/components/Hero";
import Interview from "@/components/Interview";

export default function Home() {
  return (
    <main className="min-h-[80vh] bg-[#304c58] ">
     <Hero/>
     <Courses/>
     <Interview/>
     <Discussion/>
    </main>
  );
}
