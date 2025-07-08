import React from "react";
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-28 px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center md:justify-items-stretch">
        <div className="text-center md:text-left">
          <h3
            className="text-lg font-bold mb-4"
            
          >
            STAY TUNED
          </h3>
          <p className="text-gray-400">herion@wolfthemes.com</p>
          <p className="text-gray-400">(485) 209-5175</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-spotify"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          <h2
            className="text-6xl font-light text-white mb-4"
            style={{ fontFamily: "Harley Style" }}
          >
            Herion
          </h2>
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul>
            <li>
              <Link to="/my-account" className="text-gray-400 hover:text-white">
                My Account
              </Link>
            </li>
            <li>
              <Link to="/shipping-returns" className="text-gray-400 hover:text-white">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
        © 2025 WolfThemes Records Privacy Policy Terms of Use Press Careers
        Contact Us Cookie Policy
      </div>
    </footer>
  );
};

export default Footer;
