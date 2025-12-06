import { Mail } from "lucide-react";
import hero from "../assets/hero.png";
const NavBar = () => {
  return (
    <nav className="border mx-auto w-md md:w-2xl p-2 py-1 px-4 rounded-full bg-white text-black flex items-center justify-between fixed z-99">
      <div>
        <img
          className="w-12 rounded-full hover:scale-110 transition-all duration-500 transform-gpu cursor-pointer"
          src={hero}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between md:gap-10 gap-3">
        <p className="text-sm font-medium">Home</p>
        <p className="text-sm font-medium">Projects</p>
        <p className="text-sm font-medium">Hobbies</p>
      </div>
      <div
        className="bg-neutral-100 p-2 rounded-full ring ring-zinc-200 ring-offset-1
  transition-all duration-500 ease-in-out cursor-pointer group
  hover:bg-neutral-200 hover:scale-110 hover:shadow-md transform-gpu"
      >
        <Mail
          className="text-black transition-all duration-500 ease-in-out"
          size={20}
        />
      </div>
    </nav>
  );
};

export default NavBar;
