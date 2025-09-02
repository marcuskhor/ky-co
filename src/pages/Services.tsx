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
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import auditingHero from "@/assets/auditing-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Statutory Audits",
      description: "We provide independent statutory audits to ensure financial statements are prepared in accordance with applicable accounting and regulatory requirements. Our audits cover both individual companies and group audits, including consolidated financial statements, providing stakeholders with confidence, transparency, and reliability in financial reporting.",
      features: [
        "Property Development & Construction",
        "Manufacturing & Trading", 
        "Retail & Consumer Goods",
        "Hospitality & Tourism",
        "Technology & E-Commerce",
        "Professional Services",
        "Transportation & Logistics",
        "Healthcare & Wellness",
        "Non-Profit Organizations & Associations",
        "Investment Holding Companies"
      ]
    },
    {
      icon: FileText,
      title: "Non-Statutory Audits & Assurance Services",
      description: "In addition to statutory audits, we also provide non-statutory audit and assurance services tailored to meet specific business needs. These services are designed to enhance credibility, strengthen stakeholder confidence, and provide independent insights even where a statutory audit is not required.",
      features: [
        "Review engagements",
        "Agreed-upon procedures (AUP)",
        "Special audits",
        "Compliance audits",
        "Audits for partnerships, clubs, associations, charitable bodies, and other non-statutory requirements"
      ]
    },
    {
      icon: Users,
      title: "Technical Consultations",
      description: "We provide expert technical consultations on financial reporting and accounting treatments to help navigate complex accounting issues.",
      features: [
        "Financial reporting support",
        "Consultation on accounting treatments in accordance with applicable accounting standards",
        "Consultation on new or amended accounting standards",
        "Guidance on disclosure requirements in financial statements"
      ]
    },
    {
      icon: Calculator,
      title: "Accounting Services",
      description: "We provide comprehensive accounting services to support businesses in maintaining accurate and reliable financial records. Our services are designed to ease the compliance burden and allow management to focus on running the business.",
      features: [
        "Preparation of management accounts for timely decision-making",
        "Preparation of financial statements in accordance with applicable accounting standards",
        "Maintenance of general ledger and bookkeeping",
        "Assistance with regulatory reporting requirements",
        "Accounting support for year-end audit purposes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${auditingHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Professional 
                <span className="text-accent block"> Audit Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                Comprehensive audit and advisory services tailored to meet your business needs. 
                We deliver excellence through expertise, integrity, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            {/* Service Excellence Highlight */}
            <div className="hidden lg:block">
              <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-elegant border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Service Excellence</h3>
                
                {/* Key Service Pillars */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
                      <Shield className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Comprehensive Coverage</h4>
                      <p className="text-white/80 text-sm">Full spectrum audit services across all business sectors and sizes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Technical Expertise</h4>
                      <p className="text-white/80 text-sm">Deep knowledge in MFRS, MPERS and regulatory compliance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-2 rounded-lg flex-shrink-0">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Client-Focused Approach</h4>
                      <p className="text-white/80 text-sm">Tailored solutions that address your unique business challenges</p>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                    Schedule Your Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of professional services designed to help your business thrive in today's complex environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6 group">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose KY&CO?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and client satisfaction sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
              <p className="text-muted-foreground">
                Committed to building trust and ensuring transparency in every engagement with our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Experience</h3>
              <p className="text-muted-foreground">
                Experienced in a wide range of industries, with a strong focus on SMEs and growing businesses.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalised Service</h3>
              <p className="text-muted-foreground">
                Personalised and responsive service tailored to your specific business needs and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Capabilities</h3>
              <p className="text-muted-foreground">
                Strong technical capabilities in MFRS, MPERS, and consolidation audits with deep expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dependable Partnership</h3>
              <p className="text-muted-foreground">
                A dependable partner to navigate today's dynamic financial landscape with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our professional services can help your business achieve its goals.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;