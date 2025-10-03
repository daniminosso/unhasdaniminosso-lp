"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type SlideShowProps = {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }[];
  interval?: number;
};

export function SlideShow({ images, interval = 3000 }: SlideShowProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const len = images.length;
  const prevIndex = (current - 1 + len) % len;
  const nextIndex = (current + 1) % len;
  const intervalRef = useRef<NodeJS.Timeout>();

  const doNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(i => (i + 1) % len);
    setTimeout(() => setIsTransitioning(false), 500);
  };
  const doPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(i => (i - 1 + len) % len);
    setTimeout(() => setIsTransitioning(false), 500);
  };
  const resetAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(doNext, interval);
  };
  useEffect(() => {
    intervalRef.current = setInterval(doNext, interval);
    return () => clearInterval(intervalRef.current!);
  }, [interval, len]);

  // swipe mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove  = (e: React.TouchEvent) => (touchEndX.current   = e.touches[0].clientX);
  const onTouchEnd   = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) { doNext(); resetAuto(); }
    if (delta < -50){ doPrev(); resetAuto(); }
  };

  return (
    <div
      className="
        relative
        h-64
        overflow-hidden
        rounded-lg
        md:overflow-visible
        md:h-96
        lg:mx-40
        xl:mx-60
      "
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 flex items-center justify-center gap-x-4">
        {[prevIndex, current, nextIndex].map((idx, pos) => {
          const { src, alt, width, height, className } = images[idx];
          const isCenter = pos === 1;
          return (
            <div
              key={idx}
              className={`
                relative
                transition-all duration-500 ease-in-out
                ${isCenter 
                  ? 'w-3/4 h-full opacity-100 md:w-1/2'
                  : 'w-1/4 h-3/4 opacity-40 md:scale-75 md:opacity-40 md:w-2/5'
                }
                ${pos === 0 
                  ? '-translate-x-1/3' 
                  : pos === 2 
                    ? 'translate-x-1/3' 
                    : ''
                }
                md:w-64       /* desktop largura fixa */
                md:translate-x-0  /* sem deslocamento lateral */
                md:opacity-100    /* todas com opacidade cheia */
              `}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
              />
            </div>
          );
        })}
      </div>

      {/* setas desktop */}
      <button
        aria-label="Anterior"
        onClick={() => { doPrev(); resetAuto(); }}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>
      <button
        aria-label="Próximo"
        onClick={() => { doNext(); resetAuto(); }}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
