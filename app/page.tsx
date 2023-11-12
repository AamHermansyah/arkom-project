import About from "@/components/About";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Sewa from "@/components/Sewa";
import Spot from "@/components/Spot";

export default function Home() {
  return (
    <>
      <Hero />
      <Spot />
      <Sewa />
      <About />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}
