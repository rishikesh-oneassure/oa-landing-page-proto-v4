import { useEffect, useRef, useState } from "react";

const MobileCarousel = ({
  children,
  totalSlides,
  className = "",
  hideDots = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    const container = scrollContainerRef.current;
    if (container) {
      const viewportWidth = window.innerWidth;
      const cardWidth = viewportWidth - 54;
      const gap = 16;
      const scrollPosition = (cardWidth + gap) * index;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const viewportWidth = window.innerWidth;
      const cardWidth = viewportWidth - 54;
      const gap = 16;
      const initialPadding = 24;
      const adjustedScrollLeft = Math.max(0, scrollLeft - initialPadding);
      const currentIndex = Math.round(adjustedScrollLeft / (cardWidth + gap));
      const clampedIndex = Math.max(0, Math.min(currentIndex, totalSlides - 1));
      setCurrentSlide(clampedIndex);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [totalSlides]);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex">
            <div className="w-6 flex-shrink-0"></div>
            <div className="flex gap-4">{children}</div>
            <div className="w-6 flex-shrink-0"></div>
          </div>
        </div>
      </div>

      {!hideDots && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-neutral-1100" : "bg-neutral-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileCarousel;
