import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookOpen, ExternalLink, FileText, Lightbulb, Target } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Research() {
  return (
    <section id="research" className="py-16 bg-gradient-to-r from-stone-50 to-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-academic-dark mb-4">
            Research & Publications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Md Rezwan Bin Mizan's mathematical research focuses on exploring computational frontiers through rigorous research and scholarly publications
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-academic-dark mb-6 flex items-center">
            <Lightbulb className="mr-2 h-6 w-6" />
            Research Interests
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.researchInterests.map((interest, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-academic-dark flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    {interest.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Publications */}
        <div>
          <h3 className="text-2xl font-semibold text-academic-dark mb-6 flex items-center">
            <BookOpen className="mr-2 h-6 w-6" />
            Publications
          </h3>
          <div className="space-y-6">
            {portfolioData.publications.map((publication, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-academic-dark mb-2">
                        {publication.title}
                      </CardTitle>
                      <p className="text-academic-blue font-medium mb-1">
                        {publication.authors}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">{publication.type}</span>
                        <span> ({publication.year})</span>
                      </p>
                      <p className="text-gray-600 text-sm mb-2">
                        {publication.reference}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Badge 
                        variant={publication.status === "Published" ? "default" : "secondary"}
                        className="whitespace-nowrap"
                      >
                        {publication.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {publication.url && (
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => window.open(publication.url, '_blank')}
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        {publication.status === "preprint" ? "View on arXiv" : "View Paper"}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}