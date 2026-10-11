import { BodyMedium, BodySmall } from "@/components/UI/Typography";

const Pill = ({
  pill,
  as,
  className,
  border,
  borderColor,
  bgColor,
  textColor,
  pillSize = "regular",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span
        className={`${pillSize === "regular" ? "px-8 py-[0.5px] md:py-[1.5px]" : "px-6 py-0.5 md:py-[1px]"} rounded-full ${border ? `border-[0.5px] ${borderColor || "border-secondary-400"}` : "border-none"} ${bgColor ?? "bg-secondary-100"}`}
      >
        {pillSize === "regular" ? (
          <BodyMedium
            {...(as ? { as } : { as: "p" })}
            className={`${textColor ? textColor : "text-secondary-400"}`}
          >
            {pill}
          </BodyMedium>
        ) : (
          <BodySmall
            {...(as ? { as } : { as: "p" })}
            className={`${textColor ? textColor : "text-secondary-400"}`}
          >
            {pill}
          </BodySmall>
        )}
      </span>
    </div>
  );
};

export default Pill;
