
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Shashank Srivastava</a>
        
        <div className="hidden md:flex space-x-1">
          {[
            { id: 'home', label: 'Home' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className={cn(
                "px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 transition-colors relative group",
                activeSection === item.id && "text-indigo-600 font-medium"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 transition-transform duration-300 origin-left",
                activeSection === item.id && "scale-x-100"
              )}></span>
            </button>
          ))}
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-gray-700 hover:text-indigo-600 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="flex flex-col px-4 py-2 space-y-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={cn(
                  "py-3 px-4 rounded-md text-left text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all",
                  activeSection === item.id && "bg-indigo-50 text-indigo-600 font-medium"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
