'use client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [greeting, setGreeting] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning Divyansh');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon Divyansh');
    } else {
      setGreeting('Good Evening Divyansh');
    }
  }, []);

  return (
    <nav className="bg-red-700 text-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo + Desktop Links */}
        <div className="flex items-center gap-6">
          <div className="w-16 bg-white rounded-md p-1">
            <img src="/assets/images/airtel.png" alt="Airtel" />
          </div>
          <div className="hidden md:flex gap-6">
            <a href="/" className="hover:text-gray-300 transition duration-300">Home</a>
            <a href="/about" className="hover:text-gray-300 transition duration-300">My Attendance</a>
            <a href="/services" className="hover:text-gray-300 transition duration-300">Edit Attendance</a>
          </div>
        </div>

        {/* Right Section: Greeting (desktop only) */}
        <div className="hidden md:block">
          {greeting}
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">My Attendance</a>
          <a href="/services" className="hover:text-gray-300">Edit Attendance</a>
          <div>{greeting}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
