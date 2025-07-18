import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <span className="text-primary font-bold text-lg">KY</span>
              </div>
              <span className="text-2xl font-bold">KY&CO</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              A leading audit and assurance firm committed to delivering exceptional 
              professional services with integrity, excellence, and innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  Level 12, Menara ABC, Jalan Bukit Bintang, 50200 Kuala Lumpur
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+60 3-2123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@kyco.my</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  External Audit
                </span>
              </li>
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Internal Audit
                </span>
              </li>
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Tax Advisory
                </span>
              </li>
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Business Consulting
                </span>
              </li>
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Risk Management
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            © 2024 KY&CO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;