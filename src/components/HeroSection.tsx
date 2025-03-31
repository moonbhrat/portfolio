
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import MyImage from '../assets/profile.jpg';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-50 pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800">
              Hi, I'm <span className="font-bold text-blue-600">Shashank Srivastava</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700">
              Full Stack MERN Developer
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              "To leverage my skills in MERN stack and Java development to build efficient applications while continuously enhancing my expertise in web development."
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://github.com/moonbhrat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
                <Github size={20} />
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com/in/shashank-srivastava-3352b1321/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
                <span>Linkedin</span>
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Contact Me
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToProjects} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-200 flex items-center justify-center p-1 shadow-xl transform hover:rotate-3 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img src={MyImage} alt='Profile Image' height={"100%"} width={"100%"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
