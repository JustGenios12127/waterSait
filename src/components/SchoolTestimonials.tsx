import { Quote, Star, GraduationCap } from "lucide-react";
import school18 from "@/assets/18sh.jpg";
import school25 from "@/assets/25sh.jpg";
import school27 from "@/assets/27sh.jpg";
import school211 from "@/assets/211sh.jpg";
import school154 from "@/assets/154sh.jpg";
import school166 from "@/assets/166sh.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/translations";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const SchoolTestimonials = () => {
  const { language, t } = useLanguage();
  const imageMap = [school211, school154, school166, school18, school25, school27];

  const defaultTestimonials = [
    {
      school: "КГУ Школа-гимназия № 211",
      director: "КАСЫМОВА АЙЖАН ТОЙБЕКОВНА",
      position: "Директор",
      text: "После установки пурифайеров BAO Company заметно снизилось количество пропусков по болезни. Дети стали больше пить воды, а родители благодарят за заботу о здоровье их детей. Это была одна из лучших инвестиций в инфраструктуру школы.",
      students: "1200 учеников",
      rating: 5,
      image: school211,
    },
    {
      school: "Общеобразовательная школа №154 им. И.К. Мандоки",
      director: "Алмасбаева Каламкас Калиевна",
      position: "Директор",
      text: "Раньше мы тратили огромные средства на бутилированную воду, но проблема доступа к питьевой воде оставалась. Теперь у нас 8 пурифайеров на всех этажах, и каждый ученик может пить чистую воду в любое время. Экономия бюджета составила 40%!",
      students: "890 учеников",
      rating: 5,
      image: school154,
    },
    {
      school: "Лицей №166",
      director: "АХМЕТОВ ТАЛГАТ ДУЙСЕНАЛИЕВИЧ",
      position: "Исполнительный директор",
      text: "Качество воды - это здоровье наших детей. BAO Company не только установили современное оборудование, но и регулярно проводят обслуживание. Родительский комитет полностью поддержал это решение. Рекомендуем всем образовательным учреждениям!",
      students: "650 учеников",
      rating: 5,
      image: school166,
    },
    {
      school: "КГУ Гимназия №18",
      director: "НАУРЫЗБАЕВА ГУЛЬДЖАМИЛЯ КАРАТАЕВНА",
      position: "Директор",
      text: "Установка питьевых фонтанчиков полностью решила проблему обеспечения детей чистой водой. Ученики довольны, учителя отмечают повышение концентрации на уроках. Сервис BAO Company на высшем уровне!",
      students: "980 учеников",
      rating: 5,
      image: school18,
    },
    {
      school: "КГУ Гимназия №25 имени Ильяса Есенберлина",
      director: "АМАНБАЙ ГАЗИЗА АБДЫҚАЛЫҚҚЫЗЫ",
      position: "Директор",
      text: "Мы выбрали BAO Company по рекомендации коллег и не пожалели. Качество воды отличное, дети с удовольствием пользуются фонтанчиками. Особенно радует экономия - больше не нужно закупать бутилированную воду!",
      students: "750 учеников",
      rating: 5,
      image: school25,
    },
    {
      school: "КГУ Гимназия № 27",
      director: "СЮМБАЕВА ГУЛЬЖАН ТЕМЕРХАНОВНА",
      position: "Исполнительный директор",
      text: "Современные технологии очистки воды от BAO Company впечатляют. Родители высоко оценили нашу заботу о здоровье детей. Это инвестиция, которая окупается здоровьем наших учеников.",
      students: "520 учеников",
      rating: 5,
      image: school27,
    },
  ];

  const translatedItems = (translations as any)[language]?.testimonials?.items as any[] | undefined;

  const testimonials = translatedItems && translatedItems.length
    ? translatedItems.map((item: any, idx: number) => ({
        school: item.school,
        director: item.director,
        position: item.position,
        text: item.text,
        students: item.students,
        rating: item.rating ?? 5,
        image: imageMap[idx % imageMap.length],
      }))
    : defaultTestimonials;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-transparent via-water-light/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-water bg-clip-text text-transparent">
              {t('testimonials.title')}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <div
                    className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-water transition-all duration-300 hover:-translate-y-2 animate-slide-up relative overflow-hidden h-full flex flex-col"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Декоративный элемент */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-water opacity-5 rounded-full -translate-y-16 translate-x-16" />
                    
                    {/* Фото школы */}
                    <div className="mb-4 rounded-xl overflow-hidden h-48 relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.school}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-gradient-water text-white p-2 rounded-full">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Рейтинг */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Название школы */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {testimonial.school}
                    </h3>
                    <p className="text-sm text-primary mb-4">{testimonial.students}</p>

                    {/* Отзыв */}
                    <div className="relative mb-6 flex-grow">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10" />
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic pl-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Директор */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {testimonial.director}
                      </p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* CTA блок */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-water text-white px-6 py-3 rounded-full shadow-water">
            <span className="text-2xl font-bold">500+</span>
            <span className="text-sm">{t('testimonials.trustLabel')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTestimonials;