import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera } from "lucide-react";

export function PhotoGallery() {
  // Simple photo data - just replace the image files to update
  const photos = {
    conferences: [
      { src: "/images/conference-1.jpg", title: "GSPP Talk Photo 1" },
      { src: "/images/conference-2.jpg", title: "GSPP Talk Photo 2"" }
    ],
    posters: [
      { src: "/images/poster-1.jpg", title: "Research Poster Presentation" }
    ],
    research: [
      // Add research photos here when available
    ],
    profile: [
      { src: "/images/profile-1.jpg", title: "Photo in DC" }
    ]
  };

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

  const EmptySection = ({ message }: { message: string }) => (
    <div className="text-center py-12">
      <Camera className="mx-auto mb-4 h-12 w-12 text-gray-300" />
      <p className="text-gray-500">{message}</p>
    </div>
  );

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Photo Gallery
        </h2>
        
        <Tabs defaultValue="conferences" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="conferences">Academic Events</TabsTrigger>
            <TabsTrigger value="posters">Presentations</TabsTrigger>
            <TabsTrigger value="research">Research Work</TabsTrigger>
            <TabsTrigger value="profile">Professional</TabsTrigger>
          </TabsList>
          
          <TabsContent value="conferences" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-academic-dark mb-2">
                Academic Events
              </h3>
              <p className="text-gray-600">
                Photos from academic conferences, workshops, and presentations
              </p>
            </div>
            {photos.conferences.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.conferences.map((photo, index) => (
                  <PhotoCard key={index} photo={photo} />
                ))}
              </div>
            ) : (
              <EmptySection message="No conference photos yet" />
            )}
          </TabsContent>
          
          <TabsContent value="posters" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-academic-dark mb-2">
                Presentations
              </h3>
              <p className="text-gray-600">
                Academic presentations, talks, and poster sessions
              </p>
            </div>
            {photos.posters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photos.posters.map((photo, index) => (
                  <PhotoCard key={index} photo={photo} />
                ))}
              </div>
            ) : (
              <EmptySection message="No presentation photos yet" />
            )}
          </TabsContent>
          
          <TabsContent value="research" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-academic-dark mb-2">
                Research Work
              </h3>
              <p className="text-gray-600">
                Research activities, computational work, and academic environment
              </p>
            </div>
            {photos.research.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {photos.research.map((photo, index) => (
                  <PhotoCard key={index} photo={photo} />
                ))}
              </div>
            ) : (
              <EmptySection message="No research photos yet" />
            )}
          </TabsContent>
          
          <TabsContent value="profile" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-academic-dark mb-2">
                Professional
              </h3>
              <p className="text-gray-600">
                Professional headshots and formal photographs
              </p>
            </div>
            {photos.profile.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.profile.map((photo, index) => (
                  <PhotoCard key={index} photo={photo} />
                ))}
              </div>
            ) : (
              <EmptySection message="No professional photos yet" />
            )}
          </TabsContent>
        </Tabs>


      </div>
    </section>
  );
}