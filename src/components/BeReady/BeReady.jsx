import SectionContainerLarge from "../globals/SectionContainerLarge";
import { BodyLarge, BodySmall, HeadingXLarge } from "../UI/Typography";

export default function BeReady() {
  return (
    <SectionContainerLarge className="flex flex-col items-center gap-2 bg-primary-800 p-6 md:p-8 md:px-24 md:rounded-3xl text-white text-center mb-0! md:mb-20!">
      <BodySmall className={"uppercase text-center tracking-widest"}>
        &mdash; Be Ready Before You Need it
      </BodySmall>

      <HeadingXLarge weight="regular">
        Emergencies don't wait. Neither should your cover.
      </HeadingXLarge>

      <BodyLarge weight="regular">
        Talk to someone who has handled real claims. Not a chatbot, not a
        salesperson.
      </BodyLarge>

      <button className="w-full md:w-1/2 bg-neutral-50 text-primary-800 px-6 py-3 rounded-lg mt-6 font-semibold hover:bg-primary-100 transition-all duration-100 cursor-pointer">
        Book a free call
      </button>
    </SectionContainerLarge>
  );
}
