import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { SlideDown } from "../animations/animate";
function ContactsBar() {
  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row p-2 text-fuchsia-100 justify-between w-full overflow-hidden"
        initial={{
          background: "linear-gradient(to right, #333399, #F25961)",
        }}
        whileInView={{
          background: "linear-gradient(to right, #F25961, #333399)",
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      >
        <motion.div
          className="md:flex hidden items-center gap-3 md:ml-7"
          variants={SlideDown(0.4, 50)}
          initial="initial"
          animate="animate"
        >
          <MapPin size={20} color="#fff" />
          <a href="https://maps.app.goo.gl/3jskjEqDKJD1P3S69">
          Shop No. 13. GMC Plaza Purnanagar, Chinchwad
          Pune 411019. (MH) INDIA.
          </a>
        </motion.div>
        <motion.div
          variants={SlideDown(0.6, 50)}
          initial="initial"
          animate="animate"
          className="flex items-center justify-between gap-2 md:gap-4 md:mr-7"
        >
          <Phone size={20} color="#fff" />
          <a href="tel:7788-91-7788">7788 91 7788</a>
          <EnvelopeSimple size={20} color="#fff" />
          <a href="mailto:Official@palhades.com">Official@palhades.com</a>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ContactsBar;
