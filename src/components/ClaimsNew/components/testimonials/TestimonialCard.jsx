import {
  BodyLarge,
  BodyMedium,
  HeadingSmall,
} from "@/components/UI/Typography";

const QUOTE_ICON = "/testimonials/quote.svg";

function renderDescription(html, Text, className) {
  const paragraphs = String(html)
    .split(/<\/p>/i)
    .map((part) => part.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const content = paragraphs.length ? paragraphs : [html];

  return content.map((text, index) => (
    <Text key={index} className={className}>
      {text}
    </Text>
  ));
}

export const DesktopTestimonialCard = ({
  name,
  image_url,
  location,
  description,
}) => {
  return (
    <div className="mb-1 flex w-[600px] rounded-lg border border-primary-300 bg-white px-6 py-8 shadow-md">
      <div className="flex w-1/4 flex-col items-center justify-center">
        <div className="relative mb-2.5 h-32 w-32 overflow-hidden rounded-full pr-6">
          <img
            loading="lazy"
            src={image_url}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <HeadingSmall
          weight="semibold"
          className="mb-1 text-center text-neutral-1100"
        >
          {name}
        </HeadingSmall>
        <BodyMedium weight="regular" className="text-center text-neutral-1100">
          {location}
        </BodyMedium>
      </div>
      <div className="flex w-3/4 flex-col px-2 py-4">
        <img
          loading="lazy"
          src={QUOTE_ICON}
          alt=""
          width={25}
          height={25}
          className="mb-2"
        />
        {renderDescription(
          description,
          BodyLarge,
          "px-6 text-center text-neutral-1100",
        )}
        <img
          loading="lazy"
          src={QUOTE_ICON}
          alt=""
          width={25}
          height={25}
          className="mr-2 ml-auto mt-2 rotate-180"
        />
      </div>
    </div>
  );
};

export const MobileTestimonialCard = ({
  name,
  image_url,
  location,
  description,
}) => {
  return (
    <div className="flex h-full flex-col justify-between gap-4 rounded-xl border border-primary-300 bg-white p-6">
      <div>
        {renderDescription(
          description,
          BodyMedium,
          "text-justify text-neutral-1100",
        )}
      </div>
      <div className="flex gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <img
            loading="lazy"
            src={image_url}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <HeadingSmall weight="semibold" className="text-neutral-1100">
            {name}
          </HeadingSmall>
          <BodyMedium weight="regular" className="text-neutral-1100">
            {location}
          </BodyMedium>
        </div>
      </div>
    </div>
  );
};
