// import { Announcement } from "../announcement";
// import ContactForm from "../contact-form";
// import Exclusives from "../exclusives";
// import { Features } from "../features";
// import Hero_ from "../hero_";
// // import Hero from "../hero";
// import { FooterLink } from "../FooterLink";
import { News } from "../news";
import RegulatoryTieups from "../regulatory-tieups";
import Hero from "../ui/hero";
// import { Footer } from "../footer";
// import ContactPage from "./contact";
import { NuqiPrive } from "../NuqiPrive";
import { ServicesSection } from "../ServicesSection";
import { GlobalMarketSection } from "../GlobalMarketSection";
import { PortfolioGrid } from "../PortfolioGrid"
// import AboutNuqi from "../AboutNuqi";
import { ImageCardContainer } from "../ImageCardContainer";
import { FAQSection } from "../FAQSection";
// import { FeatureCard } from "@/components/FeatureCard";
import { InvestmentFeatures } from "../InvestmentFeatures";
// shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Announcement /> */}
      <Hero />
      {/* <FeatureCard /> */}
      <InvestmentFeatures />
      {/* Add id to NuqiPrive section */}
      <section id="nuqiprive">
        <NuqiPrive />
      </section>
      <ServicesSection />
      <GlobalMarketSection />
      <section id="advisory">
        <PortfolioGrid />
      </section>
      {/* <AboutNuqi title={""} description={""}/> */}
      <FAQSection />
      {/* <InvestmentFeaturess/> */}
      {/* <Hero/> */}
      {/* <Hero_ /> */}
      {/* <Features /> */}
      <RegulatoryTieups />
      {/* <Video /> */}
      {/* <Screening /> */}
      {/* <Press /> */}
      {/* <Download /> */}
      {/* <Portfolio /> */}
      {/* <Exclusives /> */}
      <News />
      <ImageCardContainer />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;



