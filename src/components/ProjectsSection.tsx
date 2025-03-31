
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully functional e-commerce platform with product listings, shopping cart, and checkout process.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app to manage tasks, projects, and deadlines with a clean and intuitive UI.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    imageUrl: "",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills with a modern design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Project Image</span>
                )}
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button>View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
