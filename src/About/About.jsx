import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0.3, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0.3, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const [showMore, setShowMore] = useState(false); // 🔁 State to toggle extra content

  return (
    <section
      aria-labelledby="about-heading"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-red-600/30 via-pink-500/20 to-purple-700/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-36 -right-36 w-96 h-96 rounded-full bg-gradient-to-br from-pink-600/20 via-red-500/10 to-yellow-400/5 blur-3xl pointer-events-none"
      />

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <motion.img
          variants={childVariants}
          src="/codocu.png"
          alt="About Codocu"
          loading="lazy"
          width={600}
          height={400}
          className="rounded-3xl shadow-2xl object-cover w-full max-w-lg mx-auto bg-gray-800"
        />

        <motion.div
          variants={childVariants}
          className="max-w-xl mx-auto md:mx-0"
        >
          <h2
            id="about-heading"
            className="text-4xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
          >
            About <span className="text-red-500">Codocu</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            At <strong>Codocu</strong>, we believe in transforming your ideas
            into powerful, scalable web solutions that push boundaries and
            deliver results.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            Our team combines the latest technologies with creative thinking to
            build applications that not only look stunning but perform
            flawlessly.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            Whether you’re a startup or an established business, we’re here to
            help you innovate and grow.
          </p>

          {/* ✅ Extra content conditionally shown */}
          {showMore && (
            <motion.p
              className="text-gray-300 mb-10 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              With a strong focus on user experience and performance, Codocu is
              your partner for building modern, fast, and reliable digital
              products that scale with your needs.
            </motion.p>
          )}

          {/* ✅ Button to toggle text */}
          <motion.button
            onClick={() => setShowMore((prev) => !prev)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:bg-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
          >
            {showMore ? "Show Less" : "Learn More"}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
