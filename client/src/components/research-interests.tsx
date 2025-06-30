import { Card, CardContent } from "@/components/ui/card";
import { Box, Wind, Brain, TrendingUp } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const iconMap = {
  cube: Box,
  wind: Wind,
  brain: Brain,
  "chart-line": TrendingUp
};

export function ResearchInterests() {
  const { researchInterests } = portfolioData;

  return (
    <section id="research" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Research Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchInterests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
            const colors = [
              "bg-academic-blue",
              "bg-academic-sky", 
              "bg-academic-blue",
              "bg-academic-sky"
            ];
            
            return (
              <Card key={index} className="bg-academic-light hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${colors[index]} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-academic-dark mb-3">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
