import React from "react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="relative">
            {/* Outer Circle */}
            <div className="w-16 h-16 border-4 border-blue-300 rounded-full border-t-blue-500 animate-spin"></div>

            {/* Inner Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
        </div>
        </div>
    );
};

export default Loader;
