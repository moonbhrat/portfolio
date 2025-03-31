
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Hi, I'm <span className="font-bold">Shashank Srivastava</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">
              Full Stack MERN Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              "To leverage my skills in MERN stack and Java development to build efficient applications while continuously enhancing my expertise in web development."
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://github.com/moonbirds" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
                <Github size={20} />
                <span>github.com/moonbirds</span>
              </a>
              <a href="https://www.linkedin.com/in/shashank-srivastava-335261321/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
                <Linkedin size={20} />
                <span>linkedin.com/in/shashank-srivastava</span>
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Contact Me
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToProjects} className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-1 shadow-xl transform hover:rotate-3 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <span className="text-xl text-gray-500">Your Image Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
