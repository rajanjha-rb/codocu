import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Contact = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  // Animate form container on scroll with repeated trigger
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: false, margin: "-100px" });

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 py-24 px-6"
    >
      <motion.div
        ref={formRef}
        variants={containerVariants}
        initial="hidden"
        animate={formInView ? "show" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <h2
          id="contact-heading"
          className="text-4xl font-extrabold mb-6 text-white drop-shadow-md"
          style={{ letterSpacing: "0.1em" }}
        >
          Get In Touch
        </h2>
        <p className="text-gray-300 mb-12 text-lg text-center">
          Have questions or want to start a project? Send us a message and we’ll
          get back to you shortly.
        </p>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-center text-green-400 font-semibold"
            role="alert"
          >
            Thanks for reaching out! We will respond soon.
          </motion.div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          <motion.div variants={inputVariants}>
            <label
              htmlFor="name"
              className="block mb-2 text-gray-300 font-medium"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-lg bg-gray-900 border ${
                errors.name ? "border-red-500" : "border-gray-700"
              } px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition`}
              placeholder="Your full name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </motion.div>

          <motion.div variants={inputVariants}>
            <label
              htmlFor="email"
              className="block mb-2 text-gray-300 font-medium"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg bg-gray-900 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition`}
              placeholder="you@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </motion.div>

          <motion.div variants={inputVariants}>
            <label
              htmlFor="message"
              className="block mb-2 text-gray-300 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`w-full rounded-lg bg-gray-900 border ${
                errors.message ? "border-red-500" : "border-gray-700"
              } px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-red-600 transition`}
              placeholder="Write your message here..."
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500">
                {errors.message}
              </p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(220, 38, 38, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-600 focus:ring-offset-2 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition w-full md:w-auto"
            aria-label="Send message"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
