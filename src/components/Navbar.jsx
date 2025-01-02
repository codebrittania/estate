import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <a href="#Header">
          <img
            className="opacity-100 hover:opacity-80 cursor-pointer transition-opacity duration-200"
            src={assets.logo}
            alt=""
          />
        </a>
        <ul className="hidden md:flex gap-7 text-white">
          <a
            href="#Header"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:opacity-70 transition-opacity duration-200"
          >
            Home
          </a>
          <a
            href="#About"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:opacity-70 transition-all duration-200"
          >
            About
          </a>
          <a
            href="#Projects"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:opacity-70 transition-all duration-200"
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:opacity-70 transition-all duration-200"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-xl hover:rounded-lg hover:opacity-85 transition-all duration-200">
          Sign Up
        </button>
        {/* Кнопка открытия мобильного меню */}
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
          alt="Open Menu"
        />
      </div>
      {/* -----mobile-menu------ */}
      <div
        className={`fixed inset-0 bg-white flex justify-center items-center z-20 transition-all duration-300 ${
          showMobileMenu ? "opacity-100  visible" : "opacity-0  invisible"
        }`}
      >
        {/* Кнопка закрытия мобильного меню */}
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => setShowMobileMenu(false)}
        >
          <img
            src={assets.cross_icon}
            alt="Close Menu"
            className="w-6 transition-opacity duration-300"
          />
        </div>
        <ul className="flex flex-col items-center gap-4 text-lg">
          <a
            href="#Header"
            className="px-4 py-2 rounded-full inline-block hover:opacity-80 transition-opacity"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="px-4 py-2 rounded-full inline-block hover:opacity-80 transition-opacity"
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </a>
          <a
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block hover:opacity-80 transition-opacity"
            onClick={() => setShowMobileMenu(false)}
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block hover:opacity-80 transition-opacity"
            onClick={() => setShowMobileMenu(false)}
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
