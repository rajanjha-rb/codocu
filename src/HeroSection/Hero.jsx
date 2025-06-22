import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, ease: "easeOut", duration: 0.8 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -12, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const buttonHover = {
  scale: 1.06,
  boxShadow: "0 0 15px rgba(239, 68, 68, 0.6)",
  transition: { duration: 0.3, ease: "easeOut" },
};

const Hero = () => {
  const [showLogo, setShowLogo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section
      aria-label="Hero section introducing Codocu"
      className="relative min-h-screen pt-[90px] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 md:px-16 pb-20 overflow-hidden"
    >
      {/* Background Gradient Circles */}
      <div
        aria-hidden="true"
        className="absolute -top-36 -left-36 w-80 h-80 rounded-full bg-gradient-to-tr from-red-600/30 via-pink-500/20 to-purple-700/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-36 w-96 h-96 rounded-full bg-gradient-to-br from-pink-600/20 via-red-500/10 to-yellow-400/5 blur-3xl pointer-events-none"
      />

      {/* Text Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="z-10 max-w-xl flex flex-col items-start md:items-start text-center md:text-left"
      >
        <motion.h1
          variants={childVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-3"
        >
          Build Smart, Build Fast with{" "}
          <span className="relative inline-block text-red-500 font-extrabold">
            <span className="absolute inset-0 rounded-md bg-red-700/20 blur-[12px] -z-10" />
            <Typewriter
              words={["Codocu"]}
              cursor
              cursorBlinking
              typeSpeed={90}
              delaySpeed={700}
              onDone={() => setShowLogo(true)}
            />
          </span>
        </motion.h1>

        {/* Logo appears after typing */}
        {showLogo && (
          <motion.img
            src="/logo-square.png"
            alt="Codocu Logo"
            role="img"
            aria-hidden="false"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="w-12 h-12 mt-1 drop-shadow-lg"
            loading="lazy"
          />
        )}

        <motion.p
          variants={childVariants}
          className="text-gray-300 mt-6 mb-10 text-base sm:text-lg max-w-md"
        >
          From scalable apps to cutting-edge web solutions — we transform your
          ideas into reality.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row gap-5 w-full max-w-md"
        >
          <motion.button
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/get-started")}
            className="flex-1 bg-red-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:bg-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Get started with Codocu"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/services")}
            className="flex-1 border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-black transition focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2"
            aria-label="View Codocu services"
          >
            View Services
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Hero Illustration */}
      <motion.div
        variants={childVariants}
        initial="hidden"
        animate="show"
        className="mt-14 md:mt-0 md:ml-16 flex justify-center w-full max-w-lg"
        aria-hidden="true"
      >
        <motion.img
          src="/hero.png"
          alt="Hero illustration"
          loading="lazy"
          className="rounded-2xl shadow-2xl object-cover w-full max-w-lg"
          whileHover={{ scale: 1.04, rotate: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
