
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'Express', level: 65, category: 'backend' },
  { name: 'MongoDB', level: 60, category: 'backend' },
  { name: 'UI/UX Design', level: 75, category: 'design' },
  { name: 'Figma', level: 70, category: 'design' },
  { name: 'Git/GitHub', level: 80, category: 'other' },
];

const SkillsSection = () => {
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in web development. Here's a snapshot of my technical skills.
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
            {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Express', 'Git', 'Figma', 'VS Code', 'npm', 'Webpack'].map((tool) => (
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
