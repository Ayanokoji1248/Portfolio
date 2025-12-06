import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import Hobbies from "./components/Hobbies";
import LightRays from "./components/LightRays";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";
import RubiksCube from "./components/RubiksCube";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white font-[Satoshi] relative">
      <div className="fixed inset-0 pointer-events-none z-0 top-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={1}
          mouseInfluence={false}
          rayLength={1.2}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-5xl mx-auto min-h-screen relative z-10">
        {/* <div className="w-px rounded-full h-full absolute left-0 top-0 bg-linear-to-b from-zinc-950 via-zinc-600 to-zinc-950" /> */}
        <div class="w-12 h-full absolute col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10" />

        {/* NavBar */}
        <div className="w-full h-20 flex items-center justify-center">
          <NavBar />
        </div>

        <div className="w-full flex flex-col items-center justify-center p-5 pt-3 md:mt-3 relative">
          <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-zinc-950 via-zinc-700  to-zinc-950" />
          <HeroSection />
        </div>

        <div className="w-full flex items-center justify-center p-5 pb-10 md:mt-3 mb-3 relative">
          <ProjectSection />
          <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-zinc-950 via-zinc-700  to-zinc-950" />
        </div>

        <div className="w-full flex items-center justify-center p-5 pb-10 md:mt-3 mb-3 relative">
          <AboutMe />
          <div className="absolute w-full h-px bottom-0 bg-linear-to-r from-zinc-950 via-zinc-700  to-zinc-950" />
        </div>

        <div className="w-full flex items-center justify-center">
          <Hobbies />
        </div>

        {/* <div className="w-px rounded-full h-full absolute right-0 top-0  bg-linear-to-b from-zinc-950 via-zinc-600 to-zinc-950" /> */}
        <div class="w-12 h-full top-0 right-0 absolute col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10" />
      </div>
    </div>
  );
};

export default App;
