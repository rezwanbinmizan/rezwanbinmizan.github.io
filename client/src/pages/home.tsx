import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { Research } from "@/components/research";
import { Education } from "@/components/education";
import { Teaching } from "@/components/teaching";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { InspirationSection } from "@/components/inspiration-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <Research />
      <Education />
      <Teaching />
      <Experience />
      <Skills />
      <InspirationSection />
      <PhotoGallery />
      <Blog />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-academic-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Md Rezwan Bin Mizan</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Md Rezwan Bin Mizan is a PhD candidate in Mathematics at the University of Houston, 
                focused on advanced numerical methods and reduced-order modeling for complex physical systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Reduced Order Models</li>
                <li>• Computational Fluid Dynamics</li>
                <li>• Deep Learning Applications</li>
                <li>• Mathematical Modeling</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Academic Affiliation</h3>
              <p className="text-gray-300 text-sm">
                University of Houston<br />
                Department of Mathematics<br />
                PhD Candidate & Research Assistant
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 mb-2">
              © 2025 Md Rezwan Bin Mizan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Academic Portfolio | PhD Candidate in Mathematics | University of Houston
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
