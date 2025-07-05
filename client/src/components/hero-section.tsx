import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function HeroSection() {
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    // Download the actual uploaded CV file
    window.open("/attached_assets/Rezwan_CV_1751649977158.pdf", "_blank");
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
              Welcome to the academic portfolio of {personal.name}. {personal.summary}
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
                onClick={() => window.open(personal.linkedin, "_blank")}
                className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white transition-colors font-medium"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/profile-1.jpg"
                alt={personal.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
