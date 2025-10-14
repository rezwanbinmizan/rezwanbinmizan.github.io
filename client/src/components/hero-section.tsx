import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function HeroSection() {
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    // Create a proper download link
    const link = document.createElement('a');
    link.href = '/attached_assets/Rezwan_CV_2025.pdf';
    link.download = 'Rezwan_CV_2025.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:col-span-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-academic-dark mb-6 leading-tight">
              {personal.name}
            </h1>
            <p className="text-xl text-academic-blue font-medium mb-6">
              {personal.title}
            </p>
            <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4">
              <p className="font-medium text-gray-700">
                Welcome
              </p>
              <p>
                I am Md Rezwan Bin Mizan, a PhD candidate in Mathematics at the University of Houston. My research lies in numerical analysis, data-driven modeling, and fluid dynamics, with a focus on developing Reduced-Order Models (ROMs) for parametric partial differential equations. These methods make it possible to simulate complex physical systems efficiently and support both theoretical work and real-world applications.
              </p>
              <p>
                Before starting my PhD, I worked as a lecturer at the American International University-Bangladesh (AIUB), where I developed a strong interest in teaching and mentoring students. I completed my BS and MS in Mathematics at the University of Dhaka, which laid the foundation for my research and academic goals. My work has appeared in peer-reviewed journals, and I stay active in the mathematical community as the treasurer of the University of Houston's AMS chapter.
              </p>
              <p>
                Outside academics, I enjoy cricket, exploring different cuisines, and learning about history.
              </p>
            </div>
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
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
