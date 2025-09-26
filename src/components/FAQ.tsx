import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/translations";
const FAQ = () => {
  const { t, language } = useLanguage();
  const translatedFaqs = (translations as any)[language]?.faq?.items as { question: string; answer: string }[] | undefined;
  const faqs = translatedFaqs && translatedFaqs.length ? translatedFaqs : [
    {
      question: "Как часто нужно менять фильтры?",
      answer: "Рекомендуемая частота замены фильтров зависит от интенсивности использования. В среднем, основные фильтры меняются раз в 6 месяцев, а UV-лампы - раз в год. Мы предоставляем график обслуживания для каждой системы.",
    },
    {
      question: "Подходят ли ваши системы для детских учреждений?",
      answer: "Да, все наши системы сертифицированы для использования в детских садах и школах. Они оснащены специальными функциями безопасности: защита от ожогов, антивандальное исполнение и бесконтактная подача воды.",
    },
    {
      question: "Какая гарантия на оборудование?",
      answer: "Мы предоставляем гарантию 1 года.",
    },
    {
      question: "Можно ли установить систему самостоятельно?",
      answer: "Мы рекомендуем профессиональную установку нашими специалистами для обеспечения правильной работы и сохранения гарантии. Установка включена в стоимость при покупке полного комплекта.",
    },
    {
      question: "Какие технологии очистки используются?",
      answer: "Наши системы используют многоступенчатую очистку: механическая фильтрация, угольные фильтры, обратный осмос (в премиум моделях) и UV-обеззараживание. Это обеспечивает удаление 99.9% загрязнений.",
    },
    {
      question: "Есть ли возможность аренды оборудования?",
      answer: "Да, мы предлагаем гибкие условия аренды для образовательных учреждений и офисов. Это включает установку, обслуживание и замену расходных материалов.",
    },
  ];

  return (
    <section className="py-20 bg-water-light/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-water bg-clip-text text-transparent">
              {t('faq.title')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl px-6 shadow-soft transition-all duration-300 hover:shadow-card hover:scale-105"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;