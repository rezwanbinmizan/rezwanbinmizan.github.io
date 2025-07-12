import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 bg-gradient-to-l from-gray-50 to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Education
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-academic-blue hidden md:block"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-6">
                <div className="md:w-24 flex-shrink-0">
                  <div className={`w-8 h-8 ${
                    index === 0 ? "bg-academic-blue" : "bg-academic-sky"
                  } rounded-full hidden md:block relative -left-4`}></div>
                  <div className="text-sm font-medium text-academic-blue mt-2">
                    {edu.period}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="bg-academic-light">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-academic-dark mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-academic-blue font-medium mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {edu.status}
                      </p>
                      {edu.gpa && (
                        <p className="text-gray-600 mb-4">
                          GPA: {edu.gpa}
                        </p>
                      )}
                      <div className="text-sm text-gray-600">
                        {edu.advisor && (
                          <p><strong>Advisor:</strong> {edu.advisor}</p>
                        )}
                        {edu.coAdvisor && (
                          <p><strong>Co-Advisor:</strong> {edu.coAdvisor}</p>
                        )}
                        {edu.thesis && (
                          <p><strong>Thesis:</strong> {edu.thesis}</p>
                        )}
                        {edu.project && (
                          <p><strong>Project:</strong> {edu.project}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
