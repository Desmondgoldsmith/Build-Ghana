import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-end md:hidden">
      <div className="bg-white w-3/4 h-full overflow-y-auto relative">
        <div className="p-4">
          <div className="absolute top-4 right-4">
            <CloseIcon onClick={onClose} />
          </div>
          <ul className="mt-8">
            <li className="mb-4">
              <Link href="/" className="text-[#002147] hover:text-[#EF3340] font-semibold" onClick={onClose}>
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/adventures" className="text-[#002147] hover:text-[#EF3340] font-semibold" onClick={onClose}>
                2023 Adventures
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/adventures" className="text-[#002147] hover:text-[#EF3340] font-semibold" onClick={onClose}>
                Our Story
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/adventures" className="text-[#002147] hover:text-[#EF3340] font-semibold" onClick={onClose}>
                Contact Us
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/adventures" className="text-[#002147] hover:text-[#EF3340] font-semibold" onClick={onClose}>
                Trips
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      className="w-6 h-6 cursor-pointer"
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export default Sidebar;