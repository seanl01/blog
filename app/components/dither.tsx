"use client";
import { useState, useEffect } from "react";
import { Dithering } from "@paper-design/shaders-react";
import { useTheme } from "next-themes";

export default function SettableDither() {
  const { resolvedTheme } = useTheme();

  const [ditherConfig, setDitherConfig] = useState({
    colorFront: "#BEBEBE",
    colorBack: "#ffffff",
    shape: "simplex" as const,
    type: "4x4" as const,
    size: 2,
    speed: 0.8,
    scale: 0.8,
  });

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setDitherConfig((prev) => ({
        ...prev,
        colorFront: "#7d7d7d",
        colorBack: "#000000",
      }));
    } else {
      setDitherConfig((prev) => ({
        ...prev,
        colorFront: "#BEBEBE",
        colorBack: "#ffffff",
      }));
    }
  }, [resolvedTheme]);

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
