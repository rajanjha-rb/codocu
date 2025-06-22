import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Custom Web Development",
    description:
      "Tailored websites built with modern technologies that scale with your business.",
    moreInfo:
      "We build scalable, SEO-optimized, and responsive websites using the latest tools like React, Tailwind, and Appwrite.",
    icon: (
      <svg
        className="w-14 h-14 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Intuitive and beautiful user interfaces to enhance user engagement and satisfaction.",
    moreInfo:
      "We craft smooth user journeys, wireframes, and visually pleasing UI based on UX research and real user feedback.",
    icon: (
      <svg
        className="w-14 h-14 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "API Integration",
    description:
      "Seamlessly connect third-party APIs to your app for enhanced functionality.",
    moreInfo:
      "We integrate payment gateways, social logins, analytics, and external services with strong error handling.",
    icon: (
      <svg
        className="w-14 h-14 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v0" />
      </svg>
    ),
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -3, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconHoverVariants = {
  rest: { scale: 1, rotate: 0, filter: "drop-shadow(0 0 0 transparent)" },
  hover: {
    scale: 1.2,
    rotate: 15,
    filter: "drop-shadow(0 5px 8px rgba(239, 68, 68, 0.7))",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section
      aria-labelledby="services-heading"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background accent circles */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-red-600/40 via-pink-500/30 to-purple-700/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-36 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-pink-600/30 via-red-500/20 to-yellow-400/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            id="services-heading"
            className="text-5xl font-extrabold tracking-tight mb-4 uppercase drop-shadow-lg"
            style={{ letterSpacing: "0.12em" }}
          >
            Our Services
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl">
            Empowering your digital transformation with cutting-edge solutions
            crafted to scale.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {servicesData.map(({ id, title, description, moreInfo, icon }) => {
            const [showMore, setShowMore] = useState(false);

            return (
              <motion.article
                key={id}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-100px" }}
                className="bg-gradient-to-tr from-gray-800/70 to-black/70 backdrop-blur-md border border-gray-700 rounded-3xl p-8 shadow-lg flex flex-col"
                role="region"
                aria-labelledby={`service-title-${id}`}
                tabIndex={0}
              >
                <motion.div
                  variants={iconHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="mb-6"
                >
                  {icon}
                </motion.div>

                <h3
                  id={`service-title-${id}`}
                  className="text-2xl font-semibold mb-3 text-red-500 tracking-wide"
                >
                  {title}
                </h3>

                <p className="text-gray-300 flex-grow leading-relaxed mb-4">
                  {description}
                </p>

                {showMore && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-gray-400 mb-6"
                  >
                    {moreInfo}
                  </motion.p>
                )}

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#EF4444" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMore(!showMore)}
                  className="mt-auto self-start bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label={`Learn more about ${title}`}
                >
                  {showMore ? "Show Less" : "Learn More"}
                </motion.button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
