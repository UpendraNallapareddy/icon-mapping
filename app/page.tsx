"use client";

import { iconMapping } from "../lib/icon-mapping";
import * as MuiIcons from "@mui/icons-material";
import * as LucideIcons from "lucide-react";
import React, { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`font-sans min-h-screen p-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <main className="max-w-2xl mx-auto">
        <div className="flex gap-5 px-10 items-center mb-8">
          <h1 className="text-3xl font-bold text-center ">Icon Mapping</h1>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <LucideIcons.Sun size={20} />
            ) : (
              <LucideIcons.Moon size={20} />
            )}
          </button>
        </div>

        {/* Header row */}
        <div
          className={`flex items-center justify-between p-4 border-b-2 mb-4 rounded-lg transition-colors duration-300 ${
            isDarkMode
              ? "border-gray-600 bg-gray-800"
              : "border-gray-300 bg-gray-50"
          }`}
        >
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <div className="flex items-center justify-center w-8 h-8">
                <span className="text-blue-600 font-bold text-lg">MUI</span>
              </div>
              <span
                className={`text-lg font-bold ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Material-UI Icons
              </span>
            </div>

            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <div className="flex items-center justify-center w-8 h-8">
                <span className="text-green-600 font-bold text-lg">LR</span>
              </div>
              <span
                className={`text-lg font-bold ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Lucide React
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {Object.entries(iconMapping).map(([muiIconName, lucideIconName]) => {
            // Get the MUI icon component
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const MuiIconComponent = (MuiIcons as any)[muiIconName];
            // Get the Lucide icon component
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const LucideIconComponent = (LucideIcons as any)[lucideIconName];

            return (
              <div
                key={muiIconName}
                className={`flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <div className="flex items-center justify-center w-8 h-8">
                      {MuiIconComponent ? (
                        React.createElement(MuiIconComponent, {
                          style: { color: isDarkMode ? "#60a5fa" : "" },
                        })
                      ) : (
                        <div className="text-gray-400 text-xs">N/A</div>
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium truncate ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {muiIconName}
                    </span>
                  </div>

                  <div className="text-gray-400">→</div>

                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <div className="flex items-center justify-center w-8 h-8">
                      {LucideIconComponent ? (
                        React.createElement(LucideIconComponent, {
                          size: 20,
                          className: isDarkMode ? "text-green-600" : "",
                        })
                      ) : (
                        <div className="text-gray-400 text-xs">N/A</div>
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium truncate ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {lucideIconName}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
