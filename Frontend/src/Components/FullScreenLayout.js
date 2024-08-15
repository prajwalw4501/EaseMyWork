import React from "react";

const FullScreenLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-400 to-purple-500">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default FullScreenLayout;
