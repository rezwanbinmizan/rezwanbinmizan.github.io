import { Navigation } from "@/components/navigation";
import { Research } from "@/components/research";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Research />
      </div>
    </div>
  );
}