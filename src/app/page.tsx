import { AboutCards } from "@/components/about-cards";
import HeroSection from "@/components/hero-section";
import { LinkPreviewHome } from "@/components/link-preview-home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-5xl px-6 py-28 lg:py-20">
        <AboutCards />
      </div>
      <div>
        <LinkPreviewHome />
      </div>
    </>
  );
}
