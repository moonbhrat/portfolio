
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
    { id: 'languages', label: 'Programming Languages', gradient: 'from-blue-500 to-indigo-600' },
    { id: 'technical', label: 'Technical Skills', gradient: 'from-indigo-500 to-purple-600' },
    { id: 'platform', label: 'Development Platforms', gradient: 'from-purple-500 to-pink-600' },
    { id: 'soft', label: 'Soft Skills', gradient: 'from-pink-500 to-rose-600' },
  ];

  const getProgressColor = (category: string) => {
    switch(category) {
      case 'languages': return 'bg-gradient-to-r from-blue-500 to-indigo-600';
      case 'technical': return 'bg-gradient-to-r from-indigo-500 to-purple-600';
      case 'platform': return 'bg-gradient-to-r from-purple-500 to-pink-600';
      case 'soft': return 'bg-gradient-to-r from-pink-500 to-rose-600';
      default: return 'bg-indigo-600';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">My Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've worked with various technologies and tools in web development. Here's a snapshot of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <Card key={category.id} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:translate-y-[-5px]" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`h-2 w-full bg-gradient-to-r ${category.gradient}`}></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">{category.label}</h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <div key={skill.name} className="transform transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
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
          <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Java', 'JavaScript', 'HTML5', 'CSS', 'MongoDB', 'React.js', 'Express.js', 'Node.js', 'DBMS', 'VS Code', 'IntelliJ IDEA'].map((tool, index) => (
              <Badge 
                key={tool} 
                variant="outline" 
                className="text-sm py-1.5 px-4 bg-white border-indigo-200 hover:bg-indigo-50 transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
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
