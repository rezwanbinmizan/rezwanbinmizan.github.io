import { Navigation } from "@/components/navigation";
import { PhotoGallery } from "@/components/photo-gallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <PhotoGallery />
      </div>
    </div>
  );
}