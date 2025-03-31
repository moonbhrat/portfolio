
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">Portfolio</a>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button - can be expanded in the future */}
          <button className="text-gray-700">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
