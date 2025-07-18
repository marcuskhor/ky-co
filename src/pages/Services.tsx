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

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "External Audit",
      description: "Independent audit services ensuring compliance with accounting standards and regulatory requirements.",
      features: [
        "Statutory audits for companies",
        "Financial statement audits", 
        "Compliance auditing",
        "Internal control evaluation"
      ]
    },
    {
      icon: FileText,
      title: "Internal Audit",
      description: "Comprehensive internal audit services to strengthen your organization's governance and risk management.",
      features: [
        "Risk assessment and management",
        "Process improvement",
        "Internal control review",
        "Operational auditing"
      ]
    },
    {
      icon: Calculator,
      title: "Tax Advisory",
      description: "Strategic tax planning and advisory services to optimize your tax position while ensuring compliance.",
      features: [
        "Corporate tax planning",
        "Personal tax advisory",
        "Tax compliance services",
        "International tax planning"
      ]
    },
    {
      icon: Users,
      title: "Business Consulting",
      description: "Expert business consulting to help you navigate challenges and identify growth opportunities.",
      features: [
        "Strategic planning",
        "Financial restructuring",
        "Merger & acquisition support",
        "Business process optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Risk Management",
      description: "Comprehensive risk management solutions to protect and enhance your business value.",
      features: [
        "Enterprise risk management",
        "Regulatory compliance",
        "Financial risk assessment",
        "Operational risk review"
      ]
    },
    {
      icon: Award,
      title: "Assurance Services",
      description: "Professional assurance services to enhance stakeholder confidence in your financial information.",
      features: [
        "Financial statement review",
        "Agreed-upon procedures",
        "Compilation services",
        "Due diligence support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            Comprehensive audit and advisory services tailored to meet your business needs. 
            We deliver excellence through expertise, integrity, and innovation.
          </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-muted-foreground">
                Our team of certified professionals brings decades of combined experience 
                across various industries and sectors.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest ethical standards and provide transparent, 
                honest advice that you can trust.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We leverage the latest technology and methodologies to deliver 
                efficient and effective solutions.
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule Consultation
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

export default Services;