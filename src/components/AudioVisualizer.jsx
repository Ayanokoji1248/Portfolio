import { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import song from "../assets/homeNF.mp3"; // or /music/homeNF.mp3 if in public folder

const AudioVisualizer = () => {
  const containerRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    waveSurferRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#ffffff",
      progressColor: "#33343B",
      cursorColor: "white",
      height: 50,
      barWidth: 5,
      responsive: true,
      barRadius: 10,
    });

    waveSurferRef.current.load(song);

    return () => waveSurferRef.current.destroy(); // Cleanup
  }, []);

  const togglePlay = () => {
    waveSurferRef.current.playPause();
    setIsPlaying((p) => !p);
  };

  return (
    <div
      className="
    rounded-xl backdrop-blur-lg shadow-xl 
    w-full 
    max-w-full 
    md:max-w-[500px] 
    lg:max-w-[650px]
    mx-auto 
    text-center 
    p-4
  "
    >
      <div ref={containerRef} className="w-full min-h-[60px]" />

      <button
        onClick={togglePlay}
        className="mt-4 bg-zinc-900 border border-zinc-500 text-sm cursor-pointer px-3 py-1 rounded-full transition-all"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default AudioVisualizer;
