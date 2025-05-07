'use client';

import React from 'react';

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function AnimatedHamburger({ isOpen, onClick }: AnimatedHamburgerProps) {
  return (
    <button
      className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer group"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="flex flex-col justify-between w-6 h-5">
        <span
          className={`h-0.5 rounded-full bg-gray-800 transform transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}
        />
        <span
          className={`h-0.5 rounded-full bg-gray-800 transform transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`h-0.5 rounded-full bg-gray-800 transform transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </div>
    </button>
  );
} 