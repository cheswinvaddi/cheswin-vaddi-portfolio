import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSections } from "@/components/portfolio-sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <PortfolioSections />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
