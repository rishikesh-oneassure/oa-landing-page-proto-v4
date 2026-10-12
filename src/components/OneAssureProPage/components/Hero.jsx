import SectionContainerMedium from "@/components/globals/SectionContainerMedium";
import InsurerLogoMarquee from "@/components/InsurerLogoMarquee";
import { Button } from "@/components/UI/Button";
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  Heading2XLarge,
  HeadingMedium,
  HeadingSmall,
} from "@/components/UI/Typography";
import { useSubscribeDesktopLayout } from "@/hooks/useSubscribeDesktopLayout";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { LiaHandshake, LiaUserCheckSolid } from "react-icons/lia";

export default function Hero() {
  const isDesktop = useSubscribeDesktopLayout();

  return (
    <div
      id="hero"
      className="relative h-fit w-full -mt-24 mb-12 pt-36 md:left-1/2 md:w-screen md:-translate-x-1/2 md:-mt-31.5 md:pt-43.5 lg:-mt-31 lg:pt-43"
    >
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
          <div className="mx-auto flex w-full min-w-0 max-w-full flex-col-reverse md:flex-row gap-3 md:gap-8">
            <div className="flex w-full md:h-full min-w-0 flex-col items-center justify-center bg-primary-800 p-6 md:p-8 text-white divide-y divide-primary-700 rounded-2xl *:w-full md:max-w-1/2">
              <BodySmall
                className={"border-b-0 uppercase tracking-widest pb-3 md:pb-6"}
                weight="semibold"
              >
                &mdash; You can avail
              </BodySmall>

              <span className="block w-full h-px bg-primary-700"></span>

              <div className="h-full flex flex-col justify-between">
                <div className="flex items-start gap-1 py-3">
                  <span className="flex items-center justify-center h-8 -mt-1 aspect-square rounded-full">
                    <HiOutlineDocumentCheck className="h-6 w-6 aspect-square text-primary-300" />
                  </span>
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <BodyLarge weight="semibold">Free Policy Review</BodyLarge>
                    <BodyMedium classname="text-white">
                      Already have a policy? We walk you through what it really
                      covers, flag the gaps and exclusions, and tell you
                      honestly whether to stay with it or move.
                    </BodyMedium>
                  </div>
                </div>

                <span className="block w-full h-px bg-primary-700"></span>

                <div className="flex items-start gap-1 py-3">
                  <span className="flex items-center justify-center h-8 -mt-1 aspect-square rounded-full">
                    <LiaUserCheckSolid className="h-6 w-6 aspect-square text-primary-300" />
                  </span>
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <BodyLarge weight="semibold">
                      Personalised Recommendation
                    </BodyLarge>
                    <BodyMedium classname="text-white">
                      Plans matched to your family, health and budget, with a
                      clear reason behind every pick.
                    </BodyMedium>
                  </div>
                </div>

                <span className="block w-full h-px bg-primary-700"></span>

                <div className="flex items-start gap-1 pt-3">
                  <span className="flex items-center justify-center h-8 -mt-1 aspect-square rounded-full">
                    <LiaHandshake className="h-6 w-6 aspect-square text-primary-300" />
                  </span>
                  <div className="flex min-w-0 flex-col gap-1.5">
                    <BodyLarge weight="semibold">
                      Lifetime Dedicated Claims Support
                    </BodyLarge>
                    <BodyMedium classname="text-white">
                      Our dedicated claims team stays with you for as long as
                      you hold the policy, from filing to insurer follow-ups and
                      escalations.
                    </BodyMedium>
                  </div>
                </div>
              </div>
            </div>

            <form className="z-5 flex w-full min-w-0 max-w-full flex-col bg-white px-6 md:px-8 py-4 shadow-lg md:max-w-1/2 rounded-2xl">
              <div className="flex flex-col gap-0.5 pt-2">
                <HeadingMedium className="text-neutral-1100">
                  Book your free call
                </HeadingMedium>
                <BodyMedium className="text-neutral-700">
                  Step 1 of 2
                </BodyMedium>
              </div>

              <p className="flex flex-col gap-0.5 w-full py-2">
                <label>
                  <BodyMedium className="text-neutral-900 ml-1">
                    Name
                  </BodyMedium>
                </label>
                <input
                  type="text"
                  className="w-full min-w-0 max-w-full rounded-lg border border-neutral-300 bg-white p-2"
                  placeholder=""
                />
              </p>

              <p className="flex flex-col gap-0.5 w-full py-2">
                <label>
                  <BodyMedium className="text-neutral-900 ml-1">
                    Phone Number
                  </BodyMedium>
                </label>
                <input
                  type="text"
                  className="w-full min-w-0 max-w-full rounded-lg border border-neutral-300 bg-white p-2"
                  placeholder=""
                />
              </p>

              <p className="flex flex-col gap-0.5 w-full py-2">
                <label value={"default"}>
                  <BodyMedium className="text-neutral-900 ml-1">
                    What do you need?
                  </BodyMedium>
                </label>
                <select className="w-full min-w-0 max-w-full rounded-lg border-r-8 border-r-white outline outline-neutral-300 p-2 text-sm text-neutral-900">
                  <option value={"Policy Review"}>Policy Review</option>
                  <option value={"Personalized Recommendation"}>
                    Personalized Recommendation
                  </option>
                  <option value={"Health Insurance"}>Health Insurance</option>
                  <option value={"Term Insurance"}>Term Insurance</option>
                </select>
              </p>

              <Button className="rounded-lg my-2">Continue</Button>

              <BodySmall
                className={
                  "block w-full pb-2 border-b border-neutral-200 text-neutral-600 text-center tracking-widest"
                }
              >
                A OneAssure Expert Will Assist You
              </BodySmall>

              <div className="w-full pt-4 pb-2 md:pb-0 flex items-center justify-between">
                <BodyMedium
                  className={
                    "text-neutral-600 text-center leading-3.5 tracking-wider"
                  }
                >
                  Insurers We {!isDesktop && <br />}Work With
                </BodyMedium>

                <div className="flex items-center gap-2 md:gap-4">
                  <span className="h-8 md:h-10 w-auto">
                    <img
                      src="/insurer-sq-logos/care-sq-logo.png"
                      alt="HDFC ERGO Logo"
                      className="object-cover h-10 aspect-square object-left rounded-md"
                    />
                  </span>

                  <span className="h-8 md:h-10 w-auto">
                    <img
                      src="/insurer-sq-logos/niva-bupa-sq-logo.png"
                      alt="HDFC ERGO Logo"
                      className="object-cover h-10 aspect-square object-left rounded-md"
                    />
                  </span>

                  <span className="h-8 md:h-10 w-auto">
                    <img
                      src="/insurer-sq-logos/hdfc-ergo-sq-logo.jpg"
                      alt="HDFC ERGO Logo"
                      className="object-cover h-10 aspect-square object-left rounded-md"
                    />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </SectionContainerMedium>
      </div>
      <InsurerLogoMarquee className="relative z-1 mt-8 border-y border-primary-300 md:mt-14" />
    </div>
  );
}
