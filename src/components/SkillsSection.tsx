
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
    { id: 'languages', label: 'Programming Languages', color: 'bg-blue-600' },
    { id: 'technical', label: 'Technical Skills', color: 'bg-green-600' },
    { id: 'platform', label: 'Development Platforms', color: 'bg-amber-600' },
    { id: 'soft', label: 'Soft Skills', color: 'bg-slate-600' },
  ];

  const getProgressColor = (category: string) => {
    switch(category) {
      case 'languages': return 'bg-blue-600';
      case 'technical': return 'bg-green-600';
      case 'platform': return 'bg-amber-600';
      case 'soft': return 'bg-slate-600';
      default: return 'bg-blue-600';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">My Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I've worked with various technologies and tools in web development. Here's a snapshot of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <Card key={category.id} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:translate-y-[-5px]" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`h-2 w-full ${category.color}`}></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-slate-800">{category.label}</h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <div key={skill.name} className="transform transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-slate-800">{skill.name}</span>
                          <span className="text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getProgressColor(skill.category)} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center text-slate-800">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Java', 'JavaScript', 'HTML5', 'CSS', 'MongoDB', 'React.js', 'Express.js', 'Node.js', 'DBMS', 'VS Code', 'IntelliJ IDEA'].map((tool, index) => (
              <Badge 
                key={tool} 
                variant="outline" 
                className="text-sm py-1.5 px-4 bg-white border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
                style={{animationDelay: `${index * 0.05}s`}}
              >
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
