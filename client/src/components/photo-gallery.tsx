import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Calendar, MapPin, X, ZoomIn } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function PhotoGallery() {
  const { photoGallery } = portfolioData;
  const [selectedImage, setSelectedImage] = useState<any>(null);
  


  const PhotoCard = ({ photo, category }: { photo: any; category: string }) => (
    <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={photo.url} 
            alt={photo.title}
            className="w-full aspect-[4/3] object-cover border-4 border-red-500"
            onError={(e) => console.error("Image failed to load:", photo.url)}
            onLoad={() => console.log("Image loaded successfully:", photo.url)}
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/90 text-black hover:bg-white"
                  onClick={() => setSelectedImage(photo)}
                >
                  <ZoomIn className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full max-h-96 object-contain rounded-lg"
                  />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-academic-dark">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600">{photo.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="p-4">
            <h4 className="font-medium text-academic-dark mb-2 line-clamp-2">
              {photo.title}
            </h4>
            <p className="text-xs text-gray-500 line-clamp-2">
              {photo.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Photo Gallery
        </h2>
        
        <Tabs defaultValue="posters" className="w-full">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoGallery.conferences.map((photo, index) => (
                <PhotoCard key={index} photo={photo} category="conference" />
              ))}
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow-200 p-4">
              <p className="col-span-full text-black font-bold">Posters count: {photoGallery.posters.length}</p>
              <div className="col-span-full">
                <p className="text-black">Testing direct image:</p>
                <img src="/images/poster-1.jpg" alt="test" className="w-32 h-32 border-4 border-green-500" />
              </div>
              {photoGallery.posters.map((photo, index) => (
                <PhotoCard key={index} photo={photo} category="poster" />
              ))}
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {photoGallery.research.map((photo, index) => (
                <PhotoCard key={index} photo={photo} category="research" />
              ))}
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-200 p-4">
              <p className="col-span-full text-black">Profile count: {photoGallery.profile.length}</p>
              {photoGallery.profile.length > 0 ? (
                photoGallery.profile.map((photo, index) => (
                  <PhotoCard key={index} photo={photo} category="profile" />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <Camera className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <p className="text-gray-500">No professional photos yet</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Instructions for adding photos */}
        <div className="mt-12 bg-academic-light rounded-lg p-6">
          <h3 className="text-lg font-semibold text-academic-dark mb-4 flex items-center">
            <Camera className="mr-2 h-5 w-5" />
            How to Add Your Photos
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p><strong>Step 1:</strong> Create a folder called <code className="bg-gray-200 px-2 py-1 rounded">images</code> in <code className="bg-gray-200 px-2 py-1 rounded">client/public/</code></p>
            <p><strong>Step 2:</strong> Add your photos to this folder with these suggested names:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><code>profile-1.jpg</code> - Your professional headshot</li>
              <li><code>conference-1.jpg, conference-2.jpg</code> - Any conference photos</li>
              <li><code>poster-1.jpg, poster-2.jpg</code> - Any poster presentation photos</li>
              <li><code>research-1.jpg, research-2.jpg</code> - Any research activity photos</li>
            </ul>
            <p><strong>Step 3:</strong> The photos will automatically appear in the gallery!</p>
            <p className="text-academic-blue"><strong>Tip:</strong> You can also update the photo descriptions in <code className="bg-gray-200 px-2 py-1 rounded">client/src/lib/portfolio-data.ts</code></p>
          </div>
        </div>
      </div>
    </section>
  );
}