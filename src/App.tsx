import React from 'react';
import { Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Header with icon */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-lg">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            React App
          </h1>
        </div>

        {/* Main content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-white/20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            שלום עולם
          </h2>
          <p className="text-xl text-gray-600 font-medium mb-8">
            Hello World
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-150"></div>
          </div>

          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            ברוכים הבאים לאפליקציית React החדשה שלכם. האפליקציה מוכנה לפיתוח!
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Welcome to your new React application. Ready for development!
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm">
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default App;