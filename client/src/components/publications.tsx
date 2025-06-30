import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Publications() {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="py-16 bg-academic-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Publications
        </h2>
        <div className="space-y-8">
          {publications.map((publication, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    className={`${
                      publication.status === "published" 
                        ? "bg-green-600 text-white" 
                        : "bg-academic-blue text-white"
                    }`}
                  >
                    {publication.year}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {publication.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-academic-dark mb-3">
                  {publication.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Authors:</strong> {publication.authors}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {publication.reference}
                </p>
                <div className="flex gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-academic-blue hover:text-blue-700"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    View Paper
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-academic-blue hover:text-blue-700"
                  >
                    <Quote className="mr-1 h-4 w-4" />
                    Cite
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
