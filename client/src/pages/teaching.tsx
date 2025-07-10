import { Navigation } from "@/components/navigation";
import { Teaching } from "@/components/teaching";

export default function TeachingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Teaching />
      </div>
    </div>
  );
}