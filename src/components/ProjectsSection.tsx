
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Book Nest - MERN Stack Project",
    description: "A full-stack web application for a structured book storage system with enhanced user experience.",
    features: [
      "Implemented dark mode for an enhanced user experience",
      "Integrated user authentication to restrict access to exclusive books",
      "Designed a structured book storage system for easy browsing",
      "Created a responsive and intuitive UI for seamless navigation"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "HTML/CSS"],
    imageUrl: "",
    liveUrl: "#",
    repoUrl: "https://github.com/moonbirds",
  },
  {
    id: 2,
    title: "Pass Op - Password Manager (MERN Stack)",
    description: "A secure password manager application with user authentication and encrypted password storage.",
    features: [
      "Built a secure password manager using MERN stack",
      "Stores encrypted passwords securely in MongoDB",
      "Implemented user authentication for secure access",
      "Designed a clean and user-friendly UI for easy password management",
      "Ensured data security using best practices"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Authentication"],
    imageUrl: "",
    liveUrl: "#",
    repoUrl: "https://github.com/moonbirds",
  },
  {
    id: 3,
    title: "Simon Says Game",
    description: "An interactive memory game where users replicate sequences of colors with animations and responsive design.",
    features: [
      "Developed an interactive memory game where users replicate sequences of colors",
      "Implemented game logic, animations, and responsive design for an engaging experience",
      "Enhanced user interaction with smooth transitions and visual feedback"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "",
    liveUrl: "#",
    repoUrl: "https://github.com/moonbirds",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">My Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and expertise in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-slate-200 bg-white rounded-xl hover:translate-y-[-5px]" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-slate-500 font-medium">{project.title} Screenshot</span>
                )}
              </div>
              
              <CardHeader className="pb-0">
                <CardTitle className="text-blue-700">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow pt-4">
                <CardDescription className="mb-4 text-slate-600">{project.description}</CardDescription>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 my-4 ml-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-slate-700">{feature}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2 pt-2">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild className="border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white transition-colors">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="outline" size="sm" asChild className="border-slate-500 text-slate-700 hover:bg-slate-500 hover:text-white transition-colors">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={14} />
                      View Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
