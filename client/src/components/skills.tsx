import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Settings, Microscope, Trophy, GraduationCap, Award, Handshake } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Skills() {
  const { skills, awards } = portfolioData;

  const awardIcons = [Trophy, GraduationCap, Award, Handshake];
  const awardColors = [
    "bg-yellow-500",
    "bg-academic-blue", 
    "bg-green-600",
    "bg-academic-sky"
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-dark mb-4">
            Skills & Technical Proficiencies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical expertise across programming languages, research tools, and mathematical software
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-academic-blue to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <Code className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-academic-dark">
                  Programming Languages
                </h3>
              </div>
              <div className="space-y-3">
                {skills.programming.map((lang, index) => (
                  <div key={index} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium group-hover:text-academic-blue transition-colors">{lang.name}</span>
                      <span className="text-xs font-semibold text-academic-blue bg-blue-100 px-2 py-1 rounded-full">{lang.level}%</span>
                    </div>
                    <Progress value={lang.level} className="h-3 bg-gray-200" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Software Skills */}
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-academic-sky to-blue-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <Settings className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-academic-dark">
                  Software & Tools
                </h3>
              </div>
              <div className="space-y-3">
                {skills.software.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2 hover:bg-academic-blue hover:text-white transition-colors cursor-default transform hover:scale-105">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Research Areas */}
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <Microscope className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-academic-dark">
                  Research Expertise
                </h3>
              </div>
              <div className="space-y-3">
                {skills.research.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2 hover:bg-green-600 hover:text-white transition-colors cursor-default transform hover:scale-105">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Awards & Achievements */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-academic-dark mb-8 text-center">
            Awards & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const IconComponent = awardIcons[index];
              const colorClass = awardColors[index];
              
              return (
                <Card key={index} className="bg-academic-light">
                  <CardContent className="p-6 flex items-center">
                    <div className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-academic-dark">
                        {award.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {award.organization} ({award.period})
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
