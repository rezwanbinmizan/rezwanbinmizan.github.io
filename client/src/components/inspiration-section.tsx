import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function InspirationSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-academic-blue/5 via-academic-sky/5 to-academic-blue/5">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-academic-blue to-academic-sky rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-white h-8 w-8" />
              </div>
            </div>
            
            <blockquote className="text-2xl lg:text-3xl font-light text-academic-dark leading-relaxed mb-6 italic">
              "Mathematics is not just about solving equations—it's about discovering patterns that unlock the mysteries of our physical world."
            </blockquote>
            
            <div className="w-24 h-1 bg-gradient-to-r from-academic-blue to-academic-sky mx-auto mb-6"></div>
            
            <p className="text-lg text-gray-600 font-medium">
              My Research Philosophy
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Bridging computational mathematics with real-world applications through reduced-order modeling
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="group">
                <div className="text-2xl font-bold text-academic-blue group-hover:scale-110 transition-transform">
                  🧮
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2">
                  Numerical Innovation
                </p>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-academic-sky group-hover:scale-110 transition-transform">
                  🌊
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2">
                  Fluid Dynamics
                </p>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-green-600 group-hover:scale-110 transition-transform">
                  🔬
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2">
                  Research Excellence
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}