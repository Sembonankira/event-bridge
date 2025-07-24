import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Event Bridge</h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved | Developed by SJ.
          </p>
        </div>

        {/* Middle Section - Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="https://wa.me/250783888272"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/eventbridge250"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sembonankira-janvier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@EventBridge-tv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Section - Contact or Tagline */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm text-gray-400">
            Email: eventbridge250@gmail.com
          </p>
          <p className="text-sm text-gray-400">
            Phone: +250 783 888 272
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;