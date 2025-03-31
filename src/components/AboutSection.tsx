
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, GraduationCap, Download, Link2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">About Me</h2>
            
            <div className="space-y-4 text-slate-700 mb-8">
              <p className="text-lg">
                I'm a passionate Full Stack Developer specializing in MERN stack and Java development. With a strong foundation in Computer Science from Amity University, I aim to build efficient and user-friendly web applications.
              </p>
              
              <p className="text-lg">
                My goal is to leverage my skills in web development to create impactful solutions while continuously enhancing my expertise in modern technologies.
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-semibold text-blue-600">Education</h3>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3">
                    <GraduationCap className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Bachelor of Technology in Computer Science and Engineering</h4>
                      <p className="text-slate-600">Amity University, Lucknow Campus Uttar Pradesh (2022-2026)</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3">
                    <GraduationCap className="text-green-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">X (UP board)</h4>
                      <p className="text-slate-600">Modern School Balrampur (2020)</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-amber-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3">
                    <GraduationCap className="text-amber-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">XII (UP board)</h4>
                      <p className="text-slate-600">Modern School Balrampur (2022)</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600">Certifications & Achievements</h3>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3">
                    <Award className="text-green-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Cloud Computing (NPTEL Certified)</h4>
                      <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors">
                        <Link2 size={16} /> Certificate Link
                      </a>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3">
                    <Award className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Data Structures & Algorithms (Java) - Delta Course</h4>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-slate-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3">
                    <Award className="text-slate-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Full Stack Web Development - Sigma 4.0 Course</h4>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-amber-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3">
                    <Trophy className="text-amber-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Scored 95.06 percentile in Naakri Campus Young Turks Skill Contest</h4>
                      <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors">
                        <Link2 size={16} /> Certificate Link
                      </a>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-3">
                    <Trophy className="text-green-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Secured 3rd position in IEEE Quiz competition during IEEE Founder's Week (Oct 6)</h4>
                      <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors">
                        <Link2 size={16} /> Certificate Link
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                <Download size={16} />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 flex justify-center items-center">
            <div className="rounded-2xl overflow-hidden bg-slate-200 p-1 shadow-xl transform hover:rotate-3 transition-all duration-300">
              <div className="aspect-square max-w-md mx-auto bg-white rounded-xl flex items-center justify-center p-1">
                <span className="text-slate-500">Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
