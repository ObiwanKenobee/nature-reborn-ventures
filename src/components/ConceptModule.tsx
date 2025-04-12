
import { ReactNode } from 'react';

interface ConceptModuleProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: ReactNode;
  reverse?: boolean;
  color: 'forest' | 'earth' | 'bioluminescent';
}

const ConceptModule = ({
  id,
  title,
  subtitle,
  description,
  features,
  icon,
  reverse = false,
  color
}: ConceptModuleProps) => {
  
  const getColorClasses = () => {
    switch (color) {
      case 'forest':
        return {
          bg: 'bg-forest/5',
          accent: 'bg-forest',
          text: 'text-forest',
          border: 'border-forest/20',
          button: 'btn-organic'
        };
      case 'earth':
        return {
          bg: 'bg-earth/5',
          accent: 'bg-earth',
          text: 'text-earth-DEFAULT',
          border: 'border-earth/20',
          button: 'btn-earth'
        };
      case 'bioluminescent':
        return {
          bg: 'bg-bioluminescent/5',
          accent: 'bg-bioluminescent',
          text: 'text-bioluminescent',
          border: 'border-bioluminescent/20',
          button: 'btn-bio'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
          
          {/* Image/Visual Side */}
          <div className="w-full md:w-5/12">
            <div className={`${colorClasses.bg} p-8 rounded-3xl blob-slow relative overflow-hidden group h-[400px] flex items-center justify-center`}>
              <div className={`absolute inset-0 ${colorClasses.bg} opacity-50 transition-opacity duration-500 group-hover:opacity-70`}></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div className={`w-20 h-20 ${colorClasses.accent} rounded-full flex items-center justify-center text-white`}>
                    {icon}
                  </div>
                </div>
                <h3 className={`${colorClasses.text} text-2xl font-playfair font-bold mb-2`}>{subtitle}</h3>
                
                <div className="mt-6 space-y-2">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className={`${colorClasses.bg} ${colorClasses.border} border px-4 py-2 rounded-full inline-block mr-2 mb-2 text-sm`}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 gradient-heading">{title}</h2>
            <p className="text-lg text-forest/80 mb-8">{description}</p>
            
            <button className={`${colorClasses.button}`}>
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ConceptModule;
