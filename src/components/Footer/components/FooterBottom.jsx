import SectionContainer from "@/components/globals/SectionContainer";
import { BodySmall } from "@/components/UI/Typography";
import { complianceNote } from "@/components/Footer/footer.config";

const FooterAbout = () => {
  return (
    <SectionContainer className="!px-0  !mb-0">
      <BodySmall className="text-neutral-1100  text-center" weight="regular">
        {complianceNote}
      </BodySmall>
    </SectionContainer>
  );
};

export default FooterAbout;
