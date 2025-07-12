import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";

export function Experience() {
  const { experience, presentations } = portfolioData;

  return (
    <section id="experience" className="py-16 bg-gradient-to-l from-yellow-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="text-xl font-semibold text-academic-dark mb-6">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-academic-dark">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-academic-blue font-medium mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Presentations & Conferences */}
          <div>
            <h3 className="text-xl font-semibold text-academic-dark mb-6">
              Presentations & Conferences
            </h3>
            <div className="space-y-6">
              {presentations.map((presentation, index) => (
                <Card key={index} className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-academic-dark">
                        {presentation.title}
                      </h4>
                      <Badge 
                        className={`${
                          presentation.type === "Poster" 
                            ? "bg-academic-blue text-white"
                            : presentation.type === "Talk"
                            ? "bg-green-600 text-white" 
                            : "bg-academic-sky text-white"
                        }`}
                      >
                        {presentation.type}
                      </Badge>
                    </div>
                    <p className="text-academic-blue font-medium mb-2">
                      {presentation.venue}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {presentation.date}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {presentation.presentation}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
