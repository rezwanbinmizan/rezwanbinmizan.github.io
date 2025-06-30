import { Button } from "@/components/ui/button";
import { Download, Mail, User } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function HeroSection() {
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV file
    window.open("/cv.pdf", "_blank");
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-academic-light to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-academic-dark mb-6 leading-tight">
              {personal.name}
            </h1>
            <p className="text-xl text-academic-blue font-medium mb-6">
              {personal.title}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {personal.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleDownloadCV}
                className="bg-academic-blue text-white hover:bg-blue-700 transition-colors font-medium"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline"
                onClick={handleContactMe}
                className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white transition-colors font-medium"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center text-gray-500">
              <div className="text-center">
                <User className="mx-auto mb-4 h-16 w-16" />
                <p className="text-sm">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
