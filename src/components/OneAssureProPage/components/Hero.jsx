import InsurerLogoMarquee from "@/components/InsurerLogoMarquee";
import SectionContainerMedium from "@/components/globals/SectionContainerMedium";
import { Button } from "@/components/UI/Button";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  Heading2XLarge,
  HeadingSmall,
} from "@/components/UI/Typography";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { LiaHandshake, LiaUserCheckSolid } from "react-icons/lia";

export default function Hero() {
  return (
    <div className="relative h-fit w-full -mt-24 pt-36 md:left-1/2 md:w-screen md:-translate-x-1/2 md:-mt-31.5 md:pt-43.5 lg:-mt-31 lg:pt-43">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/pro-hero-background.jpg)",
            filter: "blur(24px)",
            transform: "scale(1.06)",
          }}
        />
      </div>
      <div className="relative z-1 flex w-full min-w-0 flex-col items-center gap-8 px-6 md:px-0">
        <div className="flex flex-col items-center gap-2">
          <Heading2XLarge
            as="h1"
            className="text-neutral-1100 tracking-tight text-center"
            weight="semibold"
          >
            Not sure what cover to buy? Talk to an expert first.
          </Heading2XLarge>
          <HeadingSmall
            className="text-neutral-900 text-center"
            weight="regular"
          >
            Unbiased advice from a certified insurance expert. No fees. No
            pressure.
          </HeadingSmall>
        </div>

        <SectionContainerMedium className="flex w-full min-w-0 flex-col-reverse px-0! mb-0! md:flex-row">
          <div className="mx-auto flex w-full min-w-0 max-w-full flex-col-reverse md:flex-row">
            <div className="flex w-full min-w-0 flex-col items-center justify-center bg-primary-800 px-6 py-3 text-white divide-y divide-primary-700 rounded-b-2xl *:w-full md:max-w-1/2 md:translate-x-4 md:rounded-l-2xl md:rounded-br-none md:pr-12">
              <HeadingSmall className={"border-b-0"} weight="semibold">
                You can avail
              </HeadingSmall>
              <div className="flex items-start gap-2 py-3">
                <span className="flex items-center justify-center h-8 aspect-square rounded-full mt-1">
                  <HiOutlineDocumentCheck className="h-6 w-6 aspect-square text-primary-300" />
                </span>
                <div className="flex min-w-0 flex-col gap-1.5">
                  <BodySmall
                    className="uppercase tracking-widest"
                    weight="semibold"
                  >
                    &mdash; Free Policy Review
                  </BodySmall>
                  <BodyMedium classname="text-white">
                    Already have a policy? We walk you through what it really
                    covers, flag the gaps and exclusions, and tell you honestly
                    whether to stay with it or move.
                  </BodyMedium>
                </div>
              </div>

              <div className="flex items-start gap-2 py-3">
                <span className="flex items-center justify-center h-8 aspect-square rounded-full mt-1">
                  <LiaUserCheckSolid className="h-6 w-6 aspect-square text-primary-300" />
                </span>
                <div className="flex min-w-0 flex-col gap-1.5">
                  <BodySmall
                    className="uppercase tracking-widest"
                    weight="semibold"
                  >
                    &mdash; Personalised Recommendation
                  </BodySmall>
                  <BodyMedium classname="text-white">
                    Plans matched to your family, health and budget, with a
                    clear reason behind every pick.
                  </BodyMedium>
                </div>
              </div>

              <div className="flex items-start gap-2 py-3">
                <span className="flex items-center justify-center h-8 aspect-square rounded-full mt-1">
                  <LiaHandshake className="h-6 w-6 aspect-square text-primary-300" />
                </span>
                <div className="flex min-w-0 flex-col gap-1.5">
                  <BodySmall
                    className="uppercase tracking-widest"
                    weight="semibold"
                  >
                    &mdash; Lifetime Dedicated Claims Support
                  </BodySmall>
                  <BodyMedium classname="text-white">
                    Our dedicated claims team stays with you for as long as you
                    hold the policy, from filing to insurer follow-ups and
                    escalations.
                  </BodyMedium>
                </div>
              </div>
            </div>

            <form className="z-5 flex w-full min-w-0 max-w-full flex-col rounded-t-2xl bg-white px-6 py-2 shadow-lg md:max-w-1/2 md:rounded-2xl">
              <div className="flex flex-col gap-0.5 py-2">
                <HeadingSmall className="text-neutral-1100">
                  Book your free call
                </HeadingSmall>
                <BodyMedium className="text-neutral-700">
                  Step 1 of 2
                </BodyMedium>
              </div>

              <p className="flex flex-col gap-0.5 w-full py-2">
                <label>
                  <BodyLarge className="text-neutral-1100">Name</BodyLarge>
                </label>
                <input
                  type="text"
                  className="w-full min-w-0 max-w-full rounded-lg border border-neutral-300 bg-white p-2"
                  placeholder=""
                />
              </p>

              <p className="flex flex-col gap-0.5 w-full py-2">
                <label>
                  <BodyLarge className="text-neutral-1100">
                    Phone Number
                  </BodyLarge>
                </label>
                <input
                  type="text"
                  className="w-full min-w-0 max-w-full rounded-lg border border-neutral-300 bg-white p-2"
                  placeholder=""
                />
              </p>

              <p className="flex flex-col gap-0.5 w-full py-2">
                <label value={"default"}>
                  <BodyLarge className="text-neutral-1100">
                    What do you need?
                  </BodyLarge>
                </label>
                <select className="w-full min-w-0 max-w-full rounded-lg border border-neutral-300 p-2 text-base text-neutral-1100">
                  <option value={"Policy Review"}>Policy Review</option>
                  <option value={"Personalized Recommendation"}>
                    Personalized Recommendation
                  </option>
                  <option value={"Health Insurance"}>Health Insurance</option>
                  <option value={"Term Insurance"}>Term Insurance</option>
                </select>
              </p>

              <Button className="rounded-lg my-2">Continue</Button>
            </form>
          </div>
        </SectionContainerMedium>
      </div>
      <InsurerLogoMarquee className="relative z-1 mt-8 border-y border-primary-300 md:mt-14" />
    </div>
  );
}
