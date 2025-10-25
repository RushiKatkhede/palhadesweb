import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";
import { Briefcase, Users } from "lucide-react";
import { useServiceMode } from "../context/ServiceModeContext";

function HeroSection() {
  const { mode, toggleMode } = useServiceMode();

  return (
    <div className="flex cursor-default justify-center md:block">
      <div className="h-screen md:w-2/5 p-10">
        <div className="flex flex-col items-center md:items-start">
          {/* Toggle Button */}
          <div className="flex items-center justify-center mb-6">
            <button
              onClick={toggleMode}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#713CA6] text-[#713CA6] hover:bg-[#713CA6] hover:text-white transition"
            >
              {mode === "B2B" ? <Briefcase size={20} /> : <Users size={20} />}
              Switch to {mode === "B2B" ? "B2C" : "B2B"} Mode
            </button>
          </div>

          {/* Hero Text */}
          <motion.div
            variants={SlideUp(0.6, 50)}
            initial="initial"
            whileInView="animate"
            className="md:text-6xl text-5xl font-bold leading-tight mt-10 md:mt-20 text-[#2E1F5E] text-center md:text-left"
          >
            {mode === "B2B" ? (
              <>
                <span className="text-[#F25C4C]">India’s</span>{" "}
                <span className="text-[#2E1F5E]">Trusted</span>{" "}
                <span className="text-[#713CA6]">Partner</span>{" "}
                <span className="text-[#F25C4C]">in B2B</span>{" "}
                <span className="text-[#2E1F5E]">Transportation</span>
              </>
            ) : (
              <>
                <span className="text-[#F25C4C]">Your</span>{" "}
                <span className="text-[#2E1F5E]">Go-To</span>{" "}
                <span className="text-[#713CA6]">Choice</span>{" "}
                <span className="text-[#F25C4C]">for B2C</span>{" "}
                <span className="text-[#2E1F5E]">Travel Services</span>
              </>
            )}
          </motion.div>

          {/* Subheading */}
          <motion.div
            variants={SlideUp(0.8, 50)}
            initial="initial"
            whileInView="animate"
            className="text-xl font-medium mt-10 md:max-w-md md:text-left text-center text-[#713CA6]"
          >
            {mode === "B2B"
              ? "Seamless. Scalable. Technology-Driven Transport Solutions."
              : "Comfortable. Convenient. Personal Travel Services Tailored for You."}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
