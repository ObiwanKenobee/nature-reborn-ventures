
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ModulesSection from '@/components/ModulesSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ModulesSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
