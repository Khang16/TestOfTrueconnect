"use client";

import { useState, useEffect } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 50;

      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);

        if (shouldBeScrolled) {
          gsap.to(".header-container", {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(".header-text", {
            color: "#000000",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(".header-logo", {
            color: "#000000",
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(".header-container", {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(5px)",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(".header-text", {
            color: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(".header-logo", {
            color: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navItems = [
    { name: "HOME", active: true },
    { name: "VIDEO", active: false },
    { name: "DISCOGRAPHY", active: false },
    { name: "TOUR", active: false },
    { name: "ABOUT", active: false },
    { name: "MERCH", active: false },
    { name: "PHOTOS", active: false },
    { name: "NEWS", active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all ">
      <div className="header-container  transition-all ">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="nav-item">
              <div
                className="header-logo text-[4rem] md:text-2xl font-bold italic text-white transition-colors duration-300"
                style={{ fontFamily: "Harley Style" }}
              >
                H
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.name === "HOME" ? "/" : `#`}
                  className={`nav-item header-text text-sm font-medium tracking-wider transition-colors duration-300 hover:text-orange-400 ${
                    item.active
                      ? "text-orange-400 border-b-2 border-orange-400 pb-1"
                      : isScrolled
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-item header-text transition-colors duration-300 hover:text-orange-400 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-item header-text transition-colors duration-300 hover:text-orange-400 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-item header-text transition-colors duration-300 hover:text-orange-400 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <div
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                ></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={
                      item.name === "HOME" ? "/" : `/${item.name.toLowerCase()}`
                    }
                    className={`text-sm font-medium tracking-wider transition-colors duration-300 hover:text-orange-400 ${
                      item.active
                        ? "text-orange-400"
                        : isScrolled
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 hover:text-orange-400 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 hover:text-orange-400 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
