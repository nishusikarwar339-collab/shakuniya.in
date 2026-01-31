import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Video,
  Headphones,
  Users,
  ShoppingCart,
  Gamepad2,
} from "lucide-react";

const products = [
  {
    name: "Live Streaming Apps",
    href: "/products/live-streaming",
    icon: Video,
    description: "Build engaging live streaming platforms",
  },
  {
    name: "Live Audio Streaming",
    href: "/products/audio-streaming",
    icon: Headphones,
    description: "Crystal-clear audio streaming solutions",
  },
  {
    name: "Social Media Apps",
    href: "/products/social-media",
    icon: Users,
    description: "Connect users worldwide",
  },
  {
    name: "Shopping Apps",
    href: "/products/shopping",
    icon: ShoppingCart,
    description: "E-commerce app development",
  },
  {
    name: "Games",
    href: "/products/games",
    icon: Gamepad2,
    description: "Engaging game development",
  },
];

const ProductsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button */}
      <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
        Products
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="glass-card p-4 min-w-[280px] rounded-xl border border-white/10 shadow-2xl">
          <div className="space-y-1">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  key={product.name}
                  to={product.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                    <Icon size={20} className="text-purple-400" />
                  </div>

                  <div>
                    <span className="text-foreground font-medium text-sm block">
                      {product.name}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {product.description}
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

export default ProductsDropdown;
