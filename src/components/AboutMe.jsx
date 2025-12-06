import React from "react";
import hero from "../assets/hero.png";

const AboutMe = () => {
  return (
    <div className="h-full md:w-2xl p-3 py-10">
      <div className="flex flex-col">
        <h1 className="text-zinc-500 font-bold text-sm leading-none">About</h1>
        <h1 className="font-bold text-3xl">Me</h1>
      </div>

      {/* Make it responsive here */}
      <div className="flex flex-col md:flex-row mt-3 gap-3">
        {/* Image */}
        <div className="w-full flex justify-center md:justify-start">
          <img className="w-80 rounded-md" src={hero} alt="" />
        </div>

        {/* Text */}
        <div className="w-full p-3 flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Krish Prajapati</h1>
          <p className="text-zinc-500 font-medium leading-tight text-sm">
            I'm a Full Stack web developer and Open Source Contributor, I love
            building products to solve real-world problems. I'm specialized in
            building MVP's.
          </p>

          <div>
            <h1 className="font-bold">Skills:</h1>
            <div className="skills mt-1 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                React
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                Express
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                MongoDb
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                Postgres
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                Node
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
