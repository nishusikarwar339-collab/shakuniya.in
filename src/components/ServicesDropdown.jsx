import { useState } from "react";
import { Link } from "react-router-dom";
import { Smartphone, Apple, Globe, Code, Headphones, ChevronDown } from "lucide-react";

const services = [
  { 
    name: "Android Development", 
    href: "/services/android", 
    icon: Smartphone,
    description: "Native Android apps"
  },
  { 
    name: "iOS Development", 
    href: "/services/ios", 
    icon: Apple,
    description: "Premium iOS applications"
  },
  { 
    name: "Website Development", 
    href: "/services/website", 
    icon: Globe,
    description: "Modern web solutions"
  },
  { 
    name: "Software Development", 
    href: "/services/software", 
    icon: Code,
    description: "Custom software systems"
  },
  { 
    name: "IT Consultant Service", 
    href: "/services/it-consultant", 
    icon: Headphones,
    description: "Expert IT consulting"
  },
];

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
      >
        Services
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {/* Dropdown Menu */}
      <div 
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="glass-card p-2 min-w-[280px] shadow-2xl shadow-purple-500/10">
          {/* Arrow indicator */}
          <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-gradient-to-br from-white/10 to-white/5 border-l border-t border-white/10" />
          
          <div className="space-y-1">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-200">
                    <IconComponent size={20} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-foreground group-hover:text-white transition-colors">
                      {service.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {service.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;