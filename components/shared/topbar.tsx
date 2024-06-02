import React, { useState, useEffect } from 'react';

const TopBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#002147] text-white py-2 px-4 md:px-[100px] text-sm flex justify-between items-center ${
        isScrolled ? 'fixed top-0 left-0 right-0 z-30' : ''
      }`}
    >
      <div className="flex items-center">
        <svg
          className="mr-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 12.8C16 13.92 15.12 14.8 14 14.8C13.52 14.8 13.04 14.64 12.64 14.36C11.36 13.52 9.28 12.48 8 12.48C6.72 12.48 4.64 13.52 3.36 14.36C2.96 14.64 2.48 14.8 2 14.8C0.88 14.8 0 13.92 0 12.8C0 11.28 1.68 9.68 4.08 8.56C5.48 7.92 7.12 7.6 8 7.6C8.88 7.6 10.52 7.92 11.92 8.56C14.32 9.68 16 11.28 16 12.8Z"
            fill="white"
          />
        </svg>
        <span>CALL (828) 435.3971</span>
      </div>
      <div className="flex items-center">
        <a href="#" className="mr-2 hover:underline hidden md:inline">
          CONTACT
        </a>
        <a href="#" className="mr-2 hover:underline hidden md:inline">
          BLOG
        </a>
        <button className="bg-[#EF3340] text-white py-1 px-4 rounded-md font-semibold">
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

export default TopBar;