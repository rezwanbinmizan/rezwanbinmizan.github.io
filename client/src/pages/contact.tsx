import { Navigation } from "@/components/navigation";
import { Contact } from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
}