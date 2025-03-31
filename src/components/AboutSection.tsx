
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="aspect-square max-w-md mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Your Photo</span>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Hello! I'm a passionate web developer with over 5 years of experience in creating responsive and user-friendly websites and applications.
              </p>
              
              <p>
                My journey in web development started when I was in college, and since then, I've worked on various projects ranging from simple landing pages to complex web applications.
              </p>
              
              <p>
                I specialize in front-end development with React and have experience with back-end technologies like Node.js and Express. I'm always eager to learn new technologies and improve my skills.
              </p>
              
              <p>
                When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the kitchen.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="mr-4">Download CV</Button>
              <Button>Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
