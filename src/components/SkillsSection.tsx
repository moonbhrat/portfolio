
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'technical' | 'platform' | 'soft';
}

const skills: Skill[] = [
  // Languages
  { name: 'Java', level: 85, category: 'languages' },
  { name: 'JavaScript', level: 85, category: 'languages' },
  
  // Technical Skills
  { name: 'HTML5', level: 90, category: 'technical' },
  { name: 'CSS', level: 85, category: 'technical' },
  { name: 'MongoDB', level: 80, category: 'technical' },
  { name: 'React.js', level: 85, category: 'technical' },
  { name: 'Express.js', level: 80, category: 'technical' },
  { name: 'Node.js', level: 80, category: 'technical' },
  { name: 'DBMS', level: 75, category: 'technical' },
  { name: 'Networking', level: 70, category: 'technical' },
  
  // Platforms
  { name: 'Visual Studio Code', level: 90, category: 'platform' },
  { name: 'IntelliJ IDEA', level: 85, category: 'platform' },
  
  // Soft Skills
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Communication', level: 85, category: 'soft' },
];

const SkillsSection = () => {
  const categories = [
    { id: 'languages', label: 'Programming Languages' },
    { id: 'technical', label: 'Technical Skills' },
    { id: 'platform', label: 'Development Platforms' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've worked with various technologies and tools in web development. Here's a snapshot of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category) => (
            <Card key={category.id} className="shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">{category.label}</h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Java', 'JavaScript', 'HTML5', 'CSS', 'MongoDB', 'React.js', 'Express.js', 'Node.js', 'DBMS', 'VS Code', 'IntelliJ IDEA'].map((tool) => (
              <Badge key={tool} variant="outline" className="text-sm py-1 px-3 bg-white">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
