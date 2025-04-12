
import { useState, useEffect } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-forest" />
            <span className="font-playfair text-xl font-semibold text-forest">Zero to Nature</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#innovation" className="text-forest/80 hover:text-forest transition-colors">Innovation Biomes</a>
            <a href="#mycelial" className="text-forest/80 hover:text-forest transition-colors">Mycelial Networks</a>
            <a href="#wild-tech" className="text-forest/80 hover:text-forest transition-colors">Wild-Tech</a>
            <a href="#data-hubs" className="text-forest/80 hover:text-forest transition-colors">Data Hubs</a>
            <a href="#naas" className="text-forest/80 hover:text-forest transition-colors">NaaS</a>
            <button className="btn-organic">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-forest p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-forest/10 animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <a href="#innovation" className="block text-forest/80 hover:text-forest transition-colors py-2">Innovation Biomes</a>
            <a href="#mycelial" className="block text-forest/80 hover:text-forest transition-colors py-2">Mycelial Networks</a>
            <a href="#wild-tech" className="block text-forest/80 hover:text-forest transition-colors py-2">Wild-Tech</a>
            <a href="#data-hubs" className="block text-forest/80 hover:text-forest transition-colors py-2">Data Hubs</a>
            <a href="#naas" className="block text-forest/80 hover:text-forest transition-colors py-2">NaaS</a>
            <button className="btn-organic w-full mt-4">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
