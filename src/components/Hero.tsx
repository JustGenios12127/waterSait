import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplets, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
        <Droplets className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mx-auto mb-4 sm:mb-6 md:mb-8 text-primary animate-wave" />
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
          <span className="bg-gradient-water bg-clip-text text-transparent">
            BAO Company
          </span>
          <br />
          <span className="text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl">{t('hero.title')}</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up px-4">
          {t('hero.subtitle')}
        </p>

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