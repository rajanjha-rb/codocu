import React, { useState } from "react";
import { motion } from "framer-motion";

const demoSitesData = [
  {
    id: 1,
    title: "Watch Store",
    description:
      "Elegant and luxurious e-commerce template for premium watches.",
    src: "/watch.png",
    demoLink: "https://watch-store-demo.com",
  },
  {
    id: 2,
    title: "Clothing Hub",
    description:
      "Trendy clothing store template for fashion brands and boutiques.",
    src: "/clothing.png",
    demoLink: "https://clothing-hub-demo.com",
  },
  {
    id: 3,
    title: "Shoe Spot",
    description:
      "Modern e-commerce design tailored for sports and casual footwear.",
    src: "/shoes.png",
    demoLink: "https://shoe-spot-demo.com",
  },
  {
    id: 4,
    title: "Accessories Mart",
    description:
      "Stylish template focused on accessories like bags, hats, and jewelry.",
    src: "/accessories.png",
    demoLink: "https://accessories-mart-demo.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0 0 12px rgba(239, 68, 68, 0.7)",
  transition: { duration: 0.3, ease: "easeOut" },
};

const DemoSites = () => {
  const [showAll, setShowAll] = useState(false);
  const demosToShow = showAll ? demoSitesData : demoSitesData.slice(0, 3);

  return (
    <section
      aria-labelledby="demos-heading"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="absolute -top-36 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-red-600/40 via-pink-500/30 to-purple-700/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-pink-600/30 via-red-500/20 to-yellow-400/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            id="demos-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-4 uppercase drop-shadow-lg"
            style={{ letterSpacing: "0.12em" }}
          >
            E-Commerce Demos
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl">
            Explore stylish and professional e-commerce website templates built
            for different product categories.
          </p>
        </div>

        <div
          id="demos-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {demosToShow.map(({ id, title, description, src, demoLink }) => (
            <motion.article
              key={id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg overflow-hidden flex flex-col"
              role="region"
              aria-labelledby={`demo-title-${id}`}
              tabIndex={0}
            >
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-t-3xl"
                aria-label={`View demo site: ${title}`}
              >
                <motion.img
                  src={src}
                  alt={`Screenshot of ${title}`}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                />
              </a>

              <div className="p-6 flex flex-col flex-grow">
                <h3
                  id={`demo-title-${id}`}
                  className="text-xl font-semibold text-red-500 mb-2"
                >
                  {title}
                </h3>
                <p className="text-gray-300 flex-grow mb-6 leading-relaxed">
                  {description}
                </p>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
                  aria-label={`Visit demo site for ${title}`}
                >
                  View Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-red-700 transition focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
            aria-expanded={showAll}
            aria-controls="demos-grid"
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default DemoSites;
