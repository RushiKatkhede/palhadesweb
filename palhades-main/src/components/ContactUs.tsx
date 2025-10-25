import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";

export const Contact = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="m-4">
      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-white rounded-xl w-full shadow-md">
        {/* Left Side - Centered Heading */}
        <motion.div
          variants={SlideUp(0.2, 50)}
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-center justify-center text-center md:w-6/12 w-full mb-6 md:mb-0"
        >
          <h2 className="text-3xl font-semibold text-purple-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-md">
            We’d love to hear from you! Fill in your details and send us a message.
          </p>
        </motion.div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 md:w-5/12 w-full md:ml-8"
        >
          {/* Row 1: First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.input
              variants={SlideUp(0.25, 50)}
              initial="initial"
              whileInView="animate"
              type="text"
              placeholder="First Name"
              className="flex-1 h-12 rounded-3xl bg-gray-100 p-4"
              required
            />
            <motion.input
              variants={SlideUp(0.3, 50)}
              initial="initial"
              whileInView="animate"
              type="text"
              placeholder="Last Name"
              className="flex-1 h-12 rounded-3xl bg-gray-100 p-4"
              required
            />
          </div>

          {/* Row 2: Email */}
          <motion.input
            variants={SlideUp(0.35, 50)}
            initial="initial"
            whileInView="animate"
            type="email"
            placeholder="Email"
            className="h-12 rounded-3xl bg-gray-100 p-4"
            required
          />

          {/* Row 3: Phone & City */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.input
              variants={SlideUp(0.4, 50)}
              initial="initial"
              whileInView="animate"
              type="tel"
              placeholder="Phone Number"
              className="flex-1 h-12 rounded-3xl bg-gray-100 p-4"
              required
            />
            <motion.input
              variants={SlideUp(0.45, 50)}
              initial="initial"
              whileInView="animate"
              type="text"
              placeholder="City"
              className="flex-1 h-12 rounded-3xl bg-gray-100 p-4"
              required
            />
          </div>

          {/* Row 4: Message */}
          <motion.textarea
            variants={SlideUp(0.5, 50)}
            initial="initial"
            whileInView="animate"
            placeholder="Your Message"
            className="rounded-3xl bg-gray-100 p-4 h-24 resize-none"
            required
          />

          {/* Button */}
          <motion.button
            variants={SlideUp(0.55, 50)}
            initial="initial"
            whileInView="animate"
            type="submit"
            className="h-12 rounded-3xl text-white font-bold bg-purple-700 hover:bg-purple-800 transition-colors"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};
