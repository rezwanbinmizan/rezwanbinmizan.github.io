import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, MapPin, GraduationCap, Award, Sparkles } from "lucide-react";
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
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-academic-light via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-academic-blue rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-academic-sky rounded-full opacity-10 blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            {/* Achievement badges */}
            <div className="flex flex-wrap gap-2 mb-4 animate-fade-in">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                <Award className="w-3 h-3 mr-1" />
                PhD Candidate
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                <GraduationCap className="w-3 h-3 mr-1" />
                University of Houston
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <Sparkles className="w-3 h-3 mr-1" />
                AMS Treasurer
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-academic-dark mb-6 leading-tight bg-gradient-to-r from-academic-dark to-academic-blue bg-clip-text text-transparent animate-slide-up">
              {personal.name}
            </h1>
            <div className="flex items-center gap-2 mb-6 animate-slide-up animation-delay-200">
              <p className="text-xl text-academic-blue font-medium">
                {personal.title}
              </p>
              <div className="flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">Houston, TX</span>
              </div>
            </div>
            <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4 animate-slide-up animation-delay-400">
              <p className="bg-white/70 p-4 rounded-lg border-l-4 border-academic-blue shadow-sm">
                Welcome to the academic portfolio of <span className="font-semibold text-academic-dark">Md Rezwan Bin Mizan</span>. I am a PhD candidate in Mathematics at the University of Houston, where my research bridges <span className="text-academic-blue font-medium">numerical analysis, data-driven modeling, and fluid dynamics</span>. I specialize in developing Reduced-Order Models (ROMs) for parametric partial differential equations, enabling faster, more efficient simulations of complex physical systems for diverse applications.
              </p>
              <p className="bg-white/70 p-4 rounded-lg border-l-4 border-academic-sky shadow-sm">
                Prior to my doctoral studies, I served as a lecturer at the American International University-Bangladesh (AIUB) and earned my BS and MS in Mathematics from the University of Dhaka. These experiences solidified my dedication to teaching and collaborative research. My work has been <span className="text-green-700 font-medium">published in peer-reviewed journals</span>. I also contribute to the mathematical community as the <span className="text-academic-blue font-medium">treasurer of our local American Mathematical Society (AMS) chapter</span>.
              </p>
              <p className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-400 shadow-sm">
                Beyond academia, I am an avid <span className="text-orange-700 font-medium">cricket enthusiast</span>, a <span className="text-orange-700 font-medium">culinary explorer</span> always eager to discover new global flavors, and a passionate <span className="text-orange-700 font-medium">admirer of history</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-600">
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-academic-blue to-blue-600 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(personal.linkedin, "_blank")}
                className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button 
                variant="outline"
                onClick={handleContactMe}
                className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="relative animate-slide-up animation-delay-800">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-academic-blue to-academic-sky rounded-3xl opacity-20 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-academic-blue/10"></div>
                <img
                  src="/images/profile-1.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover aspect-square"
                />
                {/* Professional status overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <p className="text-sm font-medium text-academic-dark">
                      Specializing in Reduced-Order Modeling
                    </p>
                    <p className="text-xs text-gray-600">
                      Numerical Analysis & Fluid Dynamics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
