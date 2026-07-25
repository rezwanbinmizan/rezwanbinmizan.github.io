import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function HeroSection() {
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    // Create a proper download link
    const link = document.createElement('a');
    link.href = '/attached_assets/CV_MD_REZWAN_1784954995720.pdf';
    link.download = 'CV_MD_Rezwan.pdf';
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
                I am Md Rezwan Bin Mizan, a recent PhD graduate in Mathematics from the University of Houston, where I defended my dissertation, "Parametric Low-Rank Model Reduction for Nonlinear Fluid Systems." My research lies in numerical analysis, data-driven modeling, and fluid dynamics. I develop reduced-order models (ROMs) for parametric nonlinear partial differential equations, using both projection-based and tensor low-rank approaches. These methods make it possible to simulate complex physical systems efficiently and support both theoretical work and real-world applications. My work has appeared in peer-reviewed journals including Computers & Fluids and Applied Mathematics and Computation.
              </p>
              <p>
                Alongside my research, I have taught undergraduate mathematics in a variety of settings. I served as a lecturer at the American International University-Bangladesh (AIUB) from 2018 to 2021, and during my doctoral studies I taught at the University of Houston as both a teaching assistant and an instructor of record.
              </p>
              <p>
                I earned my BS in Mathematics and MS in Applied Mathematics at the University of Dhaka, followed by a second MS in Applied Mathematics at the University of Houston. I remain active in the mathematical community, having served as treasurer of the University of Houston's AMS chapter.
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
