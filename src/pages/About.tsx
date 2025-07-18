import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Building, 
  Calendar,
  MapPin,
  CheckCircle
} from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every engagement, delivering the highest quality of professional services."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards and maintain independence in all our professional relationships."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace technology and innovative approaches to deliver efficient and effective solutions to our clients."
    },
    {
      icon: Building,
      title: "Partnership",
      description: "We build long-term partnerships with our clients, understanding their business and supporting their growth."
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "KY&CO was established with a vision to provide exceptional audit and advisory services."
    },
    {
      year: "2012",
      title: "Team Expansion",
      description: "Expanded our team and service offerings to include tax advisory and business consulting."
    },
    {
      year: "2016",
      title: "Regional Growth",
      description: "Extended our services across Malaysia and established partnerships with international firms."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced technology solutions to enhance service delivery and client experience."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as one of the leading audit firms in Malaysia with over 500 satisfied clients."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About KY&CO
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            A trusted partner in audit and advisory services, committed to delivering excellence 
            and building lasting relationships with our clients across Malaysia.
          </p>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KY&CO is a leading audit and assurance firm established in 2008, dedicated to providing 
                comprehensive professional services to businesses across Malaysia. With over 15 years of 
                experience, we have built a reputation for excellence, integrity, and innovation.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of qualified professionals combines deep industry knowledge with cutting-edge 
                technology to deliver tailored solutions that meet our clients' unique needs. We serve 
                a diverse portfolio of clients, from emerging businesses to established corporations 
                across various industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg">
                  Our Services
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamMeeting} 
                alt="KY&CO Team" 
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment and success in delivering exceptional professional services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="shadow-soft border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional audit and advisory services that add value to our clients' 
                  businesses while maintaining the highest standards of professional excellence, 
                  integrity, and independence. We are committed to helping our clients achieve 
                  their goals through innovative solutions and trusted partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and respected audit and advisory firm in Malaysia, 
                  recognized for our expertise, innovation, and commitment to client success. 
                  We envision a future where our professional services contribute significantly 
                  to the growth and sustainability of businesses across the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of significant milestones that have shaped KY&CO into the firm we are today.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-4 md:w-1/4">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                    {milestone.year}
                  </div>
                  <Calendar className="h-5 w-5 text-primary md:hidden" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Discover how our expertise and commitment can help your business achieve its goals. 
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule Meeting
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;