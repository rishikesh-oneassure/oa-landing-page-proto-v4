import { useMemo, useState } from "react";
import { BodyLarge, BodySmall } from "@/components/UI/Typography";
import CustomLink from "@/components/globals/CustomLink";
import { linkCloudGroups, calculators } from "@/components/Footer/footer.config";
import SectionContainer from "@/components/globals/SectionContainer";
import { AccordionItem } from "@/components/Footer/components/AccordionItem";

const FooterTabs = ({ utm }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAllLinks, setShowAllLinks] = useState(false);
  const [openAccordions, setOpenAccordions] = useState(() => {
    const initial = {
      "Health & Fitness Calculators": false,
    };
    if (linkCloudGroups.length > 0) {
      initial[linkCloudGroups[0].title] = true;
    }
    return initial;
  });

  const activeGroup = linkCloudGroups[activeTab];

  const columns = useMemo(() => {
    const colCount = 4;
    const cols = Array.from({ length: colCount }, () => []);
    activeGroup.links.forEach((link, idx) => {
      cols[idx % colCount].push(link);
    });
    return cols;
  }, [activeGroup.links]);

  const columnsWithLimit = useMemo(() => {
    if (showAllLinks) return columns;
    return columns.map((col) => col.slice(0, 6));
  }, [columns, showAllLinks]);

  const shouldRenderShowMore = useMemo(
    () => columns.some((col) => col.length > 6),
    [columns],
  );

  const toggleAccordion = (title) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const allAccordionItems = useMemo(() => {
    const calculatorItem = {
      title: "Health & Fitness Calculators",
      links: calculators,
    };
    return [calculatorItem, ...linkCloudGroups];
  }, []);

  return (
    <SectionContainer className="!px-0 !mb-6 md:!mb-10">
      <div className="hidden md:flex flex-col gap-6">
        <div className="flex  gap-6">
          {linkCloudGroups.map((group, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={group.title}
                type="button"
                onClick={() => {
                  setActiveTab(index);
                  setShowAllLinks(false);
                }}
              >
                <BodyLarge
                  className={`${
                    isActive
                      ? " text-primary-800 underline underline-offset-8"
                      : "text-neutral-1100"
                  } flex-shrink`}
                  weight={isActive ? "semibold" : "medium"}
                >
                  {group.title}
                </BodyLarge>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-8">
          {columnsWithLimit.map((col, colIdx) => (
            <div key={`col-${colIdx}`} className="flex flex-col gap-1">
              {col.map((link, idx) => (
                <CustomLink
                  key={`${activeGroup.title}-${link.label}-${idx}`}
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
        {shouldRenderShowMore && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllLinks((prev) => !prev)}
              aria-pressed={showAllLinks}
            >
              <BodySmall weight="semibold" className="text-primary-800">
                {showAllLinks ? "Show Less" : "Show More"}
              </BodySmall>
            </button>
          </div>
        )}
      </div>

      <div className="flex  md:hidden flex-col gap-4 w-full">
        {allAccordionItems.map((item) => {
          const linkChunks = [];
          for (let i = 0; i < item.links.length; i += 6) {
            linkChunks.push(item.links.slice(i, i + 6));
          }

          return (
            <AccordionItem
              key={item.title}
              title={item.title}
              isOpen={openAccordions[item.title] || false}
              onToggle={() => toggleAccordion(item.title)}
            >
              {linkChunks.map((chunk, chunkIdx) => (
                <div key={chunkIdx} className={chunkIdx > 0 ? "mt-2" : ""}>
                  {chunk.map((link) => (
                    <CustomLink
                      key={`${item.title}-${link.label}`}
                      href={link.href}
                      utm={utm}
                      style="block"
                    >
                      <BodySmall
                        as="p"
                        weight="regular"
                        className="text-neutral-1100 mb-1"
                      >
                        {link.label}
                      </BodySmall>
                    </CustomLink>
                  ))}
                </div>
              ))}
            </AccordionItem>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default FooterTabs;
