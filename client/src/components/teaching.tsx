import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

export function Teaching() {
  const positions = [
    {
      title: "Instructor of Record",
      institution: "University of Houston",
      department: "Department of Mathematics",
      period: "Aug 2025 – May 2026",
      responsibilities: [
        "Design and deliver a computation-driven linear algebra course integrating theoretical concepts with MATLAB-based applications.",
        "Develop assignments, exams, and coding projects emphasizing conceptual understanding and problem solving.",
        "Mentor students through office hours and support diverse learning needs."
      ],
      semesterCourses: [
        { term: "Fall 2025", course: "MATH 2131 – Linear Algebra with MATLAB" },
        { term: "Spring 2026", course: "MATH 2131 – Linear Algebra with MATLAB" }
      ]
    },
    {
      title: "Graduate Teaching Assistant",
      institution: "University of Houston",
      department: "Department of Mathematics",
      period: "Aug 2021 – May 2024",
      responsibilities: [
        "Led Calculus I–III lab sessions and supported instruction across multiple undergraduate courses.",
        "Provided tutoring at CASA and assisted students with diverse mathematical backgrounds.",
        "Evaluated coursework in calculus, discrete mathematics, probability, and linear algebra."
      ],
      semesterCourses: [
        { term: "Fall 2021", course: "MATH 2413 – Calculus I" },
        { term: "Spring 2022", course: "MATH 2413 – Calculus I; MATH 3336 – Discrete Mathematics" },
        { term: "Summer 2022", course: "MATH 3338 – Probability (grader/tutor)" },
        { term: "Fall 2022", course: "MATH 3338 – Probability (grader/tutor)" },
        { term: "Spring 2023", course: "MATH 2414 – Calculus II" },
        { term: "Summer 2023", course: "MATH 4380 – Survey of Mathematics (grader/tutor)" },
        { term: "Fall 2023", course: "MATH 4380 – Survey of Mathematics (grader/tutor)" },
        { term: "Spring 2024", course: "MATH 2305 – Discrete Mathematics" },
        { term: "Fall 2024", course: "MATH 2318 – Linear Algebra" },
        { term: "Summer 2025", course: "MATH 2415 – Calculus III" }
      ]
    },
    {
      title: "Lecturer",
      institution: "American International University–Bangladesh (AIUB)",
      department: "Department of Mathematics",
      period: "Jan 2018 – Jul 2021",
      courses: ["Differential Calculus", "Integral Calculus", "Ordinary Differential Equations", "Complex Variables", "Numerical Methods", "Linear Algebra"]
    }
  ];

  const teachingPhilosophy = "I believe in making mathematics accessible and engaging through clear explanations, real-world applications, and encouraging student participation. My approach emphasizes building strong foundational understanding while fostering critical thinking skills.";

  return (
    <section id="teaching" className="py-16 bg-gradient-to-r from-zinc-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-dark mb-4">
            Teaching Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about mathematics education and committed to helping students
            develop strong analytical and problem-solving skills through engaging, student-centered teaching methods.
          </p>
        </div>

        <div className="mb-8 space-y-6">
          {positions.map((position, index) => (
            <Card key={index} className="border-l-4 border-l-academic-blue">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl text-academic-dark flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      {position.title}
                    </CardTitle>
                    <p className="text-academic-blue font-medium">{position.institution}</p>
                    <p className="text-gray-600 text-sm">{position.department}</p>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap">{position.period}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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

                {position.semesterCourses && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Courses Taught:</p>
                    <div className="rounded-md border border-gray-100 overflow-hidden">
                      <table className="w-full text-sm">
                        <tbody>
                          {position.semesterCourses.map((entry, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="py-1.5 px-3 font-medium text-gray-600 whitespace-nowrap w-36 italic">{entry.term}</td>
                              <td className="py-1.5 px-3 text-gray-700">{entry.course}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
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

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-academic-dark flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Teaching Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 italic">{teachingPhilosophy}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
