// app/components/Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/THAI_2023-060-scaled.jpg"
        alt="South Africa Safari and Service"
        className="w-full h-[400px] object-cover md:h-[480px]"
      />
      <div className="absolute hidden md:flex inset-0 bg-black bg-opacity-20  items-center justify-center">
        <div className="text-[#F2F2F2] text-center">
          <h1 className="text-[90px] font-bold mb-4" style={{ textShadow: '2px 2px 0 #002147, -2px -2px 0 #EF3340, 2px -2px 0 #008751, -2px 2px 0 #FFD700' }}>
            Know Ghana, Build Ghana!
          </h1>
        </div>
      </div>
      {/* mobile */}
      <div className="absolute flex md:hidden inset-0 bg-black bg-opacity-20  items-center justify-center">
        <div className="text-[#F2F2F2] text-center">
          <h1 className="text-[55px] text-center font-bold mb-4" style={{ textShadow: '2px 2px 0 #002147, -2px -2px 0 #EF3340, 2px -2px 0 #008751, -2px 2px 0 #FFD700' }}>
            Know Ghana, <br/> Build Ghana!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;