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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Skills & Technical Proficiencies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="bg-academic-light">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-academic-blue rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-white h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-academic-dark">
                  Programming Languages
                </h3>
              </div>
              <div className="space-y-3">
                {skills.programming.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{lang.name}</span>
                      <span className="text-xs text-gray-500">{lang.level}%</span>
                    </div>
                    <Progress value={lang.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Software Skills */}
          <Card className="bg-academic-light">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-academic-sky rounded-lg flex items-center justify-center mr-3">
                  <Settings className="text-white h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-academic-dark">
                  Software & Tools
                </h3>
              </div>
              <div className="space-y-3">
                {skills.software.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Research Areas */}
          <Card className="bg-academic-light">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <Microscope className="text-white h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-academic-dark">
                  Research Expertise
                </h3>
              </div>
              <div className="space-y-3">
                {skills.research.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
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
