import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  FileText, 
  Calculator, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: "External Audit",
      description: "Independent audit services ensuring compliance with accounting standards and regulations.",
      link: "/services"
    },
    {
      icon: FileText,
      title: "Internal Audit",
      description: "Comprehensive internal audit services to strengthen governance and risk management.",
      link: "/services"
    },
    {
      icon: Calculator,
      title: "Tax Advisory",
      description: "Strategic tax planning and advisory services to optimize your tax position.",
      link: "/services"
    },
    {
      icon: Users,
      title: "Business Consulting",
      description: "Expert consulting to help navigate challenges and identify growth opportunities.",
      link: "/services"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations Sdn Bhd",
      content: "KY&CO has been instrumental in our company's growth. Their professional audit services and strategic advice have helped us maintain compliance while scaling our business.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Manufacturing Ltd",
      content: "The team at KY&CO demonstrates exceptional expertise and attention to detail. Their tax advisory services have saved us significant costs while ensuring full compliance.",
      rating: 5
    },
    {
      name: "Amanda Lee",
      company: "Retail Solutions Malaysia",
      content: "Outstanding service and professionalism. KY&CO's business consulting has been crucial in our digital transformation journey. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Excellence in 
                <span className="text-accent"> Audit</span> & 
                <span className="text-accent"> Advisory</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                KY&CO is your trusted partner for comprehensive audit, tax, and business advisory services. 
                With over 15 years of experience, we deliver exceptional results that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Get Free Consultation
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-elegant">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose KY&CO?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">15+ Years of Industry Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">500+ Satisfied Clients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">Certified Professional Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">99% Client Retention Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive audit and advisory solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-primary group-hover:text-primary-dark transition-colors duration-300" asChild>
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About KY&CO
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Established in 2008, KY&CO has grown to become one of Malaysia's most trusted 
                audit and advisory firms. Our commitment to excellence and client success 
                has earned us the trust of over 500 businesses across various industries.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-muted-foreground text-sm">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-muted-foreground text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                </div>
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <Award className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    Committed to delivering the highest quality of professional services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Integrity</h3>
                  <p className="text-muted-foreground text-sm">
                    Maintaining the highest ethical standards in all our engagements.
                  </p>
                </div>
              </div>
              <div className="space-y-6 sm:mt-8">
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground text-sm">
                    Leveraging technology to deliver efficient and effective solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Trust</h3>
                  <p className="text-muted-foreground text-sm">
                    Building long-term partnerships based on trust and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Contact KY&CO today for a free consultation and discover how our professional 
            services can help your business achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
