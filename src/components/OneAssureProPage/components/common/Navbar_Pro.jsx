import { Button } from "@/components/UI/Button";
import ScrollNavItem from "@/components/OneAssureProPage/components/common/ScrollNavItem";

const navItems = [
  { label: "How It Works", targetId: "how-it-works" },
  { label: "Pricing", targetId: "our-services" },
  { label: "FAQ", targetId: "faq" },
];

function Navbar_Pro() {
  return (
    <div className="fixed left-1/2 top-[38px] z-50 w-full -translate-x-1/2 px-4 md:px-6">
      <nav className="mx-auto flex h-[64px] w-full max-w-[1280px] items-center gap-2 rounded-[100px] border border-primary-300 bg-white/40 px-3 py-2 shadow-[0px_2px_10px_0px_#0000001F] backdrop-blur-md sm:h-[76px] sm:gap-2.5 sm:px-6 sm:py-3">
        <a href="/" className="shrink-0">
          <img
            src="https://cdn.oasr.in/oa-site/cms-uploads/media/Logo_File_7th_August_4ea73a2feb.svg"
            alt="OneAssure"
            className="h-8 w-[112px] object-contain sm:h-10 sm:w-[141px]"
          />
        </a>

        {/* <div className="ml-4 hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navItems.map((item) => (
            <ScrollNavItem
              key={item.label}
              label={item.label}
              targetId={item.targetId}
              className="text-sm font-medium text-neutral-1100 transition-colors duration-200 hover:text-primary-800"
            />
          ))}
        </div> */}

        <div className="ml-auto">
          <Button
            variant="default"
            type="button"
            className="h-10 rounded-full bg-primary-800 px-3.5 text-xs font-semibold text-white hover:scale-100 sm:h-[52px] sm:px-6 sm:text-sm"
          >
            Get Clarity Now
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_Pro;
