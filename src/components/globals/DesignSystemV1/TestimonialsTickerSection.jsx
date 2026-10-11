import {
  DesktopTestimonialCard,
  MobileTestimonialCard,
} from "@/components/ClaimsNew/components/testimonials/TestimonialCard";
import Pill from "@/components/globals/DSComponentsV0/Pill";
import SectionContainerMedium from "@/components/globals/SectionContainerMedium";
import MobileCarousel from "@/components/UI/MobileCarousel";
import MobileCarouselItem from "@/components/UI/MobileCarouselItem";
import {
  BodyMedium,
  BodySmall,
  BodyXSmall,
  HeadingSmall,
  HeadingXLarge,
} from "@/components/UI/Typography";
import { useSubscribeDesktopLayout } from "@/hooks/useSubscribeDesktopLayout";
import marqueeModule from "react-fast-marquee";
import { GoArrowRight } from "react-icons/go";

const Marquee =
  typeof marqueeModule === "function" ? marqueeModule : marqueeModule.default;

const TestimonialsTickerSection = ({
  id,
  pill_content,
  title,
  description,
  testimonial,
  className = "",
}) => {
  const isDesktop = useSubscribeDesktopLayout();

  return (
    <div className="w-full">
      <SectionContainerMedium
        className={`relative flex flex-col pt-6 pb-8 px-0! md:rounded-3xl md:pb-16 ${className}`}
        id={id}
      >
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden md:rounded-3xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/pro-hero-background.jpg)",
              filter: "blur(24px)",
              transform: "scale(1.06)",
            }}
          />
        </div>
        <div className="relative z-1 flex flex-col items-center justify-center px-5">
          {/* <Pill
            pill={pill_content}
            bgColor="bg-white"
            className="mb-3 md:mb-4"
          /> */}
          <BodySmall
            className="text-primary-800 uppercase tracking-widest mb-1"
            weight="semibold"
          >
            &mdash; Testimonials
          </BodySmall>

          <HeadingXLarge
            weight="bold"
            className="mb-3 text-center text-neutral-1100 md:mb-4"
          >
            {title}
          </HeadingXLarge>
          <HeadingSmall
            className="mb-6 max-w-4xl text-center text-neutral-1100 md:mb-8"
            weight="regular"
          >
            {description}
          </HeadingSmall>
        </div>

        {isDesktop ? (
          <div className="relative z-1 left-1/2 block w-screen -translate-x-1/2">
            <Marquee speed={100} pauseOnHover={true}>
              <div className="mr-10 flex gap-10">
                {testimonial.map((item, index) => (
                  <DesktopTestimonialCard
                    key={index}
                    name={item.name}
                    image_url={item.image_url}
                    location={item.location}
                    description={item.description}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        ) : (
          <>
            <MobileCarousel
              hideDots={true}
              totalSlides={testimonial.length}
              className="relative z-1 gap-4"
            >
              {testimonial.map((item, index) => (
                <MobileCarouselItem key={index}>
                  <MobileTestimonialCard
                    name={item.name}
                    image_url={item.image_url}
                    location={item.location}
                    description={item.description}
                  />
                </MobileCarouselItem>
              ))}
            </MobileCarousel>

            <div className="relative z-1 mt-4 flex items-center justify-center gap-2.5">
              <div className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm">
                <BodyMedium weight="regular" className="text-primary-800">
                  swipe
                </BodyMedium>
                <GoArrowRight className="text-primary-800" size={16} />
              </div>
            </div>
          </>
        )}
      </SectionContainerMedium>
    </div>
  );
};

export default TestimonialsTickerSection;
