import { Droplets, Phone, Mail, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 mt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-2000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <Droplets className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <span className="text-lg sm:text-xl font-bold">BAO Company</span>
            </div>
            <p className="text-white/90 text-sm sm:text-base">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">{t('footer.products')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/water-fountain" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block text-sm sm:text-base">
                  → {t('nav.waterFountain')}
                </Link>
              </li>
              <li>
                <Link to="/water-taps" className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block text-sm sm:text-base">
                  → {t('nav.waterTaps')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#about');
                      setTimeout(() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block text-sm sm:text-base text-left"
                >
                  → {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#faq');
                      setTimeout(() => {
                        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block text-sm sm:text-base text-left"
                >
                  → {t('faq.title')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#products');
                      setTimeout(() => {
                        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="text-white/80 hover:text-white transition-all hover:translate-x-1 inline-block text-sm sm:text-base text-left"
                >
                  → {t('nav.products')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">{t('footer.contacts')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg backdrop-blur-sm flex-shrink-0 mt-0.5">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <div>
                  <p className="text-white/70 text-xs">Кайсар:</p>
                  <a href="tel:+77001112233" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    +7 (700) 111-22-33
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg backdrop-blur-sm flex-shrink-0 mt-0.5">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <div>
                  <p className="text-white/70 text-xs">Елдос:</p>
                  <a href="tel:+77004445566" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    +7 (700) 444-55-66
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg backdrop-blur-sm flex-shrink-0">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <a href="mailto:info@baocompany.kz" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base break-all">
                  info@baocompany.kz
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg backdrop-blur-sm flex-shrink-0">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <span className="text-white/90 text-sm sm:text-base">{t('contact.info.addressValue')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/70 text-xs sm:text-sm text-center md:text-left">&copy; 2024 BAO Company. {t('footer.rights')}</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;