
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Trophy, Award, GraduationCap, Download, Link2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                I'm a passionate Full Stack Developer specializing in MERN stack and Java development. With a strong foundation in Computer Science from Amity University, I aim to build efficient and user-friendly web applications.
              </p>
              
              <p>
                My goal is to leverage my skills in web development to create impactful solutions while continuously enhancing my expertise in modern technologies.
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-semibold">Education</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <GraduationCap className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Bachelor of Technology in Computer Science and Engineering</h4>
                    <p className="text-gray-600">Amity University, Lucknow Campus Uttar Pradesh (2022-2026)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <GraduationCap className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">X (UP board)</h4>
                    <p className="text-gray-600">Modern School Balrampur (2020)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <GraduationCap className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">XII (UP board)</h4>
                    <p className="text-gray-600">Modern School Balrampur (2022)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Certifications & Achievements</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Award className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Cloud Computing (NPTEL Certified)</h4>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <Link2 size={16} /> Certificate Link
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Data Structures & Algorithms (Java) - Delta Course</h4>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Full Stack Web Development - Sigma 4.0 Course</h4>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Trophy className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Scored 95.06 percentile in Naakri Campus Young Turks Skill Contest</h4>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <Link2 size={16} /> Certificate Link
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Trophy className="text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Secured 3rd position in IEEE Quiz competition during IEEE Founder's Week (Oct 6)</h4>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1">
                      <Link2 size={16} /> Certificate Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2">
            <div className="aspect-square max-w-md mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Your Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
