import React from "react";
import { TbTruckDelivery, TbShieldCheckered } from "react-icons/tb";
import { RiCustomerServiceLine, RiSecurePaymentLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import Logo from './Logo';

const Footer = () => {
  const FooterLink = ({ href = "#", children }) => (
    <a
      href={href}
      className="text-gray-400 hover:text-gray-100 transition-colors duration-300 text-sm"
    >
      {children}
    </a>
  );

  const SectionTitle = ({ children }) => (
    <h5 className="text-base font-medium text-gray-100 mb-5 uppercase tracking-wider">
      {children}
    </h5>
  );

  return (
    <footer className="bg-secondary text-gray-400">
      {/* Features Section */}
      <div className="container mx-auto px-6 py-12 border-b border-gray-700">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <li className="flex items-center gap-4">
            <TbTruckDelivery className="text-yellow-500 text-4xl" />
            <div>
              <p className="font-semibold text-gray-200 text-lg">
                Free Delivery
              </p>
              <p className="text-sm text-gray-400">Across India</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <RiCustomerServiceLine className="text-yellow-500 text-4xl" />
            <div>
              <p className="font-semibold text-gray-200 text-lg">
                Customer Support
              </p>
              <p className="text-sm text-gray-400">Dedicated Help Line</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <RiSecurePaymentLine className="text-yellow-500 text-4xl" />
            <div>
              <p className="font-semibold text-gray-200 text-lg">
                Secure Payments
              </p>
              <p className="text-sm text-gray-400">100% Secure Transaction</p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <TbShieldCheckered className="text-yellow-500 text-4xl" />
            <div>
              <p className="font-semibold text-gray-200 text-lg">
                Warranty Assurance
              </p>
              <p className="text-sm text-gray-400">Guaranteed Quality</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h5 className="text-xl font-bold text-gray-100 mb-4">
              Your Logo Here
            </h5>
            <p className="text-sm mb-6 text-gray-300">
              Your one-stop shop for the latest computer hardware, components,
              and accessories at the best prices.
            </p>
            <p className="text-sm text-gray-500">
              123 Tech Street, <br />
              Innovation City, IN 46204
            </p>
          </div>

          <div>
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="space-y-3">
              {" "}
              <li>
                <FooterLink href="/shop">Shop All</FooterLink>
              </li>
              <li>
                <FooterLink href="/categories/processors">
                  Processors
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/categories/graphic-cards">
                  Graphic Cards
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/build-pc">Build Your PC</FooterLink>
              </li>
              <li>
                <FooterLink href="/offers">Special Offers</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <SectionTitle>Customer Service</SectionTitle>
            <ul className="space-y-3">
              {" "}
              <li>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/faq">FAQ</FooterLink>
              </li>
              <li>
                <FooterLink href="/shipping">Shipping Info</FooterLink>
              </li>
              <li>
                <FooterLink href="/returns">Return Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/track-order">Track Order</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <SectionTitle>Connect</SectionTitle>
            <p className="text-sm mb-4 text-gray-300">
              <a
                href="mailto:support@citycomputers.in"
                className="hover:text-gray-100"
              >
                support@citycomputers.in
              </a>{" "}
              <br />
              <a href="tel:+911234567890" className="hover:text-gray-100">
                +91 12345 67890
              </a>
            </p>
            <div className="flex space-x-4 mb-6">
              {" "}
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <FaYoutube size={18} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-200 mb-3 text-sm font-medium">
                Stay Updated
              </p>{" "}
              <input
                type="email"
                placeholder="Your email address"
                className=" border border-slate-700 text-gray-300 px-4 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-1 focus:ring-none focus:border-none placeholder-gray-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-gray-900 font-semibold px-4 py-2 rounded-md mt-2 w-full text-sm transition-colors duration-300">
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border-t border-gray-700 py-6">
        <div className="container mx-auto px-6 text-center text-xs text-gray-500 sm:flex sm:justify-between sm:items-center">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} City Computers. All Rights
            Reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4">
            <div className="flex space-x-4 order-2 sm:order-1">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </div>
          </div>
          <div className="order-1 sm:order-2">
            <img
              src="/footer/payment-method.svg"
              alt="Accepted Payment Methods"
              className="h-4 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
