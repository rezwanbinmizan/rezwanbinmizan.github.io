import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Award, Calendar, MapPin } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: GraduationCap,
      value: "PhD",
      label: "Mathematics Candidate",
      description: "University of Houston",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      value: "5+",
      label: "Research Publications",
      description: "Peer-reviewed journals",
      color: "bg-green-500"
    },
    {
      icon: Users,
      value: "100+",
      label: "Students Taught",
      description: "As university lecturer",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      value: "AMS",
      label: "Treasurer Position",
      description: "Local chapter leadership",
      color: "bg-yellow-500"
    },
    {
      icon: Calendar,
      value: "5+",
      label: "Years Experience",
      description: "Teaching & research",
      color: "bg-indigo-500"
    },
    {
      icon: MapPin,
      value: "3",
      label: "Countries",
      description: "Academic experience",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-academic-light via-blue-50 to-academic-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-dark mb-4">
            Academic Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A snapshot of professional milestones and research contributions in mathematics and numerical analysis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-academic-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-academic-blue mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Quick highlights */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
              🔬 Reduced-Order Modeling Expert
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
              📊 Data-Driven Modeling
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
              🌊 Fluid Dynamics Research
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 px-4 py-2">
              🧮 Numerical Analysis
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}