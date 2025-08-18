import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import ky_logo from "@/assets/ky_co_logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-soft border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 min-w-0 flex-shrink-0 ">
            <img 
              src={ky_logo} 
              alt="KY&CO" 
              className="h-20 w-20 sm:h-16 sm:w-48 text-primary flex-shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>012-731 2618</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>ad.kyco@hotmail.com</span>
              </div>
            </div>

            <Button variant="default" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-border mt-2">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>012-731 2618</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>ad.kyco@hotmail.com</span>
                  </div>
                </div>
                <Button variant="default" size="sm" className="w-full mt-3">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;