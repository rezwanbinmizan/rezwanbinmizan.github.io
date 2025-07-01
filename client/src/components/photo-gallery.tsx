import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Calendar, MapPin, X, ZoomIn } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function PhotoGallery() {
  const { gallery } = portfolioData;
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const PhotoCard = ({ photo, category }: { photo: any; category: string }) => (
    <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-lg">
          {/* Placeholder for actual image */}
          <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-gray-500 relative">
            <div className="text-center">
              <Camera className="mx-auto mb-2 h-12 w-12" />
              <p className="text-sm font-medium">{photo.alt}</p>
              <p className="text-xs text-gray-400 mt-1">Add photo: {photo.src}</p>
            </div>
            
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
                    <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Camera className="mx-auto mb-2 h-16 w-16" />
                        <p className="font-medium">{photo.alt}</p>
                        <p className="text-sm text-gray-400 mt-1">Photo placeholder</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-academic-dark">
                        {photo.caption}
                      </h3>
                      {photo.event && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="mr-2 h-4 w-4" />
                          {photo.event} ({photo.year})
                        </div>
                      )}
                      {photo.description && (
                        <p className="text-gray-600">{photo.description}</p>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="p-4">
            <h4 className="font-medium text-academic-dark mb-2 line-clamp-2">
              {photo.caption}
            </h4>
            <div className="flex items-center justify-between">
              {photo.year && (
                <Badge variant="outline" className="text-xs">
                  {photo.year}
                </Badge>
              )}
              {photo.event && (
                <span className="text-xs text-gray-500 truncate ml-2">
                  {photo.event}
                </span>
              )}
            </div>
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
        
        <Tabs defaultValue="conferences" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
            <TabsTrigger value="posters">Posters</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="conferences" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-academic-dark mb-2">
                Conference Presentations
              </h3>
              <p className="text-gray-600">
                Photos from various conferences and academic presentations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.conferencePhotos.map((photo, index) => (
                <PhotoCard key={index} photo={photo} category="conference" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="posters" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-academic-dark mb-2">
                Poster Presentations
              </h3>
              <p className="text-gray-600">
                Academic poster presentations and research showcases
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.posterPhotos.map((photo, index) => (
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
                Laboratory work and research activities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.researchPhotos.map((photo, index) => (
                <PhotoCard key={index} photo={photo} category="research" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="profile" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-academic-dark mb-2">
                Professional Photos
              </h3>
              <p className="text-gray-600">
                Professional headshots and portraits
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.profilePhotos.map((photo, index) => (
                <PhotoCard key={index} photo={photo} category="profile" />
              ))}
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
            <p><strong>Step 2:</strong> Add your photos to this folder with these recommended names:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><code>profile-photo.jpg</code> - Your professional headshot</li>
              <li><code>conference-1.jpg, conference-2.jpg</code> - Conference photos</li>
              <li><code>poster-1.jpg, poster-2.jpg</code> - Poster presentation photos</li>
              <li><code>research-1.jpg, research-2.jpg</code> - Research activity photos</li>
            </ul>
            <p><strong>Step 3:</strong> The photos will automatically appear in the gallery!</p>
            <p className="text-academic-blue"><strong>Tip:</strong> You can also update the photo descriptions in <code className="bg-gray-200 px-2 py-1 rounded">client/src/lib/portfolio-data.ts</code></p>
          </div>
        </div>
      </div>
    </section>
  );
}