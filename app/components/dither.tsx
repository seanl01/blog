"use client";
import { useState } from "react";
import { Dithering } from "@paper-design/shaders-react";

export default function SettableDither() {
  let defaultConfig = {
      colorFront: "#BEBEBE",
      colorBack: "#ffffff",
      shape: "simplex" as const,
      type: "4x4" as const,
      size: 2,
      speed: 0.8,
      scale: 0.8,
    }

  // Safe-guard: only access window if it exists
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    defaultConfig.colorFront = "#7d7d7d";
    defaultConfig.colorBack = "#000000";
  }

  const [ditherConfig, setDitherConfig] = useState(defaultConfig);

  return (
    <div className="max-h-[40vh] sm:max-h-none overflow-clip w-full my-8">
      <Dithering
        className=""
        onMouseEnter={() =>
          {
            setDitherConfig((config) => ({ ...config, speed: 2.2 }));
          }
        }
        onMouseLeave={() =>
          {
            setDitherConfig((config) => ({ ...config, speed: 0.8 }));
          }
        }
        // width={1280}
        height={420}
        {...ditherConfig}
      />
    </div>
  );
}
