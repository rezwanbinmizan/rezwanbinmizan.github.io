import { Navigation } from "@/components/navigation";
import { Education } from "@/components/education";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Education />
      </div>
    </div>
  );
}