import SectionContainerMedium from "@/components/globals/SectionContainerMedium";
import SectionContainerSmall from "@/components/globals/SectionContainerSmall";
import { BodySmall, HeadingXLarge } from "@/components/UI/Typography";
import { useEffect, useRef, useState } from "react";

const SLOT_HEIGHT = 78;

function positionStyles(position) {
  const base = "transition-all duration-1000 ease-in-out";

  switch (position) {
    case 1:
      return `${base} scale-[0.97] text-primary-800 font-medium opacity-60 text-[0.625rem]/[0.875rem] md:text-[0.875rem]/[1.25rem]`;
    case 2:
      return `${base} scale-100 bg-secondary-400 font-medium text-white opacity-100 text-[0.625rem]/[0.875rem] md:text-[1rem]/[1.5rem]`;
    case 3:
      return `${base} scale-[0.97] text-primary-800 font-medium opacity-60 text-[0.625rem]/[0.875rem] md:text-[0.875rem]/[1.25rem]`;
    default:
      return `${base} opacity-0`;
  }
}

const TestimonialSection = ({ story }) => {
  const storyPoints = story.points;
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % storyPoints.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [storyPoints.length]);

  useEffect(() => {
    previousIndex.current = currentIndex;
  }, [currentIndex]);

  return (
    <div className="my-12 md:my-20">
      <div className="mb-10 w-full overflow-hidden md:mb-16">
        <SectionContainerMedium className="flex flex-col !mb-0 !px-0">
          <div className="flex flex-col items-center text-center">
            <BodySmall
              className={"uppercase tracking-widest text-primary-800"}
              weight="semibold"
            >
              &mdash; Testimonials
            </BodySmall>
            <HeadingXLarge
              className="flex w-full items-center justify-center gap-6 text-center text-neutral-1100"
              weight="medium"
            >
              {story.title}
            </HeadingXLarge>
          </div>

          <SectionContainerSmall className="overflow-hidden !mb-0 !px-0">
            <div
              className="relative"
              style={{ height: SLOT_HEIGHT * storyPoints.length }}
            >
              {storyPoints.map((point, index) => {
                const relativePosition =
                  (index - currentIndex + storyPoints.length) %
                  storyPoints.length;
                const position = relativePosition + 1;
                const wrapped =
                  previousIndex.current !== currentIndex &&
                  relativePosition === storyPoints.length - 1;

                return (
                  <div
                    key={index}
                    className={`absolute right-0 left-0 flex items-center justify-center ${wrapped ? "" : "transition-all duration-1000 ease-in-out"}`}
                    style={{
                      height: SLOT_HEIGHT,
                      transform: `translateY(${relativePosition * SLOT_HEIGHT}px)`,
                    }}
                  >
                    <div
                      className={`${positionStyles(position)} w-full md:rounded-full px-4 text-center ${position === 2 ? "py-4" : ""}`}
                    >
                      {point}
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionContainerSmall>
        </SectionContainerMedium>
      </div>
    </div>
  );
};

export default TestimonialSection;
