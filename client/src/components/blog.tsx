import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

export function Blog() {
  // Sample blog post structure for future use
  const blogPosts: BlogPost[] = [
    // {
    //   id: 1,
    //   title: "Understanding Reduced Order Models in CFD",
    //   excerpt: "An introduction to ROM techniques and their applications in computational fluid dynamics...",
    //   date: "January 15, 2025",
    //   readTime: "5 min read",
    //   category: "Research",
    //   link: "#"
    // }
  ];

  const upcomingTopics = [
    "Reduced Order Modeling techniques",
    "Proper Orthogonal Decomposition (POD)",
    "Computational Fluid Dynamics insights",
    "Mathematical modeling approaches",
    "Research experiences and tips",
    "Academic journey reflections"
  ];

  return (
    <section id="blog" className="py-16 bg-gradient-to-l from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Blog
        </h2>

        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                    <Button variant="ghost" size="sm" className="text-academic-blue">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-12 pb-12">
                <BookOpen className="h-16 w-16 text-academic-blue/30 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-academic-dark mb-4">
                  Blog Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  I'm planning to share insights from my research journey, mathematical concepts, 
                  and experiences in computational fluid dynamics. Stay tuned!
                </p>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-academic-dark mb-4">
                    Upcoming Topics:
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {upcomingTopics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}