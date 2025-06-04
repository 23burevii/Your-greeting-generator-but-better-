import Lottie from "lottie-react";
import animationData from "../assets/logo.json";

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-68 h-68" 
      />
      <p className="mt-4 text-lg font-semibold text-accent">Generating...</p>
    </div>
  );
}

export default Spinner;

