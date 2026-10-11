import { BodyMedium } from "@/components/UI/Typography";
import { ChevronDown, ChevronUp } from "lucide-react";

export const AccordionItem = ({
  title,
  isOpen,
  onToggle,
  children,
  className = "",
}) => {
  return (
    <div
      className={` bg-primary-100 shadow-sm border border-primary-200 rounded-xl p-4  ${className}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <BodyMedium weight="medium" className="text-neutral-1100">
          {title}
        </BodyMedium>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-neutral-800" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neutral-800" />
        )}
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};
