'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa'; // For Hamburger and Close Icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header flex justify-between items-center p-4 bg-black text-white relative">
      {/* Logo */}
      <h1 className="logo text-lg font-bold flex items-center">
        <FaCar style={{ color: 'yellow', fontSize: '24px' }} /> KeM Autos
      </h1>

      {/* Hamburger Icon (Only on mobile) */}
      <div className="hamburger-icon md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className="text-white text-3xl" />
        ) : (
          <FaBars className="text-white text-3xl" />
        )}
      </div>

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? 'active' : ''} md:flex md:gap-4 md:items-center md:ml-auto`}>
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
        <Link href="/services" className="nav-link">
          Services
        </Link>
        <Link href="/latest" className="nav-link">
          Latest
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
