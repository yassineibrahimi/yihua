import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ProductsPreview } from '@/components/home/ProductsPreview';
import { PartnersSection } from '@/components/home/PartnersSection';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { ProductionProcessSection } from '@/components/home/ProductionProcessSection';
import { ContactCTA } from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProductsPreview />
      <CapabilitiesSection />
      <ProductionProcessSection />
      <PartnersSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
