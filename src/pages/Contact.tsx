import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      first_name: String(formData.get('first_name') || '').trim(),
      last_name: String(formData.get('last_name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: (String(formData.get('phone') || '').trim()) || null,
      company: (String(formData.get('company') || '').trim()) || null,
      service_interest: (String(formData.get('service_interest') || '').trim()) || null,
      message: String(formData.get('message') || '').trim(),
    };

    if (!payload.first_name || !payload.last_name || !payload.email || !payload.message) {
      toast({
        title: "Missing information",
        description: "Please fill in required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      
      // Insert into database
      const { error } = await supabase.from('contact_submissions').insert(payload);
      if (error) throw error;
      
      // Send email notifications
      const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
        body: payload
      });
      
      if (emailError) {
        console.error('Email notification error:', emailError);
        // Don't fail the whole process if email fails
      }
      
      toast({
        title: "Message sent",
        description: "Thanks! We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get in touch with our team of professionals. We're here to help you with your audit and advisory needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Offices</h2>
              <div className="space-y-6">
                {/* Klang Branch */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Klang Branch</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      No.25-2, Lorong Gopeng, 41400, Klang, Selangor
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">012-731 2618</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">ad.kyco@hotmail.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* KL Branch */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Kuala Lumpur Branch</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Suite 28.02, Level 28, Menara Southpoint, Mid Valley City
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">012-731 2618</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">ad.kyco@hotmail.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Business Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <form className="space-y-6" onSubmit={handleSubmit} aria-busy={isLoading}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="first_name" placeholder="Your first name" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="last_name" placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" placeholder="+60 12-345 6789" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your company name" />
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <select
                        id="service"
                        name="service_interest"
                        className="w-full p-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select a service</option>
                        <option value="statutory-audits">Statutory Audits</option>
                        <option value="non-statutory-audits">Non-Statutory Audits & Assurance Services</option>
                        <option value="technical-consultations">Technical Consultations</option>
                        <option value="accounting-services">Accounting Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We offer comprehensive professional services including Statutory Audits, 
            Non-Statutory Audits & Assurance Services, Technical Consultations, and 
            Accounting Services to help your business achieve its goals.
          </p>
          <div className="flex justify-center">
            <Button variant="default" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;