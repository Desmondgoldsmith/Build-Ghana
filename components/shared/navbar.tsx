import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerIcon from '../other/hamburger';
import Sidebar from '../other/sidebar';

const Navbar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#F2F2F2] py-2 px-2 shadow-md ${
        isScrolled ? 'fixed top-[40px] left-0 right-0 z-40' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/know-ghana.png"
            width={120}
            height={80}
            alt="Know Ghana, Build Ghana"
          />
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/home"
              className="text-[#002147] hover:text-[#EF3340] font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/our-story"
              className="text-[#002147] hover:text-[#EF3340] font-semibold"
            >
              2023 Adventures
            </Link>
          </li>
          <li>
            <Link
              href="/our-story"
              className="text-[#002147] hover:text-[#EF3340] font-semibold"
            >
              OUR STORY
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-[#002147] hover:text-[#EF3340] font-semibold"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/trips"
              className="text-[#002147] hover:text-[#EF3340] font-semibold"
            >
              TRIPS
            </Link>
          </li>
        </ul>
        <HamburgerIcon onClick={toggleSidebar} />
        {showSidebar && <Sidebar onClose={toggleSidebar} />}
      </div>
    </nav>
  );
};

export default Navbar;