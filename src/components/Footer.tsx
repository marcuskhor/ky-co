import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, BookOpen } from "lucide-react";

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
              A licensed audit firm committed to providing reliable, ethical, and practical 
              accounting services since 2021.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  Klang: No.25-2, Lorong Gopeng, 41400, Klang, Selangor
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  KL: Suite 28.02, Level 28, Menara Southpoint, Mid Valley City
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">012-731 2618</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">ad.kyco@hotmail.com</span>
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
                <Link 
                  to="/contact" 
                  className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Company Audits
                </span>
              </li>
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Group & Consolidated Audits
                </span>
              </li>
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Compliance Audits (MFRS/MPERS)
                </span>
              </li>
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Technical Consultations
                </span>
              </li>
              <li>
                <span className="text-primary-foreground/80 text-sm">
                  Advisory Services
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://www.facebook.com/share/1AnbgfajdU/?mibextid=LQQJ4d" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-white transition-colors duration-300"
            >
              <BookOpen className="h-5 w-5" />
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