import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ProductsPreview } from '@/components/home/ProductsPreview';
import { ContactCTA } from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProductsPreview />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
