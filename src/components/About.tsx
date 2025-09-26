import { Award, Shield, Users, Target, Package, X, Check, Droplets } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Shield,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
    },
    {
      icon: Award,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description'),
    },
    {
      icon: Users,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
    },
    {
      icon: Target,
      title: t('about.values.service.title'),
      description: t('about.values.service.description'),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-water-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-water bg-clip-text text-transparent">{t('about.title')}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            {t('about.description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-card transition-all duration-300 hover:shadow-water hover:-translate-y-2 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;