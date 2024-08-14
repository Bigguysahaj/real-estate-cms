import { AccordionComponent } from "@/components/homepage/accordion-component"
import BlogSample from "@/components/homepage/blog-samples"
import HeroSection from "@/components/homepage/hero-section"
import MarketingCards from "@/components/homepage/marketing-cards"
import Pricing from "@/components/homepage/pricing"
import SideBySide from "@/components/homepage/side-by-side"
import PageWrapper from "@/components/wrapper/page-wrapper"
import config from "@/config"
import Dashboard from "./dashboard/page"

export default function Home() {
  return (
    <PageWrapper>
      <Dashboard />
    </PageWrapper>
  )
}
