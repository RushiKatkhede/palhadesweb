import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";
import { useServiceMode } from "../context/ServiceModeContext";

export const Footer = () => {
  const { mode } = useServiceMode();

  const description =
    mode === "B2B"
      ? "Palhade’s B2B Services is a trusted leader in business transportation across India, offering fleet, security, and app-powered solutions."
      : "Palhade’s B2C Services offer safe, timely, and affordable rides for daily commuters and personal needs across India.";

  const contactNote =
    mode === "B2B"
      ? "Connect with us for seamless B2B transport solutions that scale with your needs."
      : "Experience worry-free, comfortable rides across cities with Palhades B2C Services.";

  return (
    <div className="px-4 pt-16 mx-12 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14 lg:px-4">
      <div className="grid row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Description */}
        <motion.div
          variants={SlideUp(0.2, 100)}
          initial="initial"
          whileInView="animate"
          className="sm:col-span-2"
        >
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img
              src="/icon.png"
              alt="logo"
              width={20}
              height={20}
              className="flex"
            />
            <span className="ml-2 text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-header to-theme uppercase">
              Palhades
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">{description}</p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={SlideUp(0.4, 100)}
          initial="initial"
          whileInView="animate"
          className="space-y-4 text-sm md:mt-0 mt-4"
        >
          <p className="text-base font-bold tracking-wide text-theme">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:9922-35-0604"
              className="underline transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +91 9922 350 604
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:Official@palhades.com"
              className="underline transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Official@palhades.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://maps.app.goo.gl/3jskjEqDKJD1P3S69"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Shop No. 13. GMC Plaza Purnanagar, Chinchwad Pune 411019. (MH) INDIA.
            </a>
          </div>
        </motion.div>

        {/* Social Media + Mode-specific Note */}
        <motion.div
          variants={SlideUp(0.6, 100)}
          initial="initial"
          whileInView="animate"
          className="md:mt-0 mt-4 space-y-4"
        >
          <span className="text-base font-bold tracking-wide text-header">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=919922350604&text&type=phone_number&app_absent=0"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
             >
               <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                 <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.545 4.108 1.486 5.84L.061 24l6.383-1.643A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.06c-1.84 0-3.587-.486-5.116-1.354l-.363-.21-3.772 1.016 1.013-3.678-.237-.387A9.84 9.84 0 0 1 2.06 12c0-5.459 4.44-9.898 9.898-9.898s9.898 4.439 9.898 9.898c0 5.458-4.44 9.898-9.898 9.898zm4.64-7.502c-.254-.126-1.498-.74-1.73-.825-.232-.084-.402-.126-.573.126-.171.253-.658.825-.806.992-.148.169-.296.19-.55.064-.254-.127-1.074-.395-2.045-1.255-.756-.672-1.264-1.502-1.413-1.756-.148-.253-.016-.39.11-.516.114-.113.254-.295.381-.444a1.45 1.45 0 0 0 .192-.319c.064-.126.032-.232-.016-.32-.048-.084-.53-1.271-.727-1.747-.192-.464-.388-.401-.573-.408-.148-.007-.32-.008-.492-.008a.946.946 0 0 0-.678.315c-.232.254-.888.866-.888 2.109s.91 2.445 1.037 2.614c.126.169 1.788 2.754 4.357 3.761.61.262 1.085.418 1.455.537.612.195 1.17.168 1.611.102.491-.073 1.498-.61 1.71-1.196.211-.585.211-1.088.148-1.196-.064-.106-.232-.17-.49-.295z" />
               </svg>
             </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24 4.557a9.965 9.965 0 0 1-2.828.775 4.916 4.916 0 0 0 2.165-2.717 9.84 9.84 0 0 1-3.127 1.196A4.916 4.916 0 0 0 16.8 3.15c-2.72 0-4.923 2.204-4.923 4.923 0 .385.045.762.13 1.123A13.95 13.95 0 0 1 1.67 3.149a4.909 4.909 0 0 0-.665 2.476c0 1.71.872 3.215 2.2 4.099A4.93 4.93 0 0 1 .965 9.14v.061c0 2.385 1.697 4.373 3.95 4.826a4.936 4.936 0 0 1-2.224.084 4.917 4.917 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.102 2.104c-.396 0-.788-.023-1.175-.067a13.951 13.951 0 0 0 7.544 2.213c9.055 0 14-7.504 14-14.002 0-.213-.005-.426-.014-.637A10.01 10.01 0 0 0 24 4.557z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Palhades_Multi_Services"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M19.615,3.184C18.95,3,12,3,12,3s-6.95,0-7.615.184A3.007,3.007,0,0,0,2.184,3.615,33.722,33.722,0,0,0,2,6c0,.585.044,1.312.068,2h5.864c.024-.688.068-1.415.068-2A33.722,33.722,0,0,0,9.816,3.615,3.007,3.007,0,0,0,9.615,3.184Z" />
                <path d="M22.54,6.42a2.994,2.994,0,0,0-2.1-2.121C19.55,4,12,4,12,4s-7.55,0-8.44.299a2.994,2.994,0,0,0-2.1,2.121A33.738,33.738,0,0,0,.21,12a33.738,33.738,0,0,0,.254,3.78,2.994,2.994,0,0,0,2.1,2.121C4.45,18,12,18,12,18s7.55,0,8.44-.299a2.994,2.994,0,0,0,2.1-2.121A33.738,33.738,0,0,0,23.79,12,33.738,33.738,0,0,0,22.54,6.42Zm-13.04,6.96V8.62l5.24,2.379Z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">{contactNote}</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={SlideUp(0.8, 100)}
          initial="initial"
          whileInView="animate"
          className="md:mt-0 mt-4 space-y-4 text-sm"
        >
          <p className="text-base font-bold tracking-wide text-theme">
            Quick Links
          </p>
          <div className="flex flex-col space-y-2">
            <a href="/privacy-policy" className="hover:underline text-gray-600">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline text-gray-600">
              Terms of Use
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          Copyright © 2024 Palhades - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
