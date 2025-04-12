
import { Sprout, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand/About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-6 w-6 text-forest" />
              <span className="font-playfair text-xl font-semibold text-forest">Zero to Nature</span>
            </div>
            <p className="text-forest/70 mb-6">
              Building regenerative tech ecosystems that revive, restore, and harmonize with nature.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest/60 hover:text-forest transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest/60 hover:text-forest transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest/60 hover:text-forest transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-forest">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#innovation" className="text-forest/70 hover:text-forest transition-colors">Innovation Biomes</a></li>
              <li><a href="#mycelial" className="text-forest/70 hover:text-forest transition-colors">Mycelial Networks</a></li>
              <li><a href="#wild-tech" className="text-forest/70 hover:text-forest transition-colors">Wild-Tech Ventures</a></li>
              <li><a href="#data-hubs" className="text-forest/70 hover:text-forest transition-colors">Data Hubs</a></li>
              <li><a href="#naas" className="text-forest/70 hover:text-forest transition-colors">Nature-as-a-Service</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-forest">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-forest/70 hover:text-forest transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-forest/70 hover:text-forest transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-forest/70 hover:text-forest transition-colors">Sustainability Report</a></li>
              <li><a href="#" className="text-forest/70 hover:text-forest transition-colors">Partner Network</a></li>
              <li><a href="#" className="text-forest/70 hover:text-forest transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-forest">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-forest mr-3 mt-0.5" />
                <span className="text-forest/70">hello@zerotonatrue.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-forest mr-3 mt-0.5" />
                <span className="text-forest/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-forest mr-3 mt-0.5" />
                <span className="text-forest/70">1234 Biomimicry Way<br />Sustainable Valley, CA 94123</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-forest/10 text-center text-forest/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Zero to Nature. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-forest transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-forest transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-forest transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
