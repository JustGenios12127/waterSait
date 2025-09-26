import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplets, School, ArrowRight } from "lucide-react";
import waterFountainImage from "@/assets/water-fountain-new.jpg";
import waterTapImage from "@/assets/water-tap-new.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      id: 1,
      title: t('products.waterFountain.title'),
      description: t('products.waterFountain.description'),
      icon: Droplets,
      link: "/water-fountain",
      features: [
        t('products.waterFountain.features.unlimited'),
        t('products.waterFountain.features.control'),
        t('products.waterFountain.features.sanpin')
      ],
      image: waterFountainImage,
    },
    {
      id: 2,
      title: t('products.waterTaps.title'),
      description: t('products.waterTaps.description'),
      icon: School,
      link: "/water-taps",
      features: [
        t('products.waterTaps.features.safety'),
        t('products.waterTaps.features.control'),
        t('products.waterTaps.features.certification')
      ],
      image: waterTapImage,
    },
  ];

  return (
    <section 
      id="products" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-water bg-clip-text text-transparent">
              {t('products.title')}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-water hover:scale-105 animate-slide-up flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link to={product.link} className="block">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <product.icon className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 h-10 w-10 sm:h-12 sm:w-12 text-primary-foreground bg-primary rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0" />
                </div>
              </Link>
              
              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">{product.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-4 sm:mb-6 flex-grow">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={product.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground border-primary/30 hover:border-primary"
                  >
                    {t('products.waterFountain.cta')} 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
