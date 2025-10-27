import { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../animations/animate";

export const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(e.target);
    formData.append("access_key", "4bdfba5a-531b-4be6-bc7c-d8c5cbfc29fd"); // your Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        e.target.reset(); // clear form fields
      } else {
        setResult("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setResult("⚠️ Network error. Please check your connection.");
    }

    setLoading(false);
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
              name="first_name"
              placeholder="First Name"
              className="flex-1 h-12 rounded-3xl bg-gray-100 p-4"
              required
            />
            <motion.input
              variants={SlideUp(0.3, 50)}
              initial="initial"
              whileInView="animate"
              type="text"
              name="last_name"
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
            name="email"
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
              name="phone"
              placeholder="Phone Number"
              className="flex-1 h-12 rounded-3xl bg-gray-100 p-4"
              required
            />
            <motion.input
              variants={SlideUp(0.45, 50)}
              initial="initial"
              whileInView="animate"
              type="text"
              name="city"
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
            name="message"
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
            disabled={loading}
            className="h-12 rounded-3xl text-white font-bold bg-purple-700 hover:bg-purple-800 transition-colors disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Response Message */}
          {result && (
            <p className="text-center text-gray-700 font-medium mt-2">{result}</p>
          )}
        </form>
      </div>
    </div>
  );
};
