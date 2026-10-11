import { BodySmall, HeadingSmall } from "@/components/UI/Typography";
import CustomLink from "@/components/globals/CustomLink";
import { footerBrand, footerNav } from "@/components/Footer/footer.config";
import SectionContainer from "@/components/globals/SectionContainer";

const ContactUs = ({ className }) => {
  return (
    <div className={` ${className} `}>
      <HeadingSmall weight="bold" className="text-neutral-1100 mb-3">
        Contact Us
      </HeadingSmall>
      <div>
        <BodySmall className="text-neutral-1100">
          Prost Technologies Private Limited
        </BodySmall>
        <BodySmall className="text-neutral-1100">
          CIN- U74999KA2019PTC128430
        </BodySmall>
        <BodySmall className="text-neutral-1100">
          Address - 1st Floor, Gopala Krishna
          <br /> Complex, Residency Road,
          <br /> Bengaluru, Karnataka, India -
          <br /> 560025
        </BodySmall>
        <div className="mt-3">
          <span className="flex gap-1">
            <BodySmall weight="medium" className="text-neutral-1100">
              Phone -
            </BodySmall>
            <BodySmall className="text-neutral-1100">+91 6364334343</BodySmall>
          </span>
          <span className="flex gap-1">
            <BodySmall weight="medium" className="text-neutral-1100">
              Mail -
            </BodySmall>
            <BodySmall className="text-neutral-1100">
              support@oneassure.in
            </BodySmall>
          </span>
        </div>
      </div>
    </div>
  );
};

const FooterTopSection = ({ utm }) => {
  const insuranceGroup = footerNav.find((group) => group.title === "Insurance");
  const companyGroup = footerNav.find((group) => group.title === "Company");
  const policyGroup = footerNav.find((group) => group.title === "Policy");

  return (
    <SectionContainer className="!px-0 !mb-6 md:!mb-10">
      <div className="flex flex-col gap-6 md:flex-row md:gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="w-[141.19px] h-8 relative">
              <img
                src={footerBrand.logo}
                alt="OneAssure"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <BodySmall className="text-neutral-1100">
              {footerBrand.description}
            </BodySmall>
          </div>
          <div className="flex items-center gap-5">
            {footerBrand.badges.map((badge) => (
              <img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="object-contain"
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {footerBrand.social.map((item) => (
              <CustomLink key={item.name} href={item.href} utm={utm}>
                <img
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </CustomLink>
            ))}
          </div>
        </div>
        <ContactUs className="block md:hidden" />
        <div className="flex md:gap-10 ">
          {footerNav.map((group) => (
            <section
              key={group.title}
              className=" hidden md:flex flex-col gap-3"
            >
              <HeadingSmall weight="semibold" className="text-neutral-1100">
                {group.title}
              </HeadingSmall>
              <div className="flex flex-col gap-1">
                {group.links.map((link) => (
                  <CustomLink key={link.label} href={link.href} utm={utm}>
                    <BodySmall
                      as="p"
                      weight="regular"
                      className="text-neutral-1100 "
                    >
                      {link.label}
                    </BodySmall>
                  </CustomLink>
                ))}
              </div>
            </section>
          ))}
          <ContactUs className="hidden md:block" />
          <div className="flex flex-col md:hidden w-full gap-6">
            {insuranceGroup && (
              <section className="w-full flex flex-col gap-3">
                <HeadingSmall weight="bold" className="text-neutral-1100">
                  {insuranceGroup.title}
                </HeadingSmall>
                <div className="flex flex-col gap-1">
                  {insuranceGroup.links.map((link) => (
                    <CustomLink key={link.label} href={link.href} utm={utm}>
                      <BodySmall
                        as="p"
                        weight="regular"
                        className="text-neutral-1100 "
                      >
                        {link.label}
                      </BodySmall>
                    </CustomLink>
                  ))}
                </div>
              </section>
            )}

            <div className="flex flex-row gap-4 w-full">
              {companyGroup && (
                <section className="w-1/2 flex flex-col gap-3">
                  <HeadingSmall
                    weight="bold"
                    className="text-neutral-1100 !mb-0"
                  >
                    {companyGroup.title}
                  </HeadingSmall>
                  <div className="flex flex-col gap-1">
                    {companyGroup.links.map((link) => (
                      <CustomLink key={link.label} href={link.href} utm={utm}>
                        <BodySmall
                          as="p"
                          weight="regular"
                          className="text-neutral-1100 "
                        >
                          {link.label}
                        </BodySmall>
                      </CustomLink>
                    ))}
                  </div>
                </section>
              )}

              {policyGroup && (
                <section className="w-1/2 flex flex-col gap-3">
                  <HeadingSmall weight="bold" className="text-neutral-1100">
                    {policyGroup.title}
                  </HeadingSmall>
                  <div className="flex flex-col gap-1">
                    {policyGroup.links.map((link) => (
                      <CustomLink key={link.label} href={link.href} utm={utm}>
                        <BodySmall
                          as="p"
                          weight="regular"
                          className="text-neutral-1100  "
                        >
                          {link.label}
                        </BodySmall>
                      </CustomLink>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FooterTopSection;
