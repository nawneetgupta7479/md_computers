import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineHeart, HiAtSymbol } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { IoLogInOutline, IoMenuOutline, IoCloseOutline, IoLocationOutline } from "react-icons/io5";
import { BiGitCompare } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Import Logo component
import Logo from "./Home/Logo";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showHeaderInfo, setShowHeaderInfo] = useState(true);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        if (window.scrollY > 60) {
          setShowHeaderInfo(false);
        } else {
          setShowHeaderInfo(true);
        }
      } else {
        setIsScrolled(false);
        setShowHeaderInfo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top header with contact information */}
      <div className="bg-yellow-500 text-gray-900">
        <div className="container mx-auto flex justify-between items-center px-4 py-1.5">
          {/* Left Side with Email and Phone */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
              <HiAtSymbol className="text-base md:text-lg" />
              <span className="font-medium text-xs md:text-sm truncate max-w-[100px] md:max-w-none">email@business.com</span>
            </div>
            <div className="flex items-center gap-1">
              <FiPhoneCall className="text-base md:text-lg" />
              <span className="font-medium text-xs md:text-sm">123-456-7890</span>
            </div>
          </div>
          
          {/* Right Side with Location */}
          <div className="flex items-center gap-1">
            <IoLocationOutline className="text-base md:text-lg" />
            <span className="font-medium text-xs md:text-sm">Sindri Road, Dhanbad</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar - separate from header */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md" : "bg-gray-900"
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-yellow-500 font-medium transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-800 dark:text-white hover:text-yellow-500 font-medium transition-colors">Shop</Link>
            <Link to="/categories" className="text-gray-800 dark:text-white hover:text-yellow-500 font-medium transition-colors">Categories</Link>
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-yellow-500 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-yellow-500 font-medium transition-colors">Contact</Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Search Icon/Toggle */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                searchOpen ? "text-yellow-500" : "text-gray-700 dark:text-gray-300"
              }`}
              aria-label="Search"
            >
              <IoMdSearch className="text-xl" />
            </button>

            {/* Account */}
            <Link 
              to="/login" 
              className="hidden sm:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Account"
            >
              <IoLogInOutline className="text-xl" />
            </Link>

            {/* Wishlist */}
            <Link 
              to="/wishlist" 
              className="hidden sm:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Wishlist"
            >
              <HiOutlineHeart className="text-xl" />
            </Link>

            {/* Compare */}
            <Link 
              to="/compare" 
              className="hidden sm:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Compare"
            >
              <BiGitCompare className="text-xl" />
            </Link>

            {/* Cart with Item Count */}
            <Link 
              to="/cart" 
              className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Cart"
            >
              <HiOutlineShoppingBag className="text-xl" />
              <span className="absolute top-0 right-0 bg-yellow-500 text-xs text-black font-medium rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <IoCloseOutline className="text-2xl" /> : <IoMenuOutline className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Expandable */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <div className="container mx-auto p-4">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full py-2 pl-4 pr-10 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    autoFocus
                  />
                  <IoMdSearch className="absolute top-3 right-3 text-gray-500" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-900"
          >
            <div className="h-full flex flex-col">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <Logo />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  aria-label="Close menu"
                >
                  <IoCloseOutline className="text-3xl" />
                </button>
              </div>
              
              {/* Main menu content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Contact info block */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <HiAtSymbol className="text-lg text-yellow-500" />
                    <span className="text-sm">email@business.com</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <FiPhoneCall className="text-lg text-yellow-500" />
                    <span className="text-sm">123-456-7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoLocationOutline className="text-lg text-yellow-500" />
                    <span className="text-sm">Sindri Road, Dhanbad</span>
                  </div>
                </div>
                
                {/* Navigation links */}
                <nav className="flex flex-col space-y-6">
                  <Link 
                    to="/" 
                    className="text-xl font-medium text-gray-800 dark:text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/shop" 
                    className="text-xl font-medium text-gray-800 dark:text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link 
                    to="/categories" 
                    className="text-xl font-medium text-gray-800 dark:text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Categories
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-xl font-medium text-gray-800 dark:text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-xl font-medium text-gray-800 dark:text-white hover:text-yellow-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
              
              {/* Footer with login/register buttons */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-4">
                  <Link 
                    to="/login" 
                    className="flex-1 py-3 bg-yellow-500 text-black font-medium rounded-md text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
