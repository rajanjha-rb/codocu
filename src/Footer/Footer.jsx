import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);

    // Auto-hide message after 4 seconds
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-white/10">
        {/* Brand & Tagline */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white tracking-tight">
            Codocu<span className="text-red-500">.</span>
          </Link>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            We craft innovative digital solutions with purpose and precision —
            pushing brands forward in the digital age.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={16} /> codocuofficial@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} /> Kathmandu, Nepal
            </li>
            <li>Mon - Fri: 10AM - 6PM</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-3">
            Stay updated with Codocu insights, launches & more.
          </p>

          <form className="flex items-center" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-white text-black px-4 py-2 rounded-l-md text-sm outline-none w-full"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-r-md text-sm"
            >
              Subscribe
            </button>
          </form>

          {/* Success message */}
          {subscribed && (
            <p className="text-green-400 text-sm mt-2">
              ✅ Successfully subscribed!
            </p>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Codocu. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61577022802153"
            className="hover:text-red-500 transition"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/codocu_official/"
            className="hover:text-red-500 transition"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://x.com/codocu176025?t=LLldwY31GJV115AsQU3NTA&s=09"
            className="hover:text-red-500 transition"
          >
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-red-500 transition">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
