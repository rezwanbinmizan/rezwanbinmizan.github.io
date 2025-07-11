import { Card, CardContent } from "@/components/ui/card";

export function PhotoGallery() {
  // All photos in one array - just replace the image files to update
  const allPhotos = [
    { src: "/images/conference-1.jpg", title: "GSPP Talk Photo 1" },
    { src: "/images/conference-2.jpg", title: "GSPP Talk Photo 2" },
    { src: "/images/poster-1.jpg", title: "Research Poster Presentation" },
    { src: "/images/summer-school.jpg", title: "During Summer School at Texas A&M" }
  ];

  const PhotoCard = ({ photo, index }: { photo: { src: string; title: string }; index: number }) => {
    // Create varying heights for floating effect
    const heights = ['h-72', 'h-80', 'h-64', 'h-96'];
    const height = heights[index % heights.length];
    
    // Create floating animation - pairs move together (0&1, 2&3, etc.)
    const animationDelay = Math.floor(index / 2) * 1; // Pairs share same delay
    const floatingDirection = index % 2 === 0 ? 'animate-float-up' : 'animate-float-down';
    
    return (
      <div 
        className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${height} flex flex-col ${floatingDirection}`}
        style={{ animationDelay: `${animationDelay}s` }}
      >
        <div className="relative overflow-hidden rounded-t-xl flex-1 bg-gray-200">
          <img 
            src={photo.src} 
            alt={photo.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Failed to load image:', photo.src);
            }}
            onLoad={() => {
              console.log('Successfully loaded image:', photo.src);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 bg-white rounded-b-xl">
          <h4 className="font-medium text-gray-800 text-sm leading-snug">{photo.title}</h4>
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Photo Gallery
        </h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {allPhotos.map((photo, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <PhotoCard photo={photo} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}