import {
  CarSimple,
  Truck,
  UserCheck,
  GooglePlayLogo,
  AirplaneTakeoff,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";
import { useServiceMode } from "../context/ServiceModeContext";

function ServicesSection() {
  const { mode } = useServiceMode();

  const heading =
    mode === "B2B"
      ? "Trusted by India’s Leading Brands for Scalable Transport Solutions"
      : "Making Everyday Travel Safer, Easier, and More Affordable for Everyone";

  const cards = mode === "B2B"
    ? [
        {
          icon: <CarSimple size={32} className="text-theme" />,
          title: "Diverse Fleet",
          desc: "Choose from 550+ vehicles including cars, vans, buses, and goods carriers tailored to every business requirement.",
        },
        {
          icon: <Truck size={32} className="text-theme" />,
          title: "Customized Solutions",
          desc: "Our team crafts transport plans uniquely aligned to your company’s operational needs.",
        },
        {
          icon: <UserCheck size={32} className="text-theme" />,
          title: "On-Time, Every Time",
          desc: "Count on us for punctual, reliable, and consistent service—day after day.",
        },
        {
          icon: <GooglePlayLogo size={32} className="text-theme" />,
          title: "Tech-Enabled Operations",
          desc: "Leverage the exclusive Palhades App for live tracking, attendance, fuel insights, analytics, and more.",
        },
      ]
    : [
        {
          icon: <AirplaneTakeoff size={32} className="text-theme" />,
          title: "City & Outstation Rides",
          desc: "Book reliable rides locally or between cities with comfort and affordability.",
        },
        {
          icon: <CarSimple size={32} className="text-theme" />,
          title: "Daily Commute",
          desc: "Simplify your work and school travel with timely pickups and safe drop-offs.",
        },
        {
          icon: <UserCheck size={32} className="text-theme" />,
          title: "Verified Drivers",
          desc: "Ride with confidence—every driver is background-verified and professionally trained.",
        },
        {
          icon: <GooglePlayLogo size={32} className="text-theme" />,
          title: "Palhades App",
          desc: "Track rides, manage bookings, and access support instantly from our mobile app.",
        },
      ];

  return (
    <div className="flex flex-col text-center items-center">
      {/* Section Title */}
      <motion.div
        variants={SlideUp(0.2, 50)}
        initial="initial"
        whileInView="animate"
        className="text-fuchsia-100 p-3 mt-16 font-semibold"
      >
        WHY CHOOSE US
      </motion.div>

      {/* Main Heading */}
      <motion.div
        variants={SlideUp(0.4, 50)}
        initial="initial"
        whileInView="animate"
        className="text-lg md:text-4xl font-semibold w-4/5 md:w-1/2 text-white p-3 mb-10"
      >
        {heading}
      </motion.div>

      {/* Services Grid */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center mb-24 mx-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={SlideUp(0.6 + index * 0.2, 150)}
            initial="initial"
            whileInView="animate"
            className="flex flex-col items-center p-7 max-w-xs"
          >
            <div className="rounded-full bg-fuchsia-100 p-4">{card.icon}</div>
            <div className="mt-5 mb-3 text-2xl font-semibold text-white">
              {card.title}
            </div>
            <div className="text-slate-50 text-center">{card.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
