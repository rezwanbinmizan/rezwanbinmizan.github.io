import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, ExternalLink, GraduationCap } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export function Contact() {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the message
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };



  return (
    <section id="contact" className="py-16 bg-academic-light">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-academic-dark mb-12 text-center">
          Contact Information
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-academic-dark mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-academic-blue rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Academic Email</p>
                      <p className="text-academic-dark font-medium">
                        {personal.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-academic-blue rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Personal Email</p>
                      <p className="text-academic-dark font-medium">
                        {personal.emailPersonal}
                      </p>
                    </div>
                  </div>
                  
                  
                </div>
              </CardContent>
            </Card>



            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline"
                  className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white transition-colors font-medium"
                  onClick={() => window.open(personal.linkedin, "_blank")}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white transition-colors font-medium"
                  onClick={() => window.open(personal.orcid, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  ORCID
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Button 
                  variant="outline"
                  className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white transition-colors font-medium"
                  onClick={() => window.open(personal.googleScholar, "_blank")}
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Google Scholar
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-academic-dark mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Research collaboration inquiry"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={4}
                    required
                    className="mt-2 resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-academic-blue text-white hover:bg-blue-700 transition-colors font-medium"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
