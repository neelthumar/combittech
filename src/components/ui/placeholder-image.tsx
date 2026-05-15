"use client";

import { assets } from "@/config/assets";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: "video" | "square" | "wide" | "portrait";
}

export function PlaceholderImage({
  src,
  alt,
  className,
  aspectRatio = "video",
}: PlaceholderImageProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-gray-100 rounded-lg",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-primary-200/50 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-xs text-primary-400 font-medium">{alt}</p>
        </div>
      </div>
      {/* Circuit board pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="20" cy="20" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}
