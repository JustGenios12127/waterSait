import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { path: "/", label: t('nav.home') },
    { path: "/water-fountain", label: t('nav.waterFountain') },
    { path: "/water-taps", label: t('nav.waterTaps') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-soft">
      {/* убираем container и отступы */}
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-2">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold pl-0">
            <Droplets className="h-8 w-8 text-water animate-[float-y_3s_ease-in-out_infinite]" />
            <span className="bg-gradient-water bg-clip-text text-transparent">
              BAO Company
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 pr-0">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-water rounded-full" />
                )}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden pr-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block py-3 px-4 text-sm font-medium transition-colors hover:bg-water-light/30 rounded-lg",
                  location.pathname === item.path ? "text-primary bg-water-light/20" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
