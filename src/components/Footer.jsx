import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:md-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem
            fuga consectetur adipisci temporibus possimus, non amet iusto.
            Architecto, a?
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a className="hover:text-white duration-200" href="#Header">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-200" href="#About">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-200" href="#Contact">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-200" href="/">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto" type="email" placeholder="Enter your email" />
            <button className="py-2 px-4 rounded bg-blue-500 text-white hover:opacity-80 duration-200">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 © GreatStack. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;