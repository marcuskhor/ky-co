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
      description: "Audit of companies in property development, construction, manufacturing, trading, and various service industries.",
      link: "/services"
    },
    {
      icon: FileText,
      title: "Group & Consolidated Audits",
      description: "Group and consolidated financial statement audits with comprehensive reporting.",
      link: "/services"
    },
    {
      icon: Calculator,
      title: "Compliance Audits",
      description: "Compliance audits in accordance with MFRS, MPERS, and other applicable standards.",
      link: "/services"
    },
    {
      icon: Users,
      title: "Technical Consultations",
      description: "Technical consultations on financial reporting and accounting treatments.",
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
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Welcome to 
                <span className="text-accent block">KY&CO</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Established since 2021, KY&CO is a licensed audit firm committed to providing reliable, 
                ethical, and practical accounting services that help businesses meet regulatory requirements 
                and achieve sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={() => {
                    document.getElementById('our-services')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-elegant">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose KY&CO?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">Committed to building trust and ensuring transparency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">Experienced in a wide range of industries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">Personalised and responsive service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">Strong technical capabilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We aim to support businesses in building a strong financial foundation through reliable, 
                ethical, and practical accounting services. Our goal is to help clients stay compliant 
                with financial regulations while enabling sustainable growth.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Commitment
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At the heart of our firm is a team of dedicated and experienced professionals who value:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Integrity in every engagement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Reliability in our audit execution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Responsiveness to client needs</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                We take the time to understand each client's business, ensuring that our advice is 
                relevant, practical, and aligned with your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="our-services" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              We offer a wide range of audit and assurance services tailored to meet the needs of SMEs and growing businesses, including:
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
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Our team combines regulatory knowledge with industry-specific insights to help you make 
              informed financial decisions and stay compliant.
            </p>
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
