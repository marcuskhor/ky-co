import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import teamMeeting from "@/assets/team-meeting.jpg";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  useSEO({
    title: "About KY & CO - Licensed Audit Firm Team | KYCO Malaysia",
    description: "Meet the KY & CO (KYCO) team. Licensed audit firm established in 2021 with expertise in MFRS, MPERS, and regulatory compliance. Serving businesses across Malaysia.",
    keywords: "KY & CO team, KYCO auditors, licensed auditor Malaysia, approved company auditor, audit firm Malaysia, Chua Khai Yee, KY and Co about",
    canonicalUrl: "https://kyco.my/#/about"
  });

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our engagements, ensuring transparency and trust."
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "We are committed to delivering the highest quality of professional services to our clients."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and provide tailored solutions."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We leverage technology and best practices to deliver efficient and effective solutions."
    }
  ];

  const teamMembers = [
    {
      name: "Chua Khai Yee",
      title: "Partner",
      bio: "Chua Khai Yee is an approved company auditor and holds a Bachelor of Accounting (Hons.) from Multimedia University. He has more than 10 years of professional experience in audit and assurance, with exposure across a wide range of industries including manufacturing, trading, services, property development, construction, and others. In 2021, he founded KY & CO, where he plays a key role in defining the firm's vision and strategic direction.",
      image: "/placeholder.svg"
    },
    {
      name: "Emmy Liew Fong Lin",
      title: "Director", 
      bio: "Emmy is a member of the Association of Chartered Certified Accountants (ACCA) and holds a Bachelor of Commerce (Hons) degree from Tunku Abdul Rahman University College. She began her career with a mid-tier audit firm in Malaysia and has accumulated 9 years of experience in audit and assurance engagements. Her portfolio spans a wide range of industries, including property development, construction, trading, manufacturing, and group consolidations.",
      image: "/placeholder.svg"
    },
    {
      name: "Mohamed Yusof",
      title: "Director",
      bio: "Mohamed Yusof is a Chartered Accountant of the Malaysian Institute of Accountants (MIA) and holds a Bachelor of Accounting (Hons.) degree from Universiti Teknologi MARA (UiTM). He has over 10 years of professional experience in audit and assurance, serving a diverse portfolio of clients ranging from small and medium enterprises (SMEs) to public listed companies.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamMeeting})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            About 
            <span className="text-accent block">KY & CO</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our professionals are technically strong, approachable, and passionate about helping clients succeed.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Established since 2021, KY & CO is a licensed audit firm committed to providing reliable, 
                ethical, and practical accounting services that help businesses meet regulatory requirements 
                and achieve sustainable growth.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team brings together a mix of audit experience, industry exposure, and a deep 
                understanding of local compliance requirements to serve our clients effectively.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                To support businesses in building a strong financial foundation through reliable, 
                ethical, and practical accounting services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Client-Centric Approach</h4>
                    <p className="text-muted-foreground text-sm">We take time to understand each client's unique business needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Technical Excellence</h4>
                    <p className="text-muted-foreground text-sm">Deep expertise in MFRS, MPERS, and regulatory compliance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Sustainable Growth</h4>
                    <p className="text-muted-foreground text-sm">Helping businesses achieve long-term success and compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at KY & CO
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team brings together a mix of audit experience, industry exposure, 
              and a deep understanding of local compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Discover how our expertise and commitment can help your business achieve its goals. 
            Contact us today.
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

export default About;