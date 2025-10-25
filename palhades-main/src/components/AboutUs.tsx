import { useState } from "react";
import Video from "./Video";
import { Play, Pause, Repeat } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  SlideDown,
  SlideLeft,
  SlideRight,
  SlideUp,
} from "../animations/animate";
import { useServiceMode } from "../context/ServiceModeContext";

function AboutUs() {
  const { mode } = useServiceMode(); // ✅ get B2B or B2C
  const [playing, setPlaying] = useState(false);
  const [replay, setReplay] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handlePlay = () => {
    setPlaying(true);
    setShowLogo(false);
  };
  const handlePause = () => {
    setPlaying(false);
    setShowLogo(false);
  };
  const handleReplay = () => {
    setReplay(true);
    setShowLogo(false);
  };

  return (
    <div className="md:grid grid-cols-2 md:p-10 p-4 my-10 md:my-0">
      <div className="hidden md:flex aspect-w-5 aspect-h-3">
        <Video
          playing={playing}
          replay={replay}
          setReplay={setReplay}
          showLogo={showLogo}
          setShowLogo={setShowLogo}
          setPlaying={setPlaying}
        />
      </div>

      <div className="md:w-3/4 ml-10 mt-7 cursor-default">
        <motion.div
          variants={SlideDown(0.2, 50)}
          initial="initial"
          whileInView="animate"
          className="text-header font-bold"
        >
          ABOUT US
        </motion.div>

        <motion.div
          variants={SlideUp(0.4, 50)}
          initial="initial"
          whileInView="animate"
          className="text-theme font-bold text-3xl my-6"
        >
          {mode === "B2B"
            ? "Welcome to Palhade's B2B Services — your enterprise transport partner across India."
            : "Palhade's B2C Services — comfortable, affordable travel for everyone."}
        </motion.div>

        <motion.div
          variants={SlideLeft(0.6, 50)}
          initial="initial"
          whileInView="animate"
          className="my-4 border-l-4 border-fuchsia-600 pl-5 text-gray-600 text-lg"
        >
          {mode === "B2B"
            ? "We deliver safe, on-time, and tailored transportation services for businesses. From employee commutes to logistics, our 550+ vehicle fleet and tech platform ensure seamless service delivery."
            : "We offer stress-free, affordable and clean transport for individuals and families. From intercity rides to daily commutes, we prioritize comfort and reliability."}
        </motion.div>

        <motion.div
          variants={SlideUp(0.8, 50)}
          initial="initial"
          whileInView="animate"
          className="font-semibold text-slate-600 text-xl"
        >
          {mode === "B2B"
            ? "Choose us for scalable, reliable, and professional business transportation."
            : "Choose us for personal, safe, and enjoyable journeys — wherever life takes you."}
        </motion.div>

        <div className="hidden md:flex items-center gap-4 justify-between">
          <motion.div
            variants={SlideRight(1, 50)}
            initial="initial"
            whileInView="animate"
            className="flex gap-4"
          >
            <Repeat
              size={32}
              className="text-purple-500 cursor-pointer hover:opacity-80 active:scale-110"
              onClick={handleReplay}
            />
            <Play
              size={32}
              className="text-header cursor-pointer hover:opacity-80 active:scale-110"
              onClick={handlePlay}
            />
            <Pause
              size={32}
              className="text-theme cursor-pointer hover:opacity-80 active:scale-110"
              onClick={handlePause}
            />
          </motion.div>

          <motion.div
            variants={SlideLeft(1.2, 50)}
            initial="initial"
            whileInView="animate"
            className="my-6"
          >
            <div className="flex py-3 px-6 cursor-pointer bg-theme text-white hover:bg-header rounded-full shadow hover:shadow-xl transition duration-400">
              <span className="hidden md:block">Discover </span>
              <span className="ml-1"> more</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
