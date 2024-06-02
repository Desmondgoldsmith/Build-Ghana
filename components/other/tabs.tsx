import React, { useState, useEffect } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const navbarHeight = 176; 
    setIsScrolled(scrollPosition > navbarHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`flex justify-around border-b ${
          isScrolled ? 'fixed top-[176px] left-0 right-0 z-10 bg-white' : ''
        }`}
        style={{ top: isScrolled ? '176px' : 'auto' }}
      >
        <button
          className={`py-2 px-4 ${
            activeTab === 'overview'
              ? 'border-b-4 border-[#EF3340] text-[#002147] font-semibold'
              : 'text-gray-500 hover:text-[#002147] '
          }`}
          onClick={() => handleTabClick('overview')}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 'dates'
              ? 'border-b-4 border-[#EF3340] text-[#002147] font-semibold '
              : 'text-gray-500 hover:text-[#002147] '
          }`}
          onClick={() => handleTabClick('dates')}
        >
          Dates & Prices
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 'activities'
              ? 'border-b-4 border-[#EF3340] text-[#002147] font-semibold '
              : 'text-gray-500 hover:text-[#002147] '
          }`}
          onClick={() => handleTabClick('activities')}
        >
          Activities
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 'gallery'
              ? 'border-b-4 border-[#EF3340] text-[#002147] font-semibold'
              : 'text-gray-500 hover:text-[#002147] '
          }`}
          onClick={() => handleTabClick('gallery')}
        >
          Gallery
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'overview' && (
          <div className = "container mx-auto mt-4 items-center">
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            <h2>The overview contents sit here!</h2>
            {/* ... */}
          </div>
        )}
        {activeTab === 'dates' && (
          <div>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
            <h2>The date contents sit here!</h2>
          </div>
        )}
        {activeTab === 'activities' && (
          <div>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
            <h2>The Activities contents sit here!</h2>
          </div>
        )}
        {activeTab === 'gallery' && (
          <div>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
            <h2>The Gallery contents sit here!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;