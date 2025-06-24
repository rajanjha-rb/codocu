import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FaFacebookMessenger, FaInstagram, FaWhatsapp } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, ease: "easeOut", duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const socialMedia = [
  {
    name: "Messenger",
    href: "https://www.facebook.com/profile.php?id=61577022802153",
    icon: <FaFacebookMessenger />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/codocu_official/",
    icon: <FaInstagram />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9779762717552",
    icon: <FaWhatsapp />,
  },
];

const GetStarted = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    "Custom-designed e-commerce website tailored to your brand",
    "Mobile-friendly and responsive layout for all devices",
    "Secure payment gateway integration",
    "Product catalog with filtering and search capabilities",
    "Shopping cart and smooth checkout process",
    "Order management dashboard",
    "Customer account creation and management",
    "SEO-friendly structure to boost your search rankings",
    "Analytics and reporting tools",
    "Social media integration and sharing options",
    "Fast-loading pages with optimized images",
    "Ongoing support and maintenance",
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 px-4 overflow-x-hidden"
      aria-labelledby="features-heading"
    >
      {/* Blurred Background Effects */}
      <div className="absolute -top-36 -left-36 w-96 h-96 rounded-full bg-gradient-to-tr from-red-600/40 via-pink-500/30 to-purple-700/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -right-36 w-96 h-96 rounded-full bg-gradient-to-br from-pink-600/30 via-red-500/20 to-yellow-400/10 blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h2
          id="features-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-red-500 tracking-wide drop-shadow-md text-center"
        >
          What’s Included in Your E-Commerce Website
        </h2>

        <ul className="mb-16 space-y-5 text-gray-300 text-base sm:text-lg">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              className="flex items-start"
            >
              <FaCheckCircle className="text-red-500 mr-3 mt-1 text-lg sm:text-xl" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white drop-shadow-md text-center">
            Connect with Us
          </h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-3xl text-red-500">
            {socialMedia.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-red-400 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
