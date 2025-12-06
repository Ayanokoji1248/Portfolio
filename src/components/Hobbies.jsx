import React from "react";
import RubiksCube from "./RubiksCube";

const Hobbies = () => {
  return (
    <div className="h-full md:w-2xl p-3 py-10">
      <div className="flex flex-col">
        <h1 className="text-zinc-500 font-bold text-sm leading-none">About</h1>
        <h1 className="font-bold text-3xl">Hobbies</h1>
      </div>

      {/* Responsive layout */}
      <div className="flex flex-col md:flex-row mt-3 gap-3">
        {/* Rubik's Cube 3D Model */}
        <div className="w-full flex justify-center md:justify-start">
          <RubiksCube />
        </div>

        {/* Text */}
        <div className="w-full p-3 flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Rubik’s Cube Enthusiast</h1>
          <p className="text-zinc-500 font-medium leading-tight text-sm">
            I’m a Rubik’s Cube nerd at heart. I enjoy solving cubes and
            experimenting with new algorithms, and I’ve collected 40+ different
            Rubik’s Cubes — each with its own challenge. It’s my favorite way to
            relax, reset my mind, and keep my problem-solving skills sharp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
