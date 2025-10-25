import { ShieldCheck, CalendarCheck, GlobeHemisphereWest } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";
import { useServiceMode } from "../context/ServiceModeContext"; // 🔁 Context import

function FeaturesSection() {
  const { mode } = useServiceMode(); // 🔁 Get current mode

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-4 md:p-10 cursor-default justify-evenly">
      {/* Feature 1 */}
      <motion.div
        variants={SlideUp(0.2, 100)}
        initial="initial"
        whileInView="animate"
        className="flex flex-col items-center shadow-sm hover:shadow-2xl transition duration-300 rounded-lg w-4/5 md:w-1/4 bg-white"
      >
        <div className="rounded-full mt-10 p-5 bg-theme text-white">
          <ShieldCheck size={36} />
        </div>
        <p className="text-xl font-semibold my-6 text-theme">
          {mode === "B2B" ? "Safety-Driven Operations" : "Family-Safe Rides"}
        </p>
        <p className="w-2/3 md:text-lg text-center mb-10 text-gray-600">
          {mode === "B2B"
            ? "Professional drivers, regular maintenance, and real-time tracking ensure passenger and cargo safety."
            : "Trained drivers and sanitized vehicles ensure safe travel for families and individuals."}
        </p>
      </motion.div>

      {/* Feature 2 */}
      <motion.div
        variants={SlideUp(0.4, 100)}
        initial="initial"
        whileInView="animate"
        className="flex flex-col items-center text-white shadow-sm hover:shadow-2xl hover:text-white hover:bg-theme transition duration-300 rounded-lg w-4/5 md:w-1/4 bg-theme"
      >
        <div className="rounded-full mt-10 p-5 bg-white text-theme">
          <CalendarCheck size={36} />
        </div>
        <p className="text-xl font-semibold my-6">
          {mode === "B2B" ? "On-Time Scheduling" : "Reliable Pickup & Drop"}
        </p>
        <p className="w-2/3 md:text-lg text-center mb-10">
          {mode === "B2B"
            ? "Optimized dispatch and route planning for guaranteed punctuality, every time."
            : "Timely service for school runs, appointments, and daily commutes — no delays."}
        </p>
      </motion.div>

      {/* Feature 3 */}
      <motion.div
        variants={SlideUp(0.6, 100)}
        initial="initial"
        whileInView="animate"
        className="flex flex-col items-center shadow-sm hover:shadow-2xl transition duration-300 rounded-lg w-4/5 md:w-1/4 bg-white"
      >
        <div className="rounded-full mt-10 p-5 bg-theme text-white">
          <GlobeHemisphereWest size={36} />
        </div>
        <p className="text-xl font-semibold m-6 text-theme text-center">
          {mode === "B2B" ? "Nationwide Network" : "Available Across India"}
        </p>
        <p className="w-2/3 md:text-lg text-center mb-10 text-gray-600">
          {mode === "B2B"
            ? "Seamless transport coverage across India with strong local partnerships and support systems."
            : "Travel conveniently from anywhere — metro cities or remote towns, we’ve got you covered."}
        </p>
      </motion.div>
    </div>
  );
}

export default FeaturesSection;
