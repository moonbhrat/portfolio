
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me. I'm always open to discussing new projects and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="h-2 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-indigo-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-purple-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-pink-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">City, Country</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Social Media</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 hover:bg-indigo-200 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="text-indigo-600 w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 hover:bg-purple-200 transition-colors" aria-label="GitHub">
                      <Github className="text-purple-600 w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 hover:bg-blue-200 transition-colors" aria-label="Twitter">
                      <Twitter className="text-blue-600 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
