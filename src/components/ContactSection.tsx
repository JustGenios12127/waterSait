import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-water-light via-accent/10 to-secondary/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-text bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 px-4">
            {t('contact.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="https://wa.me/77001112233?text=Здравствуйте! Меня интересуют ваши продукты для водоснабжения" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                {t('cta.whatsapp')}
              </Button>
            </a>
            
            <a 
              href="/presentation.pdf" 
              download="BAO-Company-Presentation.pdf"
              className="group w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="hero"
                className="shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
              >
                <Download className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                {t('cta.downloadPresentation')}
              </Button>
            </a>
          </div>

          <div className="mt-8 sm:mt-12 grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('contact.features.quick.title')}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{t('contact.features.quick.text')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Phone className="h-7 w-7 sm:h-8 sm:w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('contact.features.consult.title')}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{t('contact.features.consult.text')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <svg className="h-7 w-7 sm:h-8 sm:w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('contact.features.coverage.title')}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{t('contact.features.coverage.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;