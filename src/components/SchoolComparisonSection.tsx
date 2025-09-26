import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown, ShieldCheck, Users, Heart, Droplets } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SchoolComparisonSection: React.FC = () => {
  // Было: const [students, setStudents] = useState(500);
  // Стало: пустая строка по умолчанию, чтобы поле было пустым
  const [students, setStudents] = useState<string>("");

  const { language } = useLanguage();

  // Фиксированные значения
  const avgWeight = 35; // средний вес ученика
  const bottlePrice = 1100; // цена за бутыль 19л
  const tapsCostPerLiter = 4; // стоимость за литр с кранчиками

  // Парсим число учеников только из введённой строки
  const studentsNum = Number(students) || 0;

  // Расчёты (всё безопасно работает при 0)
  const dailyWaterPerStudent = (avgWeight * 30) / 1000; // литров в день на ученика
  const monthlyWaterPerStudent = dailyWaterPerStudent * 22; // учебных дней в месяце
  const totalMonthlyWater = monthlyWaterPerStudent * studentsNum;
  const bottlesNeeded = Math.ceil(totalMonthlyWater / 19);
  const dispenserCost = bottlesNeeded * bottlePrice;
  const tapsCost = totalMonthlyWater * tapsCostPerLiter;
  const monthlySavings = Math.max(0, dispenserCost - tapsCost);
  // оставляю твою формулу с *79, но защищаю от деления на 0
  const savingsPercent = dispenserCost > 0 ? Math.round((monthlySavings / dispenserCost) * 79) : 0;

  const comparisonData = {
    ru: {
      title: "Сравнение затрат для школ",
      subtitle: "Диспенсеры vs Кранчики для питьевой воды",
      calculator: {
        title: "Калькулятор экономии для школы",
        studentsLabel: "Количество учеников",
        avgWeightLabel: "Средний вес ученика (кг)",
        dailyWater: "Вода в день на ученика",
        monthlyWater: "Вода в месяц на ученика",
        totalMonthly: "Общий расход воды в месяц",
        bottles: "Требуется бутылей (19л)",
        liters: "литров",
        pieces: "шт",
      },
      dispenser: {
        title: "Диспенсеры с бутылями",
        price: "1100 ₸/бутыль",
        delivery: "Постоянные поставки",
        storage: "Нужно место для хранения",
        hygiene: "Риск загрязнения при замене",
        access: "Ограниченные точки доступа",
        monthly: "В месяц",
      },
      taps: {
        title: "Кранчики для воды",
        price: "4 ₸/литр",
        connection: "Прямое подключение",
        storage: "Не требует хранения",
        hygiene: "Гигиеничная подача",
        access: "Множество точек доступа",
        monthly: "В месяц",
      },
      savings: {
        title: "Ваша экономия",
        monthly: "Ежемесячная экономия",
        yearly: "Годовая экономия",
        perStudent: "Экономия на ученика в месяц",
      },
      benefits: {
        title: "Преимущества для школы",
        items: [
          "Неограниченный доступ к чистой воде для всех учеников",
          "Отсутствие очередей и толкучки возле кулеров",
          "Удобные питьевые фонтанчики на разной высоте",
          "Экономия средств школьного бюджета до 70%",
          "Соответствие санитарным нормам для учебных заведений",
          "Формирование здоровых привычек у детей",
        ],
      },
    },
    kz: {
      title: "Мектептер үшін шығындарды салыстыру",
      subtitle: "Диспенсерлер vs Ауыз су крандары",
      calculator: {
        title: "Мектеп үшін үнемдеу калькуляторы",
        studentsLabel: "Оқушылар саны",
        avgWeightLabel: "Оқушының орташа салмағы (кг)",
        dailyWater: "Оқушыға күніне су",
        monthlyWater: "Оқушыға айына су",
        totalMonthly: "Айына жалпы су шығыны",
        bottles: "Бөтелке қажет (19л)",
        liters: "литр",
        pieces: "дана",
      },
      dispenser: {
        title: "Бөтелкелі диспенсерлер",
        price: "1100 ₸/бөтелке",
        delivery: "Тұрақты жеткізілім",
        storage: "Сақтау орны қажет",
        hygiene: "Ауыстыру кезінде ластану қаупі",
        access: "Шектеулі қол жетімділік нүктелері",
        monthly: "Айына",
      },
      taps: {
        title: "Су крандары",
        price: "4 ₸/литр",
        connection: "Тікелей қосылу",
        storage: "Сақтауды қажет етпейді",
        hygiene: "Гигиеналық беру",
        access: "Көптеген қол жетімділік нүктелері",
        monthly: "Айына",
      },
      savings: {
        title: "Сіздің үнеміңіз",
        monthly: "Айлық үнем",
        yearly: "Жылдық үнем",
        perStudent: "Айына бір оқушыға үнем",
      },
      benefits: {
        title: "Мектеп үшін артықшылықтар",
        items: [
          "Барлық оқушылар үшін таза суға шексіз қол жеткізу",
          "Кулерлер жанында кезек пен толқудың болмауы",
          "Әр түрлі биіктіктегі ыңғайлы ауыз су фонтандары",
          "Мектеп бюджетінің 70% дейін үнемдеу",
          "Оқу орындары үшін санитарлық нормаларға сәйкестік",
          "Балаларда салауатты әдеттерді қалыптастыру",
        ],
      },
    },
  };

  const content = comparisonData[language as "ru" | "kz"] || comparisonData.ru;

  const yearlySavings = monthlySavings * 10; // как у тебя в коде
  const perStudentSaving = studentsNum > 0 ? Math.round(monthlySavings / studentsNum) : 0;

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground">{content.subtitle}</p>
        </div>

        {/* Калькулятор */}
        <Card className="mb-8 border-primary/20 shadow-lg">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calculator className="h-6 w-6 text-primary" />
              {content.calculator.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
              <div>
                <Label htmlFor="students" className="text-base font-medium mb-2 block">
                  {content.calculator.studentsLabel}
                </Label>
                <Input
                  id="students"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="введите количество"
                  value={students}
                  onChange={(e) => {
                    // пропускаем только цифры
                    const onlyDigits = e.target.value.replace(/\D+/g, "");
                    setStudents(onlyDigits);
                  }}
                  className="text-lg"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">{content.calculator.dailyWater}:</p>
                  <p className="text-lg font-semibold text-foreground">
                    {dailyWaterPerStudent.toFixed(1)} {content.calculator.liters}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{content.calculator.monthlyWater}:</p>
                  <p className="text-lg font-semibold text-foreground">
                    {monthlyWaterPerStudent.toFixed(1)} {content.calculator.liters}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{content.calculator.totalMonthly}:</p>
                  <p className="text-lg font-semibold text-foreground">
                    {totalMonthlyWater.toFixed(0)} {content.calculator.liters}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{content.calculator.bottles}:</p>
                  <p className="text-lg font-semibold text-foreground">
                    {bottlesNeeded} {content.calculator.pieces}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Сравнение */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-destructive/20 relative">
            <div className="absolute -top-3 -left-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
              ❌
            </div>
            <CardHeader className="bg-destructive/5">
              <CardTitle className="text-xl">{content.dispenser.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <p className="text-muted-foreground">❌ {content.dispenser.price}</p>
                <p className="text-muted-foreground">❌ {content.dispenser.delivery}</p>
                <p className="text-muted-foreground">❌ {content.dispenser.storage}</p>
                <p className="text-muted-foreground">❌ {content.dispenser.hygiene}</p>
                <p className="text-muted-foreground">❌ {content.dispenser.access}</p>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">{content.dispenser.monthly}:</p>
                <p className="text-2xl font-bold text-destructive">
                  {dispenserCost.toLocaleString()} ₸
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 relative">
            <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              ✅
            </div>
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-xl">{content.taps.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <p className="text-muted-foreground">✅ {content.taps.price}</p>
                <p className="text-muted-foreground">✅ {content.taps.connection}</p>
                <p className="text-muted-foreground">✅ {content.taps.storage}</p>
                <p className="text-muted-foreground">✅ {content.taps.hygiene}</p>
                <p className="text-muted-foreground">✅ {content.taps.access}</p>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">{content.taps.monthly}:</p>
                <p className="text-2xl font-bold text-primary">
                  {tapsCost.toLocaleString()} ₸
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Экономия */}
        <Card className="mb-8 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-8">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <TrendingDown className="h-6 w-6 text-primary" />
                  {content.savings.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    {content.savings.monthly}:{" "}
                    <span className="text-2xl font-bold text-primary">
                      {monthlySavings.toLocaleString()} ₸
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    {content.savings.yearly}:{" "}
                    <span className="text-xl font-semibold text-primary">
                      {yearlySavings.toLocaleString()} ₸
                    </span>
                  </p>
                  <p className="text-muted-foreground">
                    {content.savings.perStudent}:{" "}
                    <span className="font-semibold text-primary">
                      {perStudentSaving.toLocaleString()} ₸
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {savingsPercent}%
                </div>
                <p className="text-muted-foreground">{content.savings.monthly}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Преимущества */}
        <Card className="border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              {content.benefits.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {content.benefits.items.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    {index === 0 && <Droplets className="h-5 w-5 text-primary" />}
                    {index === 1 && <Users className="h-5 w-5 text-primary" />}
                    {index === 2 && <Heart className="h-5 w-5 text-primary" />}
                    {index === 3 && <TrendingDown className="h-5 w-5 text-primary" />}
                    {index === 4 && <ShieldCheck className="h-5 w-5 text-primary" />}
                    {index === 5 && <Heart className="h-5 w-5 text-primary" />}
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SchoolComparisonSection;
