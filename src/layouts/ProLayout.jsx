import Footer from "@/components/Footer";
import Navbar_Pro from "@/components/OneAssureProPage/components/common/Navbar_Pro";

export default function ProLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar_Pro />
      <main className="min-h-screen flex-1 bg-neutral-000 pt-24 overflow-x-clip md:px-6 md:pt-31.5 lg:px-8 lg:pt-31">
        {children}
      </main>
      <Footer />
    </div>
  );
}
