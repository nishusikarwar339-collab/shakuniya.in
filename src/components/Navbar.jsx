import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Apple,
  Globe,
  Code,
  Headphones,
  Video,
  Users,
  ShoppingCart,
  Gamepad2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import ServicesDropdown from "./ServicesDropdown";
import ProductsDropdown from "./ProductsDropdown";

const navLinks = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About", href: "/about", isRoute: true },
  { name: "Services", isDropdown: true },
  { name: "Products", isProductsDropdown: true },
  { name: "Career", href: "/career", isRoute: true },
  { name: "Contact", href: "/contact", isRoute: true },
];

const mobileServices = [
  { name: "Android Development", href: "/services/android", icon: Smartphone },
  { name: "iOS Development", href: "/services/ios", icon: Apple },
  { name: "Website Development", href: "/services/website", icon: Globe },
  { name: "Software Development", href: "/services/software", icon: Code },
  { name: "IT Consultant Service", href: "/services/it-consultant", icon: Headphones },
];

const mobileProducts = [
  { name: "Live Streaming Apps", href: "/products/live-streaming", icon: Video },
  { name: "Live Audio Streaming", href: "/products/audio-streaming", icon: Headphones },
  { name: "Social Media Apps", href: "/products/social-media", icon: Users },
  { name: "Shopping Apps", href: "/products/shopping", icon: ShoppingCart },
  { name: "Games", href: "/products/games", icon: Gamepad2 },
];

const MobileServicesMenu = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground text-sm font-medium"
      >
        Services
        <ChevronDown
          size={16}
          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>

      {isExpanded && (
        <div className="mt-2 ml-4 space-y-2 border-l border-border pl-4">
          {mobileServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                to={service.href}
                onClick={onClose}
                className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Icon size={16} className="text-primary" />
                {service.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const MobileProductsMenu = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground text-sm font-medium"
      >
        Products
        <ChevronDown
          size={16}
          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>

      {isExpanded && (
        <div className="mt-2 ml-4 space-y-2 border-l border-border pl-4">
          {mobileProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.name}
                to={product.href}
                onClick={onClose}
                className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Icon size={16} className="text-primary" />
                {product.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveRoute = (href) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-16 transition-colors duration-300">
        <div className="flex items-center justify-between h-20 text-white">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-14 h-14">
              <img src={logo} alt="" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <ServicesDropdown key={link.name} />
              ) : link.isProductsDropdown ? (
                <ProductsDropdown key={link.name} />
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium ${
                    isActiveRoute(link.href)
                      ? "text-foreground border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden glass-card mt-2 p-4 mb-4 text-white">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <MobileServicesMenu key={link.name} onClose={() => setIsOpen(false)} />
              ) : link.isProductsDropdown ? (
                <MobileProductsMenu key={link.name} onClose={() => setIsOpen(false)} />
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
