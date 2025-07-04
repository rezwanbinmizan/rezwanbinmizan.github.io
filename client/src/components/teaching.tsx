import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export function Teaching() {
  const teachingData = {
    currentPosition: {
      title: "Graduate Teaching Assistant",
      institution: "University of Houston",
      department: "Department of Mathematics",
      period: "2019 - Present",
      description: "Providing academic support and instruction to undergraduate students in mathematics courses."
    },
    courses: [
      {
        code: "MATH 1431",
        name: "Calculus I",
        level: "Undergraduate",
        semesters: ["Fall 2023", "Spring 2024"],
        topics: ["Limits", "Derivatives", "Applications of Derivatives", "Integrals"]
      },
      {
        code: "MATH 1432",
        name: "Calculus II", 
        level: "Undergraduate",
        semesters: ["Fall 2022", "Spring 2023"],
        topics: ["Integration Techniques", "Series", "Parametric Equations", "Polar Coordinates"]
      },
      {
        code: "MATH 2433",
        name: "Calculus III",
        level: "Undergraduate", 
        semesters: ["Fall 2021", "Spring 2022"],
        topics: ["Multivariable Calculus", "Vector Fields", "Line Integrals", "Surface Integrals"]
      }
    ],
    teachingPhilosophy: "I believe in making mathematics accessible and engaging through clear explanations, real-world applications, and encouraging student participation. My approach emphasizes building strong foundational understanding while fostering critical thinking skills.",
    achievements: [
      "Consistently high student evaluation scores (4.5+/5.0)",
      "Mentored undergraduate students in research projects",
      "Developed supplementary materials for calculus courses",
      "Led review sessions and study groups"
    ]
  };

  return (
    <section id="teaching" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-dark mb-4">
            Teaching Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about mathematics education and committed to helping students 
            develop strong analytical and problem-solving skills.
          </p>
        </div>

        {/* Current Position */}
        <Card className="mb-8 border-l-4 border-l-academic-blue">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl text-academic-dark flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  {teachingData.currentPosition.title}
                </CardTitle>
                <p className="text-academic-blue font-medium">
                  {teachingData.currentPosition.institution}
                </p>
                <p className="text-gray-600">
                  {teachingData.currentPosition.department}
                </p>
              </div>
              <Badge variant="secondary">{teachingData.currentPosition.period}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{teachingData.currentPosition.description}</p>
          </CardContent>
        </Card>

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

        {/* Courses Taught */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-academic-dark mb-6 flex items-center">
            <Users className="mr-2 h-6 w-6" />
            Courses Taught
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachingData.courses.map((course, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-academic-dark">
                        {course.code}
                      </CardTitle>
                      <p className="text-gray-600 font-medium">{course.name}</p>
                    </div>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Semesters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {course.semesters.map((semester, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {semester}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Key Topics:</p>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        {course.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-academic-blue rounded-full mr-2"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-academic-dark flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Teaching Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {teachingData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-academic-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}