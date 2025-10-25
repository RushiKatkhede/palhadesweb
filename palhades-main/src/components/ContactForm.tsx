import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder: handle form submission logic here
    console.log("Form Data:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div
      id="contact" // ✅ Enables scroll to section via #contact
      className="w-full max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md mt-12"
    >
      <h2 className="text-3xl font-bold mb-6 text-theme text-center">Contact Us</h2>

      {submitted && (
        <div className="mb-4 text-green-600 font-medium text-center">
          Thank you! We’ll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-theme outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-theme outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-theme outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-theme outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-theme text-white font-semibold rounded-md hover:bg-header transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
