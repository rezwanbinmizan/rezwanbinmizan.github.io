import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export function Teaching() {
  const teachingData = {
    positions: [
      {
        title: "Graduate Teaching Assistant",
        institution: "University of Houston",
        department: "Department of Mathematics",
        period: "August 2021 - Present",
        responsibilities: [
          "Offered tutoring assistance to undergraduate students in Calculus I, Calculus II, Calculus III, Discrete Mathematics, Linear Algebra and Probability",
          "Helped students to grasp complex mathematical concepts, solve problems, and prepare for exams"
        ]
      },
      {
        title: "Lecturer",
        institution: "American International University-Bangladesh (AIUB)",
        department: "Department of Mathematics",
        period: "January 2018 - July 2021",
        courses: ["Differential Calculus", "Integral Calculus", "Ordinary Differential Equations", "Complex Variables", "Numerical Methods", "Linear Algebra"]
      }
    ],
    teachingPhilosophy: "I believe in making mathematics accessible and engaging through clear explanations, real-world applications, and encouraging student participation. My approach emphasizes building strong foundational understanding while fostering critical thinking skills."
  };

  return (
    <section id="teaching" className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-dark mb-4">
            Teaching Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Md Rezwan Bin Mizan is passionate about mathematics education and committed to helping students 
            develop strong analytical and problem-solving skills through engaging, student-centered teaching methods.
          </p>
        </div>

        {/* Teaching Positions */}
        <div className="mb-8 space-y-6">
          {teachingData.positions.map((position, index) => (
            <Card key={index} className="border-l-4 border-l-academic-blue">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-academic-dark flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      {position.title}
                    </CardTitle>
                    <p className="text-academic-blue font-medium">
                      {position.institution}
                    </p>
                    <p className="text-gray-600">
                      {position.department}
                    </p>
                  </div>
                  <Badge variant="secondary">{position.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {position.responsibilities && (
                  <ul className="space-y-2">
                    {position.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-academic-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}
                {position.courses && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Courses Taught:</p>
                    <div className="flex flex-wrap gap-2">
                      {position.courses.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-academic-dark flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Teaching Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 italic">{teachingData.teachingPhilosophy}</p>
          </CardContent>
        </Card>


      </div>
    </section>
  );
}