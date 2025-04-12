
import ConceptModule from './ConceptModule';
import { 
  Leaf, 
  Network, 
  Drone, 
  Server, 
  Globe 
} from 'lucide-react';

const ModulesSection = () => {
  return (
    <div id="modules" className="pt-16">
      <div className="container mx-auto px-4 md:px-6 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 gradient-heading">
            Core Concepts & Design Modules
          </h2>
          <p className="text-lg text-forest/80">
            Our integrated approach creates a new paradigm where technology and nature coexist in symbiotic harmony, not as opposing forces.
          </p>
        </div>
      </div>

      <ConceptModule
        id="innovation"
        title="Innovation Biomes"
        subtitle="Self-Sustaining Tech Campuses"
        description="Design and build revolutionary technology campuses rooted in biomimicry principles. These spaces combine cutting-edge innovation with natural systems that regenerate their surroundings, creating habitats that are both high-tech and deeply harmonious with nature."
        features={["Solar trees", "Algae walls", "Passive water loops", "Edible landscaping"]}
        icon={<Leaf className="w-10 h-10" />}
        color="forest"
      />

      <ConceptModule
        id="mycelial"
        title="Mycelial Supply Chains"
        subtitle="Nature-Mapped Logistics Grid"
        description="Reimagine supply chains as interconnected mycelial networks, creating circular systems that mimic the efficiency and resilience of fungal ecosystems. Our approach merges decentralized tracking with zero-waste packaging to form regenerative logistics systems."
        features={["Decentralized tracking", "Blockchain integration", "Zero-waste packaging", "Myco-packaging"]}
        icon={<Network className="w-10 h-10" />}
        reverse={true}
        color="earth"
      />

      <ConceptModule
        id="wild-tech"
        title="Wild-Tech Ventures"
        subtitle="Restoration-as-a-Service"
        description="Develop startups dedicated to active ecosystem restoration through innovative technologies. From drone-led rewilding to native seed propagation, these ventures transform conventional business models into regenerative forces for biodiversity and ecological health."
        features={["Drone-led rewilding", "Native seed tech", "Eco-engineered reforestation", "Biodiversity monitoring"]}
        icon={<Drone className="w-10 h-10" />}
        color="bioluminescent"
      />

      <ConceptModule
        id="data-hubs"
        title="Regenerative Data Hubs"
        subtitle="Integrated Energy & Food Systems"
        description="Build data centers that convert waste heat into resources for aquaponic food production. These innovative hubs transform digital infrastructure from energy consumers into closed-loop systems that produce both computational power and sustainable nutrition."
        features={["Heat-for-food systems", "Aquaponic greenhouses", "Geothermal + solar", "Self-cooling structures"]}
        icon={<Server className="w-10 h-10" />}
        reverse={true}
        color="forest"
      />

      <ConceptModule
        id="naas"
        title="Nature-as-a-Service (NaaS)"
        subtitle="Tokenized Land Regeneration"
        description="Create financial frameworks that properly value ecosystem services, translating natural capital into sustainable revenue streams. Our platforms enable the monetization of carbon sequestration, biodiversity enhancement, and water cycle restoration."
        features={["Carbon credits", "Biodiversity tokens", "Water cycle restoration", "Real-time impact tracking"]}
        icon={<Globe className="w-10 h-10" />}
        color="earth"
      />
    </div>
  );
};

export default ModulesSection;
