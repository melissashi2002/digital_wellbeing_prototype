import React from 'react';
import Link from 'next/link';
import { FiHome, FiClock, FiBarChart2, FiSettings, FiTarget } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg md:top-0 md:bottom-auto z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          <Link href="/" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400">
            <FiHome className="h-6 w-6" />
            <span className="text-xs mt-1">首页</span>
          </Link>
          
          <Link href="/screen-time" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400">
            <FiClock className="h-6 w-6" />
            <span className="text-xs mt-1">屏幕时间</span>
          </Link>
          
          <Link href="/focus" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400">
            <FiTarget className="h-6 w-6" />
            <span className="text-xs mt-1">专注</span>
          </Link>
          
          <Link href="/statistics" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400">
            <FiBarChart2 className="h-6 w-6" />
            <span className="text-xs mt-1">统计</span>
          </Link>
          
          <Link href="/settings" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400">
            <FiSettings className="h-6 w-6" />
            <span className="text-xs mt-1">设置</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 