import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ResearchInterests } from "@/components/research-interests";
import { Publications } from "@/components/publications";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { PhotoGallery } from "@/components/photo-gallery";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <Publications />
      <Education />
      <Experience />
      <PhotoGallery />
      <ResearchInterests />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-academic-dark text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              © 2025 Md Rezwan Bin Mizan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              PhD Candidate in Mathematics | University of Houston
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
