
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[5%] top-[20%] w-64 h-64 bg-forest/5 blob"></div>
        <div className="absolute right-[15%] bottom-[10%] w-72 h-72 bg-bioluminescent/10 blob-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="nature-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 gradient-heading">
                Join the Regenerative Revolution
              </h2>
              <p className="text-lg text-forest/80 max-w-2xl mx-auto">
                We're pioneering a future where technology and nature don't just coexist—they co-evolve. 
                Partner with us to build ventures that regenerate our planet while creating sustainable prosperity.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-organic group">
                <span>Become a Partner</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-bio group">
                <span>Schedule a Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
