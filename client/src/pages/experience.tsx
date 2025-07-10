import { Navigation } from "@/components/navigation";
import { Experience } from "@/components/experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Experience />
      </div>
    </div>
  );
}