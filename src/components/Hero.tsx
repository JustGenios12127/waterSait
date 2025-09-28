import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import baoLogo from "@/assets/bao-logo.png";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-ocean opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-water-light rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 animate-float animation-delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-8">
        {/* LOGO */}
        <div className="mb-0 animate-fade-in">
          <img 
            src={baoLogo} 
            alt="BAO Company" 
            className="block mx-auto transform translate-x-6 h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 2xl:h-[28rem] w-auto transition-all duration-300"
          />
        </div>
        
        {/* TITLE */}
        <h1 className="-mt-3 sm:-mt-4 lg:-mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-fade-in">
          <span className="text-foreground">{t('hero.title')}</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-3 sm:mt-4 mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up px-4">
          {t('hero.subtitle')}
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up animation-delay-200 px-4">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              {t('hero.cta')} <ArrowRight className="ml-2" />
            </Button>
          </a>
          <a 
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {t('nav.products')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
