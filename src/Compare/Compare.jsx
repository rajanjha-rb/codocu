import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Compare = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const competitorRef = useRef(null);
  const codocuRef = useRef(null);

  // removed once: true so animation repeats on scroll
  const competitorInView = useInView(competitorRef, {
    once: false,
    margin: "-100px",
  });
  const codocuInView = useInView(codocuRef, { once: false, margin: "-100px" });

  return (
    <section
      aria-labelledby="compare-heading"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          id="compare-heading"
          className="text-4xl font-extrabold tracking-wide mb-4 drop-shadow-md"
          style={{ letterSpacing: "0.1em" }}
        >
          Compare Websites
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          See how a typical website stacks up against a Codocu-built
          masterpiece.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Competitor Card */}
        <motion.div
          ref={competitorRef}
          variants={cardVariants}
          initial="hidden"
          animate={competitorInView ? "show" : "hidden"}
          className="bg-gray-900/70 backdrop-blur-md rounded-3xl p-10 shadow-lg flex flex-col border border-gray-700"
          aria-label="Competitor website overview"
        >
          <h3 className="text-2xl font-semibold mb-6 border-b border-blue-400 pb-2 text-blue-300">
            Typical Competitor Site
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-300 flex-grow">
            <li>Outdated design, lacking modern UI/UX trends</li>
            <li>Slow load times due to heavy assets and poor optimization</li>
            <li>Limited responsiveness on tablets and mobile devices</li>
            <li>Basic functionality with little scalability</li>
            <li>Minimal customer support and documentation</li>
          </ul>
          <p className="mt-6 text-sm text-gray-400 italic">
            A common website that meets minimal expectations but doesn’t impress
            users or grow with business needs.
          </p>
        </motion.div>

        {/* Codocu Card */}
        <motion.div
          ref={codocuRef}
          variants={cardVariants}
          initial="hidden"
          animate={codocuInView ? "show" : "hidden"}
          transition={{ delay: 0.15 }}
          className="bg-gray-900/90 rounded-3xl p-10 shadow-2xl flex flex-col border border-teal-400"
          aria-label="Codocu website advantages"
        >
          <h3 className="text-2xl font-semibold mb-6 border-b border-teal-400 pb-2 text-teal-300">
            Codocu Built Website
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-100 flex-grow font-semibold">
            <li>Modern, eye-catching design tailored to your brand</li>
            <li>Optimized for lightning-fast performance and SEO</li>
            <li>Fully responsive and mobile-first for all devices</li>
            <li>Scalable architecture to grow with your business</li>
            <li>Comprehensive support with detailed documentation</li>
          </ul>
          <p className="mt-6 text-sm text-gray-400 italic">
            A cutting-edge solution designed to impress users, boost
            conversions, and scale effortlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Compare;
