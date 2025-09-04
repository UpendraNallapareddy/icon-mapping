"use client";

import { iconMapping } from "../lib/icon-mapping";
import * as MuiIcons from "@mui/icons-material";
import * as LucideIcons from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Icon Comparison: MUI vs Lucide
        </h1>

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
                className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <div className="flex items-center justify-center w-8 h-8">
                      {MuiIconComponent ? (
                        React.createElement(MuiIconComponent, {
                          style: { color: "#2563eb" },
                        })
                      ) : (
                        <div className="text-gray-400 text-xs">N/A</div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700 truncate">
                      {muiIconName}
                    </span>
                  </div>

                  <div className="text-gray-400">→</div>

                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                    <div className="flex items-center justify-center w-8 h-8">
                      {LucideIconComponent ? (
                        React.createElement(LucideIconComponent, {
                          size: 20,
                          className: "text-gredden-600",
                        })
                      ) : (
                        <div className="text-gray-400 text-xs">N/A</div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700 truncate">
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
