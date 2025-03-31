
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-primary">Shashank Srivastava</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">
              Full Stack MERN Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              "To leverage my skills in MERN stack and Java development to build efficient applications while continuously enhancing my expertise in web development."
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://github.com/moonbirds" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                <Github size={20} />
                <span>github.com/moonbirds</span>
              </a>
              <a href="https://www.linkedin.com/in/shashank-srivastava-335261321/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span>linkedin.com/in/shashank-srivastava</span>
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <Button onClick={scrollToContact} size="lg">
                Contact Me
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToProjects}>
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl text-gray-500">Your Image Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
