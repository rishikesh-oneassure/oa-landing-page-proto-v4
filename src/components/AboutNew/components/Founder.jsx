import SectionContainer from "@/components/globals/SectionContainer";
import SectionContainerLarge from "@/components/globals/SectionContainerLarge";
import SectionContainerMedium from "@/components/globals/SectionContainerMedium";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  HeadingLarge,
  HeadingXLarge,
} from "@/components/UI/Typography";

const Founder = ({ title, desc, name, designation, company, image }) => {
  const descriptionPartOne = desc.slice(0, 2);
  const descriptionPartTwo = desc.slice(2);

  return (
    <SectionContainer className="ml-[calc(50%-50vw)]! mr-[calc(50%-50vw)]! flex w-screen! max-w-none! flex-col items-center gap-4 bg-primary-100 py-12">
      <div className="flex flex-col items-center text-center gap-1">
        <BodySmall
          className={"uppercase text-primary-900 tracking-widest"}
          weight="semibold"
        >
          &mdash; Founder's Note
        </BodySmall>
        <HeadingXLarge className={"text-neutral-1100"} weight="medium">
          Meet Our Founder
        </HeadingXLarge>
      </div>

      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row overflow-clip">
        <div className="grid bg-primary-800 rounded-b-2xl rounded-t-none md:rounded-l-2xl md:rounded-r-none px-6 md:pt-6 z-2 justify-center">
          <img
            src="/about-founder.png"
            alt=""
            className="h-80 md:w-5xl md:h-auto self-end drop-shadow-[1.5rem_0.5rem_1rem_rgba(0,0,0,0.5)] px-4"
          />
        </div>

        <figure className="px-8 py-6 md:py-10 md:-translate-x-4 flex flex-col gap-3 leading-tight rounded-t-2xl md:rounded-b-2xl md:rounded-r-2xl md:rounded-l-none bg-primary-800 text-primary-50">
          <BodyLarge className={"font-extralight!"}>
            {descriptionPartOne}
          </BodyLarge>
          <BodyLarge className={"font-extralight!"}>
            {descriptionPartTwo}
          </BodyLarge>

          <div className="flex flex-col self-center md:self-start">
            <HeadingXLarge as="span" className={"font-corinthia mt-4"}>
              {name}
            </HeadingXLarge>

            <figure className="flex gap-2 -mt-1.5">
              <BodySmall>{designation}</BodySmall> &mdash;{" "}
              <BodySmall weight="semibold">{company}</BodySmall>
            </figure>
          </div>
        </figure>
      </div>
    </SectionContainer>
  );
};

export default Founder;
