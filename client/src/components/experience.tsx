import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { Briefcase, GraduationCap, Presentation, Calendar } from "lucide-react";

export function Experience() {
  const { experience, presentations } = portfolioData;

  // Group presentations by year
  const groupedPresentations = presentations.reduce((acc, presentation) => {
    const year = new Date(presentation.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(presentation);
    return acc;
  }, {} as Record<string, typeof presentations>);

  const sortedYears = Object.keys(groupedPresentations).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section id="experience" className="py-16 bg-gradient-to-l from-blue-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="w-5 h-5 text-academic-blue mr-2" />
              <h3 className="text-xl font-semibold text-academic-dark">
                Professional Experience
              </h3>
            </div>
            <div className="space-y-4 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-2 top-6 w-4 h-4 bg-academic-blue rounded-full border-2 border-white shadow-sm"></div>
                  <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ml-10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-academic-dark">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-academic-blue font-medium mb-3">
                        {exp.organization}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Presentations & Conferences */}
          <div>
            <div className="flex items-center mb-6">
              <Presentation className="w-5 h-5 text-academic-blue mr-2" />
              <h3 className="text-xl font-semibold text-academic-dark">
                Presentations & Conferences
              </h3>
            </div>
            <div className="space-y-6">
              {sortedYears.map((year) => (
                <div key={year}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-academic-blue text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                      {year.slice(-2)}
                    </div>
                    <h4 className="text-lg font-medium text-gray-700">{year}</h4>
                    <div className="flex-1 h-px bg-gray-200 ml-4"></div>
                  </div>
                  <div className="space-y-4 ml-11">
                    {groupedPresentations[year].map((presentation, index) => (
                      <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h5 className="text-base font-semibold text-academic-dark leading-tight">
                              {presentation.title}
                            </h5>
                            <Badge 
                              className={`${
                                presentation.type === "Poster" 
                                  ? "bg-academic-blue text-white"
                                  : presentation.type === "Talk"
                                  ? "bg-green-600 text-white" 
                                  : "bg-purple-600 text-white"
                              } ml-2 shrink-0`}
                            >
                              {presentation.type}
                            </Badge>
                          </div>
                          <p className="text-academic-blue font-medium mb-2 text-sm">
                            {presentation.venue}
                          </p>
                          <p className="text-xs text-gray-500 mb-3">
                            {presentation.date}
                          </p>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {presentation.presentation}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
