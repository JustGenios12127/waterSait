import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  School,
  Baby,
  Shield,
  Sparkles,
  Wrench,
  Heart,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import waterTapsImage from "@/assets/water-tap-new.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import SchoolComparisonSection from "@/components/SchoolComparisonSection";

const WaterTaps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useLanguage();
  const features = [
    {
      icon: Baby,
      title: t('waterTapsPage.features.items.0.title'),
      description: t('waterTapsPage.features.items.0.text'),
    },
    {
      icon: Shield,
      title: t('waterTapsPage.features.items.1.title'),
      description: t('waterTapsPage.features.items.1.text'),
    },
    {
      icon: Sparkles,
      title: t('waterTapsPage.features.items.2.title'),
      description: t('waterTapsPage.features.items.2.text'),
    },
    {
      icon: Wrench,
      title: t('waterTapsPage.features.items.3.title'),
      description: t('waterTapsPage.features.items.3.text'),
    },
    {
      icon: Heart,
      title: t('waterTapsPage.features.items.4.title'),
      description: t('waterTapsPage.features.items.4.text'),
    },
    {
      icon: School,
      title: t('waterTapsPage.features.items.5.title'),
      description: t('waterTapsPage.features.items.5.text'),
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-4">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4" />
          {t('nav.backHome')}
        </Link>
      </div>
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 bg-gradient-to-b from-water-light/30 to-transparent">
          <div className="container mx-auto px-4">
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl font-bold mb-6">
                  <span className="bg-gradient-water bg-clip-text text-transparent">
                    {t('waterTapsPage.hero.title')}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {t('waterTapsPage.hero.subtitle')}
                </p>
                
                <div className="flex gap-4 mb-8">
                  <Link to="/#contact">
                    <Button variant="hero" size="lg" onClick={() => {
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}>
                      {t('waterTapsPage.hero.cta')}
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{t('waterTapsPage.badges.cert')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{t('waterTapsPage.badges.warranty')}</span>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-up">
                <div className="overflow-hidden rounded-3xl shadow-water">
                  <img 
                    src={waterTapsImage} 
                    alt={t('products.waterTaps.imageAlt')} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-water text-white p-4 rounded-2xl shadow-lg">
                  <p className="text-2xl font-bold">{t('waterTapsPage.overlay.schools')}</p>
                  <p className="text-sm opacity-90">{t('waterTapsPage.overlay.used')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-water bg-clip-text text-transparent">
                  {t('waterTapsPage.featuresTitle')}
                </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-card transition-all duration-300 hover:shadow-water hover:-translate-y-2 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-water-light/20 to-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-water bg-clip-text text-transparent">
                  {t('waterTapsPage.why.title')}
                </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-water rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">500+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('waterTapsPage.why.metrics.partners')}</h3>
                <p className="text-muted-foreground">{t('waterTapsPage.why.metrics.partnersDesc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-water rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">50K+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('waterTapsPage.why.metrics.students')}</h3>
                <p className="text-muted-foreground">{t('waterTapsPage.why.metrics.studentsDesc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-water rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">10+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('waterTapsPage.why.metrics.years')}</h3>
                <p className="text-muted-foreground">{t('waterTapsPage.why.metrics.yearsDesc')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-water rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">100%</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('waterTapsPage.why.metrics.satisfied')}</h3>
                <p className="text-muted-foreground">{t('waterTapsPage.why.metrics.satisfiedDesc')}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-water">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t('waterTapsPage.why.schoolSpecial.title')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.schoolSpecial.items.0')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.schoolSpecial.items.1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.schoolSpecial.items.2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.schoolSpecial.items.3')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.schoolSpecial.items.4')}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t('waterTapsPage.why.comprehensive.title')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.comprehensive.items.0')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.comprehensive.items.1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.comprehensive.items.2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.comprehensive.items.3')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('waterTapsPage.why.comprehensive.items.4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-water rounded-3xl p-12 text-white shadow-water">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Shield className="h-20 w-20 mx-auto mb-6" />
                  <h2 className="text-4xl font-bold mb-6">
                    {t('waterTapsPage.safety.title')}
                  </h2>
                  <p className="text-xl text-white/90">
                    {t('waterTapsPage.safety.subtitle')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">{t('waterTapsPage.safety.children.title')}</h3>
                    <ul className="space-y-2 text-white/90">
                      <li>✓ {t('waterTapsPage.safety.children.items.0')}</li>
                      <li>✓ {t('waterTapsPage.safety.children.items.1')}</li>
                      <li>✓ {t('waterTapsPage.safety.children.items.2')}</li>
                      <li>✓ {t('waterTapsPage.safety.children.items.3')}</li>
                      <li>✓ {t('waterTapsPage.safety.children.items.4')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">{t('waterTapsPage.safety.hygiene.title')}</h3>
                    <ul className="space-y-2 text-white/90">
                      <li>✓ {t('waterTapsPage.safety.hygiene.items.0')}</li>
                      <li>✓ {t('waterTapsPage.safety.hygiene.items.1')}</li>
                      <li>✓ {t('waterTapsPage.safety.hygiene.items.2')}</li>
                      <li>✓ {t('waterTapsPage.safety.hygiene.items.3')}</li>
                      <li>✓ {t('waterTapsPage.safety.hygiene.items.4')}</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold mb-2">100%</p>
                    <p className="text-white/80">{t('waterTapsPage.safety.stats.safeMaterials')}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2">24/7</p>
                    <p className="text-white/80">{t('waterTapsPage.safety.stats.support')}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2"> {t('cta.warrantyShort')}</p>
                    <p className="text-white/80">{t('waterTapsPage.safety.stats.warranty')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <SchoolComparisonSection />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              {t('waterTapsPage.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {t('waterTapsPage.cta.subtitle')}
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://wa.me/77001112233?text=Здравствуйте! Хочу рассчитать проект для нашей школы" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  {t('cta.whatsapp')}
                </Button>
              </a>
              <a href="tel:+77001112233">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  {t('cta.call')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WaterTaps;