import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {children}
    </div>
  );
};

export default Layout;
