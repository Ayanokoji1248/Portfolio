import React from "react";
import project1 from "../assets/project1.png";

const ProjectSection = () => {
  return (
    <div className="md:w-2xl w-full flex flex-col gap-3">
      <h1 className="font-bold text-zinc-300 text-xl">Projects</h1>

      <div className="projects grid sm:grid-cols-2 sm:grid-rows-2 gap-3">
        <div className="w-full max-w-sm bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zinc-800">
          {/* Image Section */}
          <div className="h-56 overflow-hidden">
            <img
              src={project1}
              alt="Project"
              className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col gap-1">
            <h3 className="text-lg   font-semibold text-white">Project Name</h3>
            <p className="text-sm text-zinc-300 mt-1">
              Short description of your project goes here. Explain it in one or
              two lines.
            </p>

            <div className="mt-2">
              <h1 className="text-sm font-bold text-zinc-200">Tech Stack</h1>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  React
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View Live →
              </a>

              <a
                href="#"
                className="text-sm font-medium text-zinc-400 hover:underline"
              >
                GitHub Repo →
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zinc-800">
          {/* Image Section */}
          <div className="h-56 overflow-hidden">
            <img
              src={project1}
              alt="Project"
              className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col gap-1">
            <h3 className="text-lg   font-semibold text-white">Project Name</h3>
            <p className="text-sm text-zinc-300 mt-1">
              Short description of your project goes here. Explain it in one or
              two lines.
            </p>

            <div className="mt-2">
              <h1 className="text-sm font-bold text-zinc-200">Tech Stack</h1>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  React
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View Live →
              </a>

              <a
                href="#"
                className="text-sm font-medium text-zinc-400 hover:underline"
              >
                GitHub Repo →
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zinc-800">
          {/* Image Section */}
          <div className="h-56 overflow-hidden">
            <img
              src={project1}
              alt="Project"
              className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col gap-1">
            <h3 className="text-lg   font-semibold text-white">Project Name</h3>
            <p className="text-sm text-zinc-300 mt-1">
              Short description of your project goes here. Explain it in one or
              two lines.
            </p>

            <div className="mt-2">
              <h1 className="text-sm font-bold text-zinc-200">Tech Stack</h1>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  React
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-xs rounded-md">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View Live →
              </a>

              <a
                href="#"
                className="text-sm font-medium text-zinc-400 hover:underline"
              >
                GitHub Repo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
