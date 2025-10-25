import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../animations/animate";
import { useServiceMode } from "../context/ServiceModeContext";

export const Testimonial = () => {
  const { mode } = useServiceMode();

  const heading = mode === "B2B" ? "What Our Clients Say" : "What Our Riders Say";
  const subheading =
    mode === "B2B"
      ? "See how India’s top businesses trust Palhade’s B2B Services to power their operations."
      : "Hear from real people who ride with Palhades for safe and seamless travel.";

  const testimonials = mode === "B2B"
    ? [
        {
          content:
            "Palhade’s team ensures our hotel staff are transported safely and on time every single day. Extremely dependable and professional.",
          name: "– Ravindra Desai, Hotel Keys",
        },
        {
          content:
            "We count on Palhade’s logistics support for fast and reliable deliveries across regions. Their fleet and service quality are top-notch.",
          name: "– Monika Alba, Flipkart",
        },
        {
          content:
            "From employee shuttles to shift-based scheduling, Palhade’s B2B Services has been instrumental in optimizing our daily operations.",
          name: "– Transport Manager, Wipro",
        },
        {
          content:
            "Reliable fleet, responsive support, and seamless integration with our logistics process. Highly recommended for enterprise transport needs.",
          name: "– Logistics Head, Walmart",
        },
      ]
    : [
        {
          content:
            "I use Palhades daily for commuting to college. It's safe, always on time, and the drivers are polite and helpful.",
          name: "– Aarti Joshi, Pune",
        },
        {
          content:
            "Booked a weekend trip using Palhades. The entire experience was smooth and hassle-free. Will definitely use it again!",
          name: "– Kunal Mehta, Nashik",
        },
        {
          content:
            "Palhades gives me peace of mind while my daughter commutes to school. Safety and punctuality are always top notch.",
          name: "– Priya Sharma, Mumbai",
        },
        {
          content:
            "Affordable and dependable rides every single day. I even booked a cab at midnight without any issues.",
          name: "– Rahul Patil, Nagpur",
        },
      ];

  return (
    <div className="flex md:flex-row flex-col w-full mt-16">
      {/* Left Section Heading */}
      <div className="flex flex-col gap-4 md:w-1/3 m-16 md:text-left text-center">
        <motion.p
          variants={SlideRight(0.2, 100)}
          initial="initial"
          whileInView="animate"
          className="text-lg text-purple-700 font-semibold"
        >
          TESTIMONIAL
        </motion.p>
        <motion.p
          variants={SlideRight(0.4, 100)}
          initial="initial"
          whileInView="animate"
          className="text-4xl text-purple-900 md:w-full font-semibold"
        >
          {heading}
        </motion.p>
        <motion.p
          variants={SlideRight(0.6, 100)}
          initial="initial"
          whileInView="animate"
          className="text-lg text-slate-600"
        >
          {subheading}
        </motion.p>
      </div>

      {/* Right Section - Testimonials */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:w-2/3 m-6 md:m-16 gap-6 text-gray-600">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={SlideUp(0.2 + index * 0.2, 100)}
            initial="initial"
            whileInView="animate"
            className="p-6 bg-gray-100 rounded-xl shadow-md"
          >
            <p>{t.content}</p>
            <p className="text-end mt-8 text-purple-600 font-medium">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
