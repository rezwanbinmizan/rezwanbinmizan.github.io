import { Navigation } from "@/components/navigation";
import { Blog } from "@/components/blog";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Blog />
      </div>
    </div>
  );
}