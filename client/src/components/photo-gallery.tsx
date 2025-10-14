import { Card, CardContent } from "@/components/ui/card";

export function PhotoGallery() {
  // All photos in one array - just replace the image files to update
  const allPhotos = [
    { src: "/images/conference-1.jpg", title: "GSPP Talk Photo 1" },
    { src: "/images/conference-2.jpg", title: "GSPP Talk Photo 2" },
    { src: "/images/poster-1.jpg", title: "Research Poster Presentation" },
    { src: "/images/summer-school.jpg", title: "During Summer School at Texas A&M" },
    { src: "/images/scientific-computing-seminar.jpg", title: "Scientific computing Seminar at UH" },
    { src: "/images/siam-txla-2025.jpg", title: "SIAM TXLA 2025 UT Austin" }
  ];

  const PhotoCard = ({ photo }: { photo: { src: string; title: string } }) => (
    <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-lg bg-gray-200">
          <img 
            src={photo.src} 
            alt={photo.title}
            className="w-full h-64 object-cover"
            onError={(e) => {
              console.error('Failed to load image:', photo.src);
            }}
            onLoad={() => {
              console.log('Successfully loaded image:', photo.src);
            }}
          />
          <div className="p-4 bg-white">
            <h4 className="font-medium text-gray-800">{photo.title}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="gallery" className="py-16 bg-gradient-to-r from-slate-50 to-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Photo Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPhotos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}