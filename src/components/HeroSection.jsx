import React from "react";
import hero from "../assets/hero.png";
import { AudioLines, Send } from "lucide-react";
import AudioVisualizer from "./AudioVisualizer";
const HeroSection = () => {
  return (
    <div className="h-full md:w-2xl p-3 py-10">
      <img
        className="w-22 md:hidden rounded-md mb-5 shadow-md shadow-white "
        src={hero}
        alt=""
      />
      <h1 className="text-5xl md:text-5xl font-[Introvert] relative p-2">
        Hey, I'm Krish Prajapati
        <img
          className="w-22 hidden md:block  rounded-md absolute -top-5 right-10 -rotate-6 shadow-md shadow-white "
          src={hero}
          alt=""
        />
      </h1>
      <h1 className="text-4xl font-[Introvert] relative p-2 text-zinc-500">
        — I am Full Stack Developer.
      </h1>
      <div className="w-full max-w-xl text-zinc-500">
        <p className="leading-relaxed sm:leading-loose text-sm sm:text-base">
          I build interactive web apps using{" "}
          <span className="px-2 py-0.5 sm:px-3 sm:py-1 font-bold text-white text-xs sm:text-sm rounded-md bg-zinc-800 ring ring-offset-1 ring-offset-zinc-600 ring-zinc-700">
            React
          </span>{" "}
          ,{" "}
          <span className="px-2 py-0.5 sm:px-3 sm:py-1 font-bold text-white text-xs sm:text-sm rounded-md bg-zinc-800 ring ring-offset-1 ring-offset-zinc-600 ring-zinc-700">
            Typescript
          </span>{" "}
          and{" "}
          <span className="px-2 py-0.5 sm:px-3 sm:py-1 font-bold text-white text-xs sm:text-sm rounded-md bg-zinc-800 ring ring-offset-1 ring-offset-zinc-600 ring-zinc-700">
            MongoDb
          </span>{" "}
          — with a focus on clean UI design and creative user experiences.
          Currently exploring Framer Motion, WebSockets, and Three.js.
        </p>
      </div>

      <div className="flex mt-5 gap-5">
        <button className="px-4 py-2.5 rounded-md text-white border text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_white] duration-300 cursor-pointer">
          Resume/CV
        </button>
        <button className="px-4 py-2.5 rounded-md text-black bg-white border text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_white] duration-300 cursor-pointer flex items-center gap-2">
          Get in Touch
          <Send size={16} />
        </button>
      </div>

      <div className="text-white flex flex-col justify-center p-3 mt-10 gap-3 bg-zinc-900 rounded-md w">
        <h1 className="text-sm font-medium flex items-center gap-2">
          Favourite Song
          <AudioLines size={20} />
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Album Image */}
          <img
            className="w-32 sm:w-36 md:w-40 rounded-md"
            src="https://pixelframe.design/wp-content/uploads/2025/11/pixelframe-design_album_cover-NF-fear.jpg"
            alt=""
          />
          {/* Visualizer */}
          <div className="w-full md:flex-1">
            <AudioVisualizer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
