import { useMemo } from "react";
import SectionContainer from "@/components/globals/SectionContainer";
import CustomLink from "@/components/globals/CustomLink";
import { BodySmall, HeadingSmall } from "@/components/UI/Typography";
import { calculators } from "@/components/Footer/footer.config";

const CalculatorSection = ({ utm }) => {
  const columns = useMemo(() => {
    const chunked = [];
    for (let i = 0; i < calculators.length; i += 5) {
      chunked.push(calculators.slice(i, i + 5));
    }
    return chunked;
  }, []);

  return (
    <SectionContainer className="!px-0 !mb-6 md:!mb-10">
      <div className="flex flex-col gap-3">
        <HeadingSmall
          weight="semibold"
          className="text-neutral-1100 hidden md:block"
        >
          Health & Fitness Calculators
        </HeadingSmall>
        <div className="hidden md:flex  gap-10 flex-wrap">
          {columns.map((col, columnIdx) => (
            <div key={`calc-col-${columnIdx}`} className="flex flex-col gap-1">
              {col.map((link, idx) => (
                <CustomLink
                  key={`${link.label}-${idx}`}
                  href={link.href}
                  utm={utm}
                  style="block"
                >
                  <BodySmall
                    as="p"
                    weight="regular"
                    className="text-neutral-1100 truncate"
                  >
                    {link.label}
                  </BodySmall>
                </CustomLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default CalculatorSection;
