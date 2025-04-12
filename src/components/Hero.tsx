
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToModules = () => {
    const modulesSection = document.getElementById('modules');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] w-64 h-64 bg-forest/5 blob"></div>
        <div className="absolute right-[5%] top-[30%] w-72 h-72 bg-earth/10 blob-slow"></div>
        <div className="absolute left-[20%] bottom-[10%] w-48 h-48 bg-bioluminescent/10 blob"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight gradient-heading animate-fade-in">
            Zero to Nature
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-forest/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building Regenerative Tech Ecosystems That Harmonize With Nature
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-forest/70 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            We're not simply reducing environmental harm—we're actively reviving, regenerating, and creating a radically new category of technology ventures where nature is a co-founder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="btn-organic">
              Join Our Mission
            </button>
            <button className="btn-earth">
              Explore Ventures
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-pulse-gentle">
        <button 
          onClick={scrollToModules} 
          className="flex flex-col items-center text-forest/70 hover:text-forest transition-colors"
        >
          <span className="text-sm mb-2">Discover Our Modules</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
