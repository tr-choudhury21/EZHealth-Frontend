import React from "react";
import { FaXTwitter , FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdPhone, MdMail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            We are committed to providing world-class healthcare services to
            our patients. With a team of experienced professionals, we strive
            to offer the best care tailored to your needs.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-200 hover:text-gray-50 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-200 hover:text-gray-50 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="text-gray-200 hover:text-gray-50 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-200 hover:text-gray-50 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <span className="material-icons"><MdLocationOn/></span>
              <span>123 Health St, Wellness City</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="material-icons"><MdPhone/></span>
              <span>+91 1234 567 890</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="material-icons"><MdMail/></span>
              <span>info@hospital.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-200 hover:text-gray-50 transition"
              aria-label="Facebook"
            >
              <FaFacebook/>
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-gray-50 transition"
              aria-label="Twitter"
            >
              <FaXTwitter/>
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-gray-50 transition"
              aria-label="Instagram"
            >
              <FaInstagram/>
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-gray-50 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin/>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-300 text-sm text-center md:text-right">
            &copy; 2024 EZHealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
